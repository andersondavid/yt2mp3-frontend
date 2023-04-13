import { createContext } from "react";

export type DataContentContextType = {
	url: string;
	quality: string;
};

export const DataContext = createContext({} as DataContentContextType);
