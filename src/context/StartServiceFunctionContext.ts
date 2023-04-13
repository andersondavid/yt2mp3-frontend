import { createContext } from "react";

export type StartServiceFunctionType = {
	cb: () => void;
};

export const StartServiceFunctionContext = createContext({} as StartServiceFunctionType);
