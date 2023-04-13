import { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { DataContext } from "../context/DataContext";
import { StartServiceFunctionContext } from "../context/StartServiceFunctionContext";

export default function App({ Component, pageProps }: AppProps) {
	const contextData = {
		url: "",
		quality: "",
	};

	const startService = {
		cb: () => {},
	};

	return (
		<DataContext.Provider value={contextData}>
			<StartServiceFunctionContext.Provider value={startService}>
				<Component {...pageProps} />
			</StartServiceFunctionContext.Provider>
		</DataContext.Provider>
	);
}
