import { ClipLoader } from "react-spinners";
import TextField from "../form/TextField";
import { useEffect, useState } from "react";
import { notification } from "antd";
import { validateName, validatePhone } from "../../utils/helpers/utilFormValidate";
interface OrderFormProps {
	price: number;
	handlePayment: (payment:any)=>void;
	loading:boolean;

}


function OrderFormCard({ price,handlePayment,loading }: OrderFormProps) {
	
	const [name, setName] = useState<string>("");
	const [namecomplete, setNameComplete] = useState<string>("");
	const [ci, setCI] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [cardNumber, setCardNumber] = useState<string>("");
	const [isValid,setIsValid] = useState<boolean>(false)
	useEffect(()=>{
		name != "" && namecomplete != "" && ci!="" && phone!="" && cardNumber!="" ? setIsValid(true) : setIsValid(false)
	},[name,namecomplete,ci,phone,cardNumber])

	const handleReservation = (e:any) => {
		e.preventDefault(); // Evita que el formulario se envíe automáticamente
	  
		// Validación de campos
		const errors:any = {};
	  
		if (!name.trim() || !validateName(name)) {
		  errors.name = "El nombre/alias es obligatorio.";
		}
	  
		if (!namecomplete.trim()) {
		  errors.namecomplete = "El nombre completo es obligatorio.";
		}
	  
		if (!ci.trim() || !/^\d{7,10}$/.test(ci)) {
		  errors.ci = "El pasaporte o CI debe contener entre 7 y 10 dígitos.";
		}
	  
		if (!phone.trim() || !validatePhone(phone)) {
		  errors.phone = "El teléfono móvil no es valido.";
		}
	  
		if (!cardNumber.trim() || !/^\d{16}$/.test(cardNumber)) {
		  errors.cardNumber = "El número de tarjeta debe contener exactamente 16 dígitos.";
		}
	  
		// Si hay errores, no enviar el formulario
		if (Object.keys(errors).length > 0) {
			Object.keys(errors).map((key:string)=>{
				console.log("Error :",errors[key]);
				
				return notification.error({
					message: `Error con los datos`,
					description: errors[key],
					placement: "bottom",
				});
			})
		  return;
		}
	  
		// Llamar a la función de pago si no hay errores
		handlePaymentClick();
	  };

	const handlePaymentClick = () => {	
		const paymentAux:any = {
			alias:name,
			nombreCompleto:namecomplete,
			dni:ci,
			celular:phone,
			card:cardNumber
		}
		handlePayment(paymentAux);
	};


	return (
		<div className={` flex flex-col gap-1 w-[100%] p-[4rem] min-[320px]:p-[1rem] bg-white rounded-[8px] m-2`}>
			<form onSubmit={handleReservation} className="w-[100%] flex flex-col gap-8 min-[320px]:gap-4 pb-[2rem] items-start">
				<div className="flex flex-col gap-1 h-[70px] bg-transparent  justify-start items-start  w-full">
					<p className="text-[#BABABA] text-[14px] font-Roboto">RESERVA A NOMBRE DE</p>
					<TextField name="name" placeholder="Nombre/Alias" label="Nombre/Alias" type="text" value={name} onChange={(value) => setName(value)} />
				</div>

				<div className="flex flex-col gap-2  bg-transparent  justify-start items-start pt-2  w-full">
					<p className="text-[#BABABA] text-[14px] font-Roboto">DATOS PERSONALES</p>
					<TextField
						name="Nombre y apellidos"
						placeholder="Nombre y apellidos"
						label="Nombre y apellidos"
						type="text"
						value={namecomplete}
						onChange={(value) => setNameComplete(value)}
					/>

					<TextField name="name" placeholder="Pasaporte o CI" label="Pasaporte o CI" type="text" value={ci} onChange={(value) => setCI(value)} />

					<TextField
						name="Teléfono móvil"
						placeholder="Teléfono móvil"
						label="Teléfono móvil"
						type="text"
						value={phone}
						onChange={(value) => setPhone(value)}
					/>
				</div>

				
				<div className="flex flex-col gap-2  bg-transparent  justify-start items-start pt-2  w-full">
					<p className="text-[#BABABA] text-[14px] font-Roboto">TARJETA</p>
					<TextField
						name="Número de tarjeta"
						placeholder="Número de tarjeta"
						label="Número de tarjeta"
						type="text"
						value={cardNumber}
						onChange={(value) => setCardNumber(value)}
					/>
				</div>
				<div className="flex flex-col pt-5 w-full">
					<span className="flex gap-4">
						<p className="font-Roboto text-[#BABABA] text-[16px]">Cobraremos a su tarjeta</p>
						<p className="font-Roboto_Bold text-[#D16733] text-[16px]">{price}</p>
					</span>
					{!loading ? (
						<div className=" w-[90%] flex flex-col pt-3 justify-center items-center">
							<button
								disabled={loading || !isValid}
								onClick={handleReservation}
								className={`
								  ${!isValid && "bg-opacity-20 pointer-events-none"} w-[50%] min-w-[174px] bg-opacity-80 rounded-[5px] flex justify-center items-center bg-bgmenu h-[3rem] p-2 px-5 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-bgmenu transition-colors duration-300`}
							>
								{" "}
								{<p className="text-white text-[16px] font-bold font-Roboto">Pagar</p>}
							</button>
							</div>
						) : (
							<div className=" w-[90%] flex flex-col pt-3 justify-center items-center">
							<button
								disabled={true}
								type="submit"
								className={` w-[50%] rounded-[5px] flex justify-center items-center bg-bgmenu h-[3rem] p-2 px-5 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300`}
							>
								<p className="pr-3 text-white bg-bgmenu">Pagando</p> <ClipLoader color={"#ffffff"} loading={true} size={30} />
							</button>
							</div>
						)}
				</div>
			</form>
		</div>
	);
}

export default OrderFormCard;
