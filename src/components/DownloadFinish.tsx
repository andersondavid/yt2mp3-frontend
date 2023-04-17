import React from "react";

type AppStatusType =
	| "WAIT_CONNECTION"
	| "STANDBY"
	| "CONVERTING"
	| "FINISHED"
	| "ERROR";

type PropTypes = {
	setAppStatus: React.Dispatch<React.SetStateAction<AppStatusType>>;
	resetApp: () => void;
	title: string;
	message: string
};

export default function DownloadFinish({ setAppStatus, resetApp, message, title }: PropTypes) {
	const handleClick = () => {
		setAppStatus("STANDBY");
		resetApp();
	};

	return (
		<div className="">
			<span
				className={`fixed top-0 left-0 w-full h-full bg-slate-800/50 duration-300`}
			></span>
			<div
				className={`fixed flex justify-around items-center -translate-x-1/2 left-1/2 p-2 w-full max-w-xs bg-orange-400 rounded-md border-black border-2 border-b-4 duration-700 top-10`}
			>
				<div className="">
					<span className="text-lg font-bold  block">{title}</span>
					<span className="text-sm block">{message}</span>
				</div>
				<div>
					<button
						onClick={handleClick}
						className="border-black border-2 border-b-4 rounded-lg p-2 text-lg w-55 bg-green-500 font-bold disabled:bg-green-600"
					>
						NOVO
					</button>
				</div>
			</div>
		</div>
	);
}
