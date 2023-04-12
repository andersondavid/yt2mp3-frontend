import CenterBox from "@/components/CenterBox";
import axios from "axios";
import { useEffect, useState } from "react";
import io from "socket.io-client";

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

export default function Home() {
	const [loading, setLoading] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				await axios.post("http://localhost:3000/api/io/").then(() => {
					const socket = io("http://localhost:3000");

					socket.on("connect", () => {
						console.log("Conectado ao servidor Socket.IO");
					});

					socket.emit("start_url", {
						url: "https://www.youtube.com/watch?v=xTyPkH8D9kY&list=RDGMEMCMFH2exzjBeE_zAHHJOdxg&start_radio=1&rv=WlwU69fRnp4",
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

		if (counter) {
			fetchData();
		}
		counter = true;
	}, []);

	return (
		<div className="h-screen w-screen flex">
			<CenterBox />
		</div>
	);
}
