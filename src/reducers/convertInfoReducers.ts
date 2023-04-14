type ActionType = {
	type: string;
	payload: string;
};

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
		default:
			return state;
	}
}
