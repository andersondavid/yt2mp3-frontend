import React, { useReducer, useState } from "react";
import QualitySelect from "@/components/QualitySelect";
import InputContainer from "@/components/InputContainer";
import LogoContainer from "@/components/LogoContainer";
import AboutContainer from "@/components/AboutContainer";
import SubmitButton from "@/components/SubmitButton";
import VideoTitle from "@/components/VideoTitle";
import DownloadFinish from "@/components/DownloadFinish";

import { reducer, initialState } from "@/reducers/convertInfoReducers";
import { runServices } from "@/services/services";

type AppStatusType =
	| "WAIT_CONNECTION"
	| "STANDBY"
	| "CONVERTING"
	| "FINISHED"
	| "ERROR";

export default function Home() {
	const [convertInfoState, convertInfoDispatch] = useReducer(
		reducer,
		initialState
	);

	const [loading, setLoading] = useState(false);
	const [videoTitle, setVideoTitle] = useState<string>("");
	const [appStatus, setAppStatus] = useState<AppStatusType>("WAIT_CONNECTION");
	const [fileName, setFileName] = useState("");

	const handleConvertInfo = () => {
		runServices(convertInfoState, {
			setLoading,
			setAppStatus,
			setVideoTitle,
			setFileName,
		});
	};

	const resetApp = () => {
		convertInfoDispatch({
			type: "RESET_APP",
			payload: "",
		});
		setVideoTitle("");
	};

	return (
		<div className="h-screen w-screen flex justify-center p-20 md:p-0 md:items-center bg-white md:bg-stone-300 font-mono">
			<div className="md:border-black md:border-2 md:border-b-4 p-4 rounded-lg bg-white">
				<LogoContainer />
				<VideoTitle videoTitle={videoTitle} />
				<InputContainer
					reducerDispatch={convertInfoDispatch}
					reducerValue={convertInfoState}
					loading={loading}
				/>
				<SubmitButton submit={handleConvertInfo} loading={loading} />
				<QualitySelect
					reducerDispatch={convertInfoDispatch}
					reducerValue={convertInfoState}
					loading={loading}
				/>
				<AboutContainer />
			</div>
			{!loading && appStatus === "FINISHED" && (
				<DownloadFinish
					setAppStatus={setAppStatus}
					resetApp={resetApp}
					title="Download Concluido!"
					message={fileName}
				/>
			)}
		</div>
	);
}
