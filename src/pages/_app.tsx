import { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { DataContext } from "../context/DataContext";
import {
	StartServiceFunctionContext,
	StartServiceFunctionType,
} from "../context/StartServiceFunctionContext";

export default function App({ Component, pageProps }: AppProps) {
	const [contextData, setContextData] = useState({
		url: "",
		quality: "",
	});

	const startService: StartServiceFunctionType = {
		cb: () => {},
	};

	return (
		<DataContext.Provider value={{ contextData, setContextData }}>
			<StartServiceFunctionContext.Provider value={startService}>
				<Component {...pageProps} />
			</StartServiceFunctionContext.Provider>
		</DataContext.Provider>
	);
}
