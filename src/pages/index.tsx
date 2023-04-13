import CenterBox from "@/components/CenterBox";
import { useState, useContext, Dispatch, SetStateAction } from "react";

import { DataContext, DataContentContextType } from "../context/DataContext";
import {
	StartServiceFunctionContext,
	StartServiceFunctionType,
} from "../context/StartServiceFunctionContext";
import { ConvertingContext, ConvertingContextType } from "../context/ConvertingContext";

import { startService } from "../services/services";

const startServiceResquest = (contextData: DataContentContextType, convertingData: ConvertingContextType) => {
	startService({ contextData, convertingData });
};

export default function Home() {
	const [loading, setLoading] = useState(false);
	const contextData = useContext<DataContentContextType>(DataContext);
	const startService = useContext<StartServiceFunctionType>(
		StartServiceFunctionContext
	);
	const convertingData = useContext(ConvertingContext);

	startService.cb = function () {
		startServiceResquest(contextData, convertingData);
	};

	return (
		<div className="h-screen w-screen flex">
			{loading && <h2>CARREGANDO...</h2>}
			<CenterBox />
		</div>
	);
}
