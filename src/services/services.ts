import { ConvertingContextType } from "@/context/ConvertingContext";
import { DataContentContextType } from "@/context/DataContext";
import axios from "axios";
import io from "socket.io-client";

type PropsType = {
	contextData: DataContentContextType;
	convertingData: ConvertingContextType
};

export const startService = async (props: PropsType) => {
	try {
		await axios.post("http://localhost:3000/api/io/").then(() => {
			socketService(props);
		});
	} catch (error) {
		console.log("ERROR: fetchData", error);
	}
};

const socketService = (props: PropsType) => {
	const { contextData, convertingData } = props;
	const socket = io("http://localhost:3000");

	socket.on("connect", () => {
		console.log("Conectado ao servidor Socket.IO");
	});

	socket.emit("start_url", {
		url: contextData.url,
		bitrate: 192,
	});

	socket.on("send_info", (data) => {
		console.log(data.videoDetails.title);
		
		convertingData.videoName = data.videoDetails.title
	});

	socket.on("loading_audio", (bool) => convertingData.loading = bool);

	socket.on("buffer", (buffers, fileName) => {
		const buffer = Buffer.from(buffers);
		createDownloadableObject(buffer, fileName);
	});
};

const createDownloadableObject = (buffer: Buffer, fileName: string) => {
	const blob = new Blob([buffer], { type: "audio/mp3" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
};
