import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import Modal from "../modal/Modal";
import TextTarea from "../form/TextTarea";
import "./reservation.css";
import { notification } from "antd";
import AddNumber from "./AddNumber";
import { ClipLoader } from "react-spinners";
import { setAddCart } from "../../features/cart/cartsSlice";

interface AddCartFormProps {
	setModalOpen: (value: number) => void;
	modalopen: number;
	style: any;
}
function AddCart(props: AddCartFormProps) {
	const dispatch = useDispatch<AppDispatch>();
	const [pax, setPax] = useState<number>(1);
	const [description, setDescription] = useState<string>();
	const [loadingCart, setLoadingCart] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(false);

	const handleAdd = async () => {
		try {
			const data = {				
				productId: props.modalopen,
				quantity: pax,
				descripcion: description || "",
			};
			setLoadingCart(true);
			await dispatch(setAddCart(data));
			notification.success({
				message: `Adicionado`,
				description: "Se ha adicionado el producto con exito",
				placement: "bottom",
			});
			props.setModalOpen(0);
		} catch (error) {
			notification.error({
				message: `Error al adicionar`,
				description: "No se ha podido adicionar el producto",
				placement: "bottom",
			});
		} finally {
			setLoadingCart(false);
		}
	};

	useEffect(()=>{
		pax > 0 ? setIsValid(true) : false;
	},[pax])

	return (
		<>
			{}
			<Modal style={props.style} onCloseModal={() => props.setModalOpen(0)}>
				<div className={`flex flex-col  w-full items-center justify-center bg-white  pb-[1rem] gap-5`}>
				<p className="font-Sail_Regular text-[3rem]  text-center text-bgmenu  min-[320px]:text-[32px]">Fashion Store</p>
					{<p className="font-Sail_Regular text-[3rem]  text-center text-[#1F0B01]  min-[320px]:text-[32px]">Adicionar al carrito</p>}
					<AddNumber pax={pax} setpax={setPax} />
					<div className="flex flex-col !justify-start !items-start w-full ">
						<p className="font-Roboto pb-2 text-[#1F0B01]">Descripcion</p>

						<TextTarea
							name="email"
							styleClass="!border-b-0 flex !justify-center !items-center shadow-3xl p-4 h-[130px] rounded-[12px] w-full  bg-white text-[#1F0B01]  !text-[18px] font-Roboto"
							value={description}
							onChange={(value) => setDescription(value)}
							cols={50}
							rows={50}
						/>
					</div>
				</div>
				<div className="flex gap-5 items-start justify-start w-full pt-3">
					{!loadingCart ? (
						<button
							onClick={handleAdd}
							disabled={!isValid}
							className={`h-[55px] w-[100%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center ${
								!isValid ? "bg-[#FFEBE1] pointer-events-none" : "bg-[#E38A5D] hover:bg-[#e4743c]"
							}`}
						>
							{/*<img src="/images/menu/solar_user-broken.png" className="w-[45px] h-[35px] hover:cursor-pointer" />*/}
							Adicionar
						</button>
					) : (
						<button
							onClick={handleAdd}
							disabled={!isValid}
							className={`h-[55px] w-[100%] hover:cursor-pointer text-[16px] border border-black text-white font-Roboto_Bold rounded-[8px] px-5 py-3 flex items-center justify-center text-center ${
								isValid ? "bg-[#E38A5D] hover:bg-[#e4743c]" : "bg-[#E38A5D] hover:bg-[#e4743c]"
							}`}
						>
							{" "}
							<p className="text-white text-[16px] font-bold font-Roboto pr-2">Adicionando</p>{" "}
							<ClipLoader color={"#ffffff"} loading={true} size={30} />
						</button>
					)}
				</div>
			</Modal>
		</>
	);
}

export default AddCart;
