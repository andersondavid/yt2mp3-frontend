import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { DataContext } from "../context/DataContext";
import { StartServiceFunctionContext } from "../context/StartServiceFunctionContext";
import { ConvertingContext } from "../context/ConvertingContext";

export default function App({ Component, pageProps }: AppProps) {
	const contextData = {
		url: "",
		quality: "",
	};

	const startService = {
		cb: () => {},
	};

	const convertingData = {
		videoName: "",
		loading: false,
	};

	return (
		<DataContext.Provider value={contextData}>
			<StartServiceFunctionContext.Provider value={startService}>
				<ConvertingContext.Provider value={convertingData}>
					<Component {...pageProps} />
				</ConvertingContext.Provider>
			</StartServiceFunctionContext.Provider>
		</DataContext.Provider>
	);
}
