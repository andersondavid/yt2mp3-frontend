import { DataContentContextType } from "@/context/DataContext";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import io from "socket.io-client";

type PropsType = {
	contextData: DataContentContextType;
	setLoading: Dispatch<SetStateAction<boolean>>;
};

export const services = {
	startService: async (props: PropsType) => {
		const { contextData, setLoading } = props;
		try {
			console.log("axios", contextData);

			await axios.post("http://localhost:3000/api/io/").then(() => {
				const socket = io("http://localhost:3000");

				socket.on("connect", () => {
					console.log("Conectado ao servidor Socket.IO");
				});

				socket.emit("start_url", {
					url: contextData.url,
					bitrate: 192,
				});

				socket.on("loading_audio", (bool) => setLoading(bool));

				socket.on("buffer", (buffers, fileName) => {
					const buffer = Buffer.from(buffers);
					services.createDownloadableObject(buffer, fileName);
				});
			});
		} catch (error) {
			console.log("ERROR: fetchData", error);
		}
	},

	createDownloadableObject: (buffer: Buffer, fileName: string) => {
		const blob = new Blob([buffer], { type: "audio/mp3" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
	},
};
