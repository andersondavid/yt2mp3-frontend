import React from "react";
import Image from "next/image";

export default function LogoContainer() {
	return (
		<div className="text-center pb-4 relative h-16">
			<Image src={'/logo.svg'} alt="logo image" fill priority />
		</div>
	);
}
