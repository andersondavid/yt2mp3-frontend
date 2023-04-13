import { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ContextGlobal } from "../context/Context";

export default function App({ Component, pageProps }: AppProps) {
	const [contextData, setContextData] = useState({});

	const startService = {
		cb: () => {}
	}

	return (
		<ContextGlobal.Provider
			value={{ contextData, setContextData, startService }}
		>
			<Component {...pageProps} />
		</ContextGlobal.Provider>
	);
}
