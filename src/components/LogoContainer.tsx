import React, { useContext, useEffect } from "react";
import { ConvertingContext } from "../context/ConvertingContext";

export default function LogoContainer() {
	const convertingData = useContext(ConvertingContext);
	useEffect(() => {
		console.log(convertingData);
	}, [convertingData]);
	return (
		<div className="text-center pb-4">
			<h2 className="font-bold text-2xl">Minha Logo</h2>
			{convertingData.videoName && <p>convertingData.videoName</p>}
		</div>
	);
}
