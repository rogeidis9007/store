import { useState } from "react";
import "./textfield.css";
interface SelectOptionsProps {
	placeholder?: string;
	value: string;
	name?: string;
	onChange: (value: string) => void;
	options:Array<object>;
	label?: string;
	styleClass?: string;
	disabled?: boolean;
	required?: boolean;
}

export default function TimePicker(props:SelectOptionsProps) {
	const [validationErrors, _] = useState([]);
	const [visiblelabel, ] = useState(false);
	console.log(props);
	
	
	return (
		<label className=" text-accent-color flex flex-col gap-1 w-full">
			<div className={`${!visiblelabel ? "hidden" : ""} animate-fade-up animate-ease-linear `}>{'Label'}</div>
			{/*props.required && <span className="text-[#ff0000]">*</span>*/}
			<input type="number"/>
			{validationErrors.length > 0 && <p className="text-xs text-red-600 font-normal">{validationErrors[0]}</p>}
		</label>
	);
}
