import React, { Dispatch, useEffect, useState } from "react";

type PropType = {
	videoTitle: string;
};

type TitleAnimType = (
	propTitle: string,
	setAnim: Dispatch<React.SetStateAction<string>>,
	setTitle: Dispatch<React.SetStateAction<string>>
) => void;

const titleAnimation: TitleAnimType = (propTitle, setAnim, setTitle) => {
	setAnim("h-7");
	const titleArray = propTitle.split("");
	let titleAnimationString = "";

	let i = 0;
	const intervalId = setInterval(() => {
		titleAnimationString += titleArray[i];
		setTitle(titleAnimationString);
		i++;

		if (i >= titleArray.length) {
			clearInterval(intervalId);
		}
	}, 125);
};

export default function VideoTitle(props: PropType) {
	const [anim, setAnim] = useState("h-0");
	const [title, setTitle] = useState("");

	const propTitle: string = props?.videoTitle || "";

	useEffect(() => {
		if (propTitle) {
			let shotPropTitle = propTitle.substring(0, 40)
			titleAnimation(shotPropTitle, setAnim, setTitle);
		}
	}, [propTitle]);

	return (
		<div className="mt-4">
			<p className={`text-center font-bold text-lg ${anim} duration-300`}>
				{title}
			</p>
		</div>
	);
}
