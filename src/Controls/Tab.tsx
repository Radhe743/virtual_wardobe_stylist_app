import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type TabProps = {
	name: string;
	icon: StaticImageData;
	current?: boolean;
	handleClick?: (...args: any) => void;
};

const Tab: React.FC<TabProps> = ({
	icon,
	name,
	current = false,
	handleClick = () => {},
}) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className={`border-[1px] border-red-200  p-1 rounded-full user-select-none hover:border-red-500  transition-all bg-white ${
				current ? "border-red-300 shadow-md" : "border-transparent"
			}`}
		>
			<div onClick={() => handleClick(name)} className="cursor-pointer w-9">
				<img
					src={icon.src}
					className="object-contain w-full h-full"
					alt={name}
				/>
			</div>
		</motion.div>
	);
};

export default Tab;
