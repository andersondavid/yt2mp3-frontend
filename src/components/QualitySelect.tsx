import React, { useContext } from "react";
import { DataContext, DataContextType } from "../context/DataContext";

export default function QualitySelect() {
	const { contextData, setContextData } =
		useContext<DataContextType>(DataContext);

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const optionSelect = event.target.value;
		setContextData({...contextData, quality: optionSelect});
	};

	return (
		<div className="flex flex-col max-w-max m-auto mt-4">
			<p className="mb-1 font-bold">Qualidade</p>
			<div className="box-border border-black border-2 rounded-lg p-2">
				<div className="inline">
					<input
						type="radio"
						name="quality"
						value="regular"
						onChange={handleRadioChange}
						className="before:content-[''] checked:before:block before:h-[16px] before:w-[16px] before:rounded-full before:m-[-2px] before:bg-green-500 mr-2 border-black border-2 focus:ring-0 focus:ring-transparent"
					/>
					<p className="inline  mr-2">Regular</p>
				</div>
				<div className="inline">
					<input
						type="radio"
						name="quality"
						value="good"
						onChange={handleRadioChange}
						className="before:content-[''] checked:before:block before:h-[16px] before:w-[16px] before:rounded-full before:m-[-2px] before:bg-green-500 mr-2 border-black border-2 focus:ring-0 focus:ring-transparent"
					/>
					<p className="inline mr-2">Boa</p>
				</div>
				<div className="inline">
					<input
						type="radio"
						name="quality"
						value="great"
						onChange={handleRadioChange}
						className="before:content-[''] checked:before:block before:h-[16px] before:w-[16px] before:rounded-full before:m-[-2px] before:bg-green-500 mr-2 border-black border-2 focus:ring-0 focus:ring-transparent"
					/>
					<p className="inline  mr-2">Ótima</p>
				</div>
			</div>
		</div>
	);
}
