import React from "react";

export default function QualitySelect() {
	return (
		<div className="flex flex-col max-w-max m-auto mt-4">
			<p className="mb-1 font-bold">Qualidade</p>
			<div className="box-border border-black border-2 rounded-lg p-2">
				<div className="inline">
					<input
						type="checkbox"
						className="mr-2 rounded-full checked:bg-green-500 border-black border-2"
					/>
					<p className="inline  mr-2">Regular</p>
				</div>
				<div className="inline">
					<input
						type="checkbox"
						className="mr-2 rounded-full checked:bg-green-500 border-black border-2"
					/>
					<p className="inline mr-2">Boa</p>
				</div>
				<div className="inline">
					<input
						type="checkbox"
						className="mr-2 rounded-full checked:bg-green-500 border-black border-2"
					/>
					<p className="inline  mr-2">Ótima</p>
				</div>
			</div>
		</div>
	);
}
