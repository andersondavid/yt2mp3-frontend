import createFileName from "@/utils/createFileName";
import axios, { AxiosResponse } from "axios";
import React from "react";
import io from "socket.io-client";

const HOST = "https://late-resonance-3986.fly.dev/";
//const HOST = 'http://localhost:3000/'
const REQUEST_STATUS_OK = "REQUEST_STATUS_OK";
interface ResquestStatus {
	status: string;
	userId: string;
}

export interface DataForConvertQualityType {
	url: string;
	quality: string;
}

type AppStatusType =
	| "WAIT_CONNECTION"
	| "STANDBY"
	| "CONVERTING"
	| "FINISHED"
	| "ERROR";

type SetStatesType = {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setVideoTitle: React.Dispatch<React.SetStateAction<string>>;
	setAppStatus: React.Dispatch<React.SetStateAction<AppStatusType>>;
	setFileName: React.Dispatch<React.SetStateAction<string>>;
};

type States = {
	videoTitle: string;
};

interface DataForConvertBitrateType {
	url: string;
	bitrate: number;
}


const initialRequestService = async (): Promise<
	AxiosResponse<ResquestStatus>
> => {
	try {
		const result = await axios.get<ResquestStatus>(
			`${HOST}api/io`
		);
		console.log("request");
		return result;
	} catch (error) {
		console.log("services.ts: Error de request " + error);

		throw Error;
	}
};

const socketService = (
	dataForConvert: DataForConvertBitrateType,
	state: States,
	setStates: SetStatesType
) => {
	const { url, bitrate } = dataForConvert;
	const socket = io(`${HOST}`);
	let VIDEO_TITLE: string
	socket.on("connect", () => {
		console.log("Conectado ao servidor Socket.IO");
	});

	socket.emit("start_url", {
		url,
		bitrate,
	});

	socket.on("send_info", (data) => {
		console.log('Titulo do Video', data.videoDetails.title);
		
		VIDEO_TITLE = data.videoDetails.title
		setStates.setVideoTitle(data.videoDetails.title);
	});

	socket.on("loading_audio", (bool) => {
		console.log("loading_audio", bool);
		setStates.setLoading(bool);
	});

	socket.on("buffer", (buffers) => {
		setStates.setAppStatus("FINISHED");
		const fileName = createFileName(VIDEO_TITLE);
		console.log('Nome do arquivo', fileName);

		setStates.setFileName(fileName);

		const buffer = Buffer.from(buffers);
		createDownloadableObject(buffer, fileName);
	});
};

const createDownloadableObject = (buffer: Buffer, fileName: string) => {
	console.log("filename", fileName);

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

export const runServices = async (
	dataForConvert: DataForConvertQualityType,
	setStates: SetStatesType,
	states: States
) => {
	let qualityBitrate: number;
	switch (dataForConvert.quality) {
		case "regular":
			qualityBitrate = 128;
			break;
		case "good":
			qualityBitrate = 192;
			break;
		case "great":
			qualityBitrate = 256;
			break;

		default:
			qualityBitrate = 192;
			break;
	}

	const dataForConvertBitrate: DataForConvertBitrateType = {
		url: dataForConvert.url,
		bitrate: qualityBitrate,
	};
	socketService(dataForConvertBitrate, states, setStates);

	// const initialResquestResult: InitialResquestResultType =
	// 	await initialRequestService();
	// const resquestStatus = initialResquestResult.data.status;

	// if (resquestStatus == REQUEST_STATUS_OK) {
	// 	setStates.setAppStatus("CONVERTING");
	// 	socketService(dataForConvertBitrate, setStates);
	// }
};
