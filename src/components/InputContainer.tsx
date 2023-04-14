import React, { useState, useContext, useRef } from "react";
import { DataContext, DataContentContextType } from "../context/DataContext";
import { StartServiceFunctionContext } from "../context/StartServiceFunctionContext";

export default function InputContainer() {
	const urlInput = useRef<HTMLInputElement>(null);

	const contextData = useContext<DataContentContextType>(DataContext);
	const startService = useContext(StartServiceFunctionContext);


	return (
		<div className="flex">
			<input
				ref={urlInput}
				className="border-black border-2 border-b-4 rounded-lg p-2 text-xl w-80 m-4 focus:border-black focus:ring-0 focus:ring-transparent"
				type="text"
				placeholder="https://www.youtube.com/watch?v=EpySn6FBtB4"
			/>
		</div>
	);
}
