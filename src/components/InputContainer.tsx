import React, { useState, useContext, useRef } from "react";
import { ContextGlobal, MyContextType } from "../context/Context";

export default function InputContainer() {
	const [animClick, setAnimClick] = useState("border-b-4");
	const urlInput = useRef<HTMLInputElement>(null);
	const { contextData, setContextData, startService } = useContext<MyContextType>(ContextGlobal);

	const clickHandle = () => {
		setAnimClick("mt-[2px]");
		setTimeout(() => setAnimClick("border-b-4"), 200);

		const url = urlInput.current?.value;
		setContextData({ ...contextData, url });
		startService.cb()
	};

	return (
		<div className="flex flex-col items-center">
			<input
				ref={urlInput}
				className="border-black border-2 border-b-4 rounded-lg p-2 text-xl w-80 m-4 focus:border-black focus:ring-0 focus:ring-transparent"
				type="text"
				placeholder="https://www.youtube.com/watch?v=EpySn6FBtB4"
			/>
			<button
				onClick={clickHandle}
				className={`border-black border-2 ${animClick} rounded-lg p-2 text-lg w-55 bg-green-500 font-bold`}
			>
				CONVERTER
			</button>
		</div>
	);
}
