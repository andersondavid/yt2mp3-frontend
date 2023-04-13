import React from "react";
import QualitySelect from "./QualitySelect";
import InputContainer from "./InputContainer";
import LogoContainer from "./LogoContainer";
import AboutContainer from "./AboutContainer";

export default function CenterBox() {
	return (
<div className="h-screen w-screen flex justify-center p-20 md:p-0 md:items-center bg-white md:bg-stone-300 font-mono">
  <div className="md:border-black md:border-2 md:border-b-4 p-4 rounded-lg bg-white">
		<LogoContainer />
		<InputContainer />
		<QualitySelect />
		<AboutContainer />
  </div>
</div>
	);
}
