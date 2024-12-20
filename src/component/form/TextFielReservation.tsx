import { useState } from "react";
import "./textfield.css";
interface TextInputProps {
	placeholder?: string;
	value: string | number | undefined;
	name?: string;
	onChange: (value: string) => void;
	type: "text" | "email" | "password" | "number";
	label?: string;
	styleClass?: string;
	disabled?: boolean;
	required?: boolean;
}

export default function TextField(props: TextInputProps) {
	const [validationErrors, _] = useState([]);
	const [visiblelabel, setVisibleLabel] = useState(false);

	const onChange = (value: string) => {
		props.onChange(value);
	};

	return (
		<label className=" text-accent-color flex flex-col gap-1 w-full">
			<div className={`${!visiblelabel ? "hidden" : ""} animate-fade-up animate-ease-linear `}>{props.label}</div>
			{/*props.required && <span className="text-[#ff0000]">*</span>*/}
			<input
				//required={props.required}
				disabled={props.disabled}
				className={`placeholder-[#929292] ${props.styleClass}  border-[1px] ${
					validationErrors.length > 0 ? "border-red-600" : "border-[#1F0B01] border-b-2 border-x-0 border-t-0 pl-1 h-[3rem]"
				}  text-black font-normal outline-none`}
				name={props.name}
				type={props.type}
				placeholder={!visiblelabel ? props.placeholder : ""}
				value={props.value}
				onChange={(e) => onChange(e.target.value)}
				onClick={() => !visiblelabel && setVisibleLabel(true)}
			/>
			{validationErrors.length > 0 && <p className="text-xs text-red-600 font-normal">{validationErrors[0]}</p>}
		</label>
	);
}
