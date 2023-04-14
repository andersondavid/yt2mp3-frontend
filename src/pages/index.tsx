import React from "react";
import QualitySelect from "@/components/QualitySelect";
import InputContainer from "@/components/InputContainer";
import LogoContainer from "@/components/LogoContainer";
import AboutContainer from "@/components/AboutContainer";
import SubmitButton from "@/components/SubmitButton";
import VideoTitle from "@/components/VideoTitle";

export default function Home() {
	return (
		<div className="h-screen w-screen flex justify-center p-20 md:p-0 md:items-center bg-white md:bg-stone-300 font-mono">
			<div className="md:border-black md:border-2 md:border-b-4 p-4 rounded-lg bg-white">
				<LogoContainer />
				<VideoTitle videoTitle="Dragon ball super ULTRA INSTINCT THEME SONG 'Ka Ka Kachi Daze' EXTENDED" />
				<InputContainer />
				<SubmitButton />
				<QualitySelect />
				<AboutContainer />
			</div>
		</div>
	);
}
