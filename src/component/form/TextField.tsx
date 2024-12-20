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
	styleClassLabel?: string;
	styleGral?: string;
	disabled?: boolean;
	required?: boolean;
	visibleoption?: boolean;
}

export default function TextField(props: TextInputProps) {
	const [validationErrors, _] = useState([]);
	const [visiblelabel, setVisibleLabel] = useState(false);
	const [visibleRequire, setVisibleRequire] = useState(true);
	const [visiblePass, setVisiblePass] = useState(false);

	const onChange = (value: string) => {
		props.onChange(value);
	};

	return (
		
<label className={`text-accent-color flex flex-col gap-2 w-full relative`}>
			<div className={`${!visiblelabel ? "hidden" : ""} ${props.styleClassLabel} animate-fade-up animate-ease-linear text-[#1F0B01]`}>{props.label}</div>
			{props.required && visibleRequire && <span className="text-[#ff0000]">*</span>}
			<input
				//required={props.required}
				disabled={props.disabled}
				className={`flex w-full placeholder-bold h-[40px] ${"pr-8"} placeholder-m-[10px] ${props.styleClass}  border-[1px] text-[#1F0B01] ${
					validationErrors.length > 0
						? "border-red-600"
						: `${!visiblelabel ? "border-[#1F0B01]" : "border-[#E38A5D]"} border-b-1 border-x-0 border-t-0 pl-1 pb-4`
				}  text-[#1F0B01] font-normal outline-none`}
				name={props.name}
				type={props?.type == "password" ? !props.visibleoption ? props.type : visiblePass ? "text" : "password" : props.type}
				placeholder={!visiblelabel ? props.placeholder : ""}
				value={props.value}
				onChange={(e) => {
					onChange(e.target.value);
					if (e.target.value != "") setVisibleRequire(false);
					else setVisibleRequire(true);
				}}
				onClick={() => !visiblelabel && setVisibleLabel(true)}
			/>

			{validationErrors.length > 0 && <p className="text-xs text-red-600 font-normal">{validationErrors[0]}</p>}
			{props.visibleoption && visiblelabel && (
				<div className="absolute justify-center flex items-center top-[4.5rem] min-[320px]:top-[2.5rem] right-1">
					{visiblePass ? (
						<img
							src="/images/ic_visibility_on.svg"
							className="w-[20px] h-[20px] !text-[#1F0B01] border-[#1F0B01]"
							onClick={() => setVisiblePass(!visiblePass)}
						/>
					) : (
						<img
							src="/images/ic_visibility_off.svg"
							className="w-[20px] !text-[#1F0B01] h-[20px] border-[#1F0B01]"
							onClick={() => setVisiblePass(!visiblePass)}
						/>
					)}
				</div>
			)}
		</label>
	);
}

