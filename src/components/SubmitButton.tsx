import React, { useState } from "react";
import Image from "next/image";

type PropTypes = {
	submit: () => void;
	loading: boolean;
};

export default function SubmitButton({ submit, loading }: PropTypes) {
	const [animClick, setAnimClick] = useState("border-b-4");
	const clickHandle = () => {
		setAnimClick("mt-[2px]");
		setTimeout(() => setAnimClick("border-b-4"), 200);
		submit();
	};

	return (
		<div className="flex justify-center relative">
			{loading && (
				<div className="h-12 w-12 p-3 absolute -ml-48 animate-spin-slow">
					<Image src="/loading.svg" width={24} height={24} alt="loading" />
				</div>
			)}
			<button
				disabled={loading}
				onClick={clickHandle}
				className={`border-black border-2 ${animClick} rounded-lg p-2 text-lg w-55 bg-green-500 font-bold disabled:bg-green-600`}
			>
				{loading ? "CARREGANDO..." : "CONVERTER"}
			</button>
		</div>
	);
}
