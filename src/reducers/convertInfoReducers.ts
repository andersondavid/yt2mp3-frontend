type ActionType = {
	type: string;
	payload: string;
};

//type AppStatusType = "STANDBY" | "CONVERTING" | "FINISHED" | "OFFLINE"

export const initialState = {
	url: "",
	quality: "good",
};

export function reducer(state = initialState, action: ActionType) {
	switch (action.type) {
		case "UPDATE_URL":
			return { ...state, url: action.payload };
		case "UPDATE_QUALITY":
			return { ...state, quality: action.payload };
		case "RESET_APP":
			return {...state, url: "" }
		default:
			return state;
	}
}
