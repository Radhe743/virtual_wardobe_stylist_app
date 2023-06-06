import { TextureBlendMode } from "@/store";
import {
	FileIcon,
	ColorWheelIcon,
	IconShirt,
	IconJeans,
	IconShorts,
	WomansPajamaIcon,
	EditIcon,
} from "@/assets";

export const EditorTabNames = {
	COLOR_PICKER: "COLOR_PICKER",
	FILE_PICKER: "FILE_PICKER",
	EDIT: "EDIT",
};
export const EditorTabsList = [
	{ name: EditorTabNames.COLOR_PICKER, icon: ColorWheelIcon },
	{ name: EditorTabNames.FILE_PICKER, icon: FileIcon },
	{ name: EditorTabNames.EDIT, icon: EditIcon },
];

export const EditorClothTypeTabList = [
	{ name: "shirt", icon: IconShirt },
	{ name: "jeans", icon: IconJeans },
	{ name: "shorts", icon: IconShorts },
	{ name: "womans-pajama", icon: WomansPajamaIcon },
];

export const textureBlendModes: { name: string; type: TextureBlendMode }[] = [
	{ name: "Normal", type: "NORMAL" },
	{ name: "Multiply", type: "MULTIPLY" },
	{ name: "Add", type: "ADD" },
	{ name: "Subtract", type: "SUBTRACT" },
];
