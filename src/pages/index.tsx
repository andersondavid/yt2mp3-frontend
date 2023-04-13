import CenterBox from "@/components/CenterBox";
import {
	useEffect,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
} from "react";
import axios from "axios";
import io from "socket.io-client";

import { ContextGlobal, MyContextType } from "../context/Context";

let counter = false;

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

const startServiceResquest = async (
	contextData: { url: string; quality: string },
	setLoading: Dispatch<SetStateAction<{}>>
) => {
	try {
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
				createDownloadableObject(buffer, fileName);
			});
		});
	} catch (error) {
		console.log("ERROR: fetchData", error);
	}
};

export default function Home() {
	const [loading, setLoading] = useState();
	const { contextData, setContextData, startService } =
		useContext<MyContextType>(ContextGlobal);

	startService.cb = function () {
		console.log("chama");

		startServiceResquest(contextData, setContextData);
	};

	return (
		<div className="h-screen w-screen flex">
			<CenterBox />
		</div>
	);
}
