import { FormEvent, useEffect, useState } from "react";
import TextField from "../form/TextField";
import TextTarea from "../form/TextTarea";
import { notification } from "antd";
import { ClipLoader } from "react-spinners";
import { validateEmail } from "../../utils/helpers/utilFormValidate";
import { contactUsApi } from "../../services/contactUsApi";

function ContactSection() {
	const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
		ev.preventDefault();
		if (name != "" && email != "" && validateEmail(email) && message != "") {
			setLoading(true);
			const response:any = await contactUsApi({ name, email, message });
			
			setLoading(false);
			setName("");
			setMessage("");
			response.success === true &&
				notification.success({
					message: `Mensaje enviado`,
					description: "Espere la respuesta a su correo",
					placement: "bottom",
				});
		}
	};
	const [loading, setLoading] = useState<boolean>(false);
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [isValid,setIsvalid] = useState<boolean>(false);

	useEffect(()=>{
		if(name != "" && email != "" && message != ""){
			setIsvalid(true)
		} else {
			setIsvalid(false);
		}
	},[name,email,message])

	

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] z-10">
				<div className="flex space-x-4 justify-items-center items-center pb-[2rem]">
					<p className="font-Sail_Regular md:text-[64px] flex text-[#1F0B01] min-[320px]:text-[24px] text-bgmenu">Contáctanos</p>
				</div>
				<div className="w-[35%] min-w-[320px]">
					<form onSubmit={onSubmit} className="w-[100%] flex flex-col gap-[3rem] pb-[2rem] items-center">
						<TextField
							required
							name="name"
							placeholder="Nombre/Alias"
							label="Nombre/Alias"
							type="text"
							value={name}
							onChange={(value) => setName(value)}
						/>
						<TextField
							required
							name="email"
							placeholder="Correo eléctronico"
							label="Correo eléctronico"
							type="email"
							value={email}
							onChange={(value) => setEmail(value)}
						/>
						<TextTarea
							required
							name="message"
							placeholder="Mensaje"
							label="Mensaje"
							value={message}
							onChange={(value) => setMessage(value)}
							cols={50}
							rows={50}
						/>

						{!loading ? (
							<button
								disabled={loading || !isValid}
								type="submit"
								className={`
								  ${!isValid && "bg-opacity-20 pointer-events-none"} w-[25%] min-w-[174px] bg-opacity-80 rounded-[5px] flex justify-center items-center bg-bgmenu h-[3rem] p-2 px-5 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-bgmenu transition-colors duration-300`}
							>
								{" "}
								{<p className="text-white text-[16px] font-bold font-Roboto">Enviar</p>}
							</button>
						) : (
							<button
								disabled={true}
								type="submit"
								className={` w-[25%] rounded-[5px] flex justify-center items-center bg-bgmenu h-[3rem] p-2 px-5 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300`}
							>
								<p className="pr-3 text-white bg-bgmenu">Enviando</p> <ClipLoader color={"#ffffff"} loading={true} size={30} />
							</button>
						)}
					</form>
				</div>
			</div>
		</>
	);
}

export default ContactSection;
