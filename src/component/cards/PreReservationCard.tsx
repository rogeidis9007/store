import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CardNumberReservation from "../reservation/CardNumberReservation";
import { Popconfirm } from "antd";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { deleteCart, updatePaxCart } from "../../features/cart/cartsSlice";

interface CardMenuProps {
	id: number;
	image: string;
	title: string;
	category: string;
	pax: number;
	price: number;
	type: string;
	setLoader: (value: boolean) => void;
}

function PreReservationCard({ id,image, title, category, pax, price, type }: CardMenuProps) {
	const [loading, setLoading] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();
	
	const handleDelete = async () => {
		setLoading(true);
		dispatch(deleteCart(id));
		setLoading(false);
	};

	
	const handleEditPax = async (pax: number) => {
		setLoading(true);
		dispatch(updatePaxCart({id,pax}))
		setLoading(false);
	};

	return (
		<div className={`relative flex w-[100%] gap-2 p-[2rem] bg-white rounded-[8px] m-2   ${loading && "bg-bgmenu pointer-events-none"} relative`}>
			{loading && (
				<div className="absolute w-[100%] left-[40%] top-[40%] text-black flex gap-3">
					<p>Cargando</p>
					<ClipLoader loading={true} size={30} />
				</div>
			)}
			<div className="absolute top-[15px] right-[15px] md:hidden">
				<img className="w-[50px] h-[50px] rounded-full" src={`${image}`} />
			</div>

			<div className="md:flex hidden h-auto bg-transparent  justify-start items-start  w-[10%]">
				<img className="w-[100%] h-full rounded-[8px]" src={`${image}`} />
			</div>
			<div className="flex flex-col pl-0 md:pl-[2rem]  gap-3 font-Roboto ] w-[50%] md:w-[30%]">
				<div className="text-[16px] font-bold font-Roboto_Bold text-start text-bgmenu">{title}</div>
				<div className="font-Roboto text-[14px] text-[#888888]">
					Categoría: <span className="text-[#1F0B01]">{category}</span>
				</div>
			</div>
			<div className="flex w-[50%] md:w-[50%] flex-col md:flex-row justify-start md:justify-end items-end md:items-center gap-2">
				{type != "por_mesa" && (
					<div className=" w-[100px] flex flex-col">
						<p className="font-Roboto_Bold text-[#1F0B01]">Precio</p>
						<p className="font-Roboto_Bold text-[16px]  text-bgmenu">{price} USD</p>
					</div>
				)}
				<div className=" w-[150px] flex flex-col">
					<CardNumberReservation setPax={handleEditPax} pax={pax} title={"Cantidad"} />
				</div>
				<div className=" w-[100px] flex flex-col">
					<p className="font-Roboto_Bold text-[#1F0B01]">Subtotal</p>
					<p className="font-Roboto_Bold text-[16px]  text-bgmenu">{(price*pax).toFixed(2)} USD</p>
				</div>
			</div>
			<div className=" w-[10%] flex items-center">
				<Popconfirm
					title="Eliminar producto"
					description="Está seguro que desea eliminar el producto?"
					onConfirm={handleDelete}
					okText="Si"
					cancelText="No"
				>
					<div className="flex gap-1 hover:cursor-pointer items-center p-1">
						<FontAwesomeIcon icon={faTrash} className="size-[20px] pl-1" />
					</div>
				</Popconfirm>
			</div>
		</div>
	);
}

export default PreReservationCard;
