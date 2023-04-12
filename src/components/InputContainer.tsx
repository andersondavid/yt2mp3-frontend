import React, { useState } from "react";

export default function InputContainer() {
	const [animClick, setAnimClick] = useState('border-b-4');

	const clickHandle = () => {
		setAnimClick('mt-[2px]')
		setTimeout(() => setAnimClick('border-b-4'), 200)
		
	}

	return (
		<div className="flex flex-col items-center">
			<input
				className="border-black border-2 border-b-4 rounded-lg p-2 text-xl w-80 m-4"
				type="text"
				value="asdasd"
			/>
			<button onClick={clickHandle} className={`border-black border-2 ${animClick} rounded-lg p-2 text-lg w-55 bg-green-500 font-bold`}>
				CONVERTER
			</button>
		</div>
	);
}
