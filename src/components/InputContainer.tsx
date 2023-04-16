import React, { useRef } from "react";

type PropTypes = {
	reducerDispatch: React.Dispatch<ActionType>;
	reducerValue: { url: string };
	loading: boolean;
};

type ActionType = { type: "UPDATE_URL"; payload: string };

export default function InputContainer({
	reducerDispatch,
	reducerValue,
	loading,
}: PropTypes) {
	const urlInput = useRef<HTMLInputElement>(null);

	const handleInput = () => {
		reducerDispatch({
			type: "UPDATE_URL",
			payload: urlInput.current?.value || "",
		});
	};

	return (
		<div className="flex">
			<input
				disabled={loading}
				ref={urlInput}
				value={reducerValue.url}
				onChange={handleInput}
				className="border-black border-2 border-b-4 rounded-lg p-2 text-xl w-80 m-4 bg-white focus:border-black focus:ring-0 focus:ring-transparent disabled:bg-slate-300"
				type="text"
				placeholder="https://www.youtube.com/watch?v=EpySn6FBtB4"
			/>
		</div>
	);
}
