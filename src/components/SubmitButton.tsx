import React, { useState, useContext, useRef } from "react";

export default function SubmitButton() {
	const [animClick, setAnimClick] = useState("border-b-4");
	const clickHandle = () => {
		setAnimClick("mt-[2px]");
		setTimeout(() => setAnimClick("border-b-4"), 200);

		//startService.cb();
	};
	return (
		<div className="flex justify-center">
			<button
				onClick={clickHandle}
				className={`border-black border-2 ${animClick} rounded-lg p-2 text-lg w-55 bg-green-500 font-bold`}
			>
				CONVERTER
			</button>
		</div>
	);
}
