import React from "react";
import QualitySelect from "./QualitySelect";
import InputContainer from "./InputContainer";
import LogoContainer from "./LogoContainer";
import AboutContainer from "./AboutContainer";

export default function CenterBox() {
	return (
<div className="h-screen w-screen flex justify-center items-center bg-stone-200  font-mono">
  <div className="border-black border-2 border-b-4 p-4 rounded-lg bg-white">
		<LogoContainer />
		<InputContainer />
		<QualitySelect />
		<AboutContainer />
  </div>
</div>
	);
}
