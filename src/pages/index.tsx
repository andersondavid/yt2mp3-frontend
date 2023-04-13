import CenterBox from "@/components/CenterBox";
import { useState, useContext, Dispatch, SetStateAction } from "react";

import {
	DataContext,
	DataContextType,
	DataContentContextType,
} from "../context/DataContext";
import {
	StartServiceFunctionContext,
	StartServiceFunctionType,
} from "../context/StartServiceFunctionContext";

import { services } from "../services/services";

const startServiceResquest = (
	contextData: DataContentContextType,
	setLoading: Dispatch<SetStateAction<boolean>>
) => {
	services.startService({contextData, setLoading});
};

export default function Home() {
	const [loading, setLoading] = useState(false);
	const { contextData, setContextData } =
		useContext<DataContextType>(DataContext);

	const StartService = useContext<StartServiceFunctionType>(
		StartServiceFunctionContext
	);

	StartService.cb = function () {
		console.log('cb', contextData);
		
		startServiceResquest(contextData, setLoading);
	};

	return (
		<div className="h-screen w-screen flex">
			{loading && <h2>CARREGANDO...</h2>}
			<CenterBox />
		</div>
	);
}
