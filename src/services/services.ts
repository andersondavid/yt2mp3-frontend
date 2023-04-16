import axios, { AxiosResponse } from "axios";
import React from "react";
import io from "socket.io-client";

const REQUEST_STATUS_OK = "REQUEST_STATUS_OK";
interface ResquestStatus {
	status: string;
	userId: string;
}

export interface DataForConvertQualityType {
	url: string;
	quality: string;
}

type SetStatesType = {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setVideoTitle: React.Dispatch<React.SetStateAction<string>>;
};
interface DataForConvertBitrateType {
	url: string;
	bitrate: number;
}

type InitialResquestResultType = AxiosResponse<{
	status: string;
}>;

const listMusics: Array<DataForConvertQualityType> = [];

const initialRequestService = async (): Promise<
	AxiosResponse<ResquestStatus>
> => {
	try {
		const result = await axios.get<ResquestStatus>(
			"http://localhost:3000/api/io/"
		);
		console.log("request");
		return result;
	} catch (error) {
		console.log("services.ts: Error de request " + error);

		throw Error;
	}
};

const socketService = (dataForConvert: DataForConvertBitrateType, setStates: SetStatesType) => {
	const { url, bitrate } = dataForConvert;
	const socket = io("http://localhost:3000");

	socket.on("connect", () => {
		console.log("Conectado ao servidor Socket.IO");
	});

	socket.emit("start_url", {
		url,
		bitrate,
	});

	socket.on("send_info", (data) => {
		console.log("send_info", data);
		setStates.setVideoTitle(data.videoDetails.title)
	});

	socket.on("loading_audio", (bool) => {
		console.log("loading_audio", bool);
		setStates.setLoading(bool)
	});

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

export const runServices = async (
	dataForConvert: DataForConvertQualityType,
	setStates: SetStatesType
) => {
	// const qualityBitrate = {
	// 	regular: 128,
	// 	good: 192,
	// 	great: 256,
	// };

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

	const initialResquestResult: InitialResquestResultType =
		await initialRequestService();
	const resquestStatus = initialResquestResult.data.status;
	if (resquestStatus == REQUEST_STATUS_OK) {
		socketService(dataForConvertBitrate, setStates);
	}
};
