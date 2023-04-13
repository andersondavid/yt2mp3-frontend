import { createContext } from "react";

export type ConvertingContextType = {
	videoName: string,
	loading: boolean
}

export const ConvertingContext = createContext({} as ConvertingContextType)