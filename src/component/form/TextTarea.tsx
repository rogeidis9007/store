import { useState } from "react";
import "./texttarea.css";
interface TextInputProps {
	placeholder?: string;
	value?: string;
	name?: string;
	onChange: (value: string) => void;
	label?: string;
	styleClass?: string;
	disabled?: boolean;
	required?: boolean;
	cols?: number;
	rows?: number;
	errors?: any;
}

export default function Textarea(props: TextInputProps) {
	const [validationErrors, _] = useState([]);
	const [visiblelabel, setVisibleLabel] = useState(false);

	const onChange = (value: string) => {
		props.onChange(value);
	};

	return (
		<label className=" text-accent-color flex flex-col gap-1 w-full">
			<div className={`${!visiblelabel ? "hidden" : ""} animate-fade-up animate-ease-linear`}>{props.label}</div>
			{props.required && <span className="text-[#ff0000]">*</span>}
			<textarea
				//required={props.required}
				disabled={props.disabled}
				className={`h-[200px] placeholder-bold ${props.styleClass}  border-[1px] ${
					validationErrors.length > 0
						? "border-red-600"
						: `${
								!visiblelabel
									? "border-[#1F0B01] border-b-1 border-x-0 border-t-0 pl-1 h-[3rem]"
									: "border-[#E38A5D] border-b-1 border-x-0 border-t-0 pl-1 h-[3rem]"
						  } `
				}  text-[#1F0B01] font-normal outline-none`}
				name={props.name}
				cols={props.cols}
				rows={props.rows}
				placeholder={!visiblelabel ? props.placeholder : ""}
				value={props.value}
				onChange={(e) => onChange(e.target.value)}
				onClick={() => !visiblelabel && setVisibleLabel(true)}
			/>
			{validationErrors.length > 0 && <p className="text-xs text-red-600 font-normal">{validationErrors[0]}</p>}
		</label>
	);
}
