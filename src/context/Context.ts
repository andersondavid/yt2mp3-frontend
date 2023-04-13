import { createContext, Dispatch, SetStateAction } from "react";

interface MyContextType {
	contextData: {
		url: string;
		quality: string
	};
	setContextData: Dispatch<SetStateAction<{}>>;
	startService: {
		cb: Function
	}
}

const ContextGlobal = createContext<MyContextType>({} as MyContextType);

export type { MyContextType };
export { ContextGlobal };
