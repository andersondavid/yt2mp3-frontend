import { createContext, Dispatch, SetStateAction } from "react";

export type DataContentContextType = {
	url: string;
	quality: string;
};

export type DataContextType = {
	contextData: DataContentContextType;
	setContextData: Dispatch<
		SetStateAction<{
			url: string;
			quality: string;
		}>
	>;
};

export const DataContext = createContext({} as DataContextType);
