import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import { setOpenAddCart } from "../../features/cart/cartsSlice";

interface AddCartButtonProps {
	id: number;
}

function AddCartButton({ id }: AddCartButtonProps) {
	const dispatch = useDispatch();
	
	const [loader, setLoader] = useState(false);
	const [hover,setHover] = useState<boolean>(false)
	const openReserve = () => {
		setLoader(true)
		dispatch(setOpenAddCart(id));
		setLoader(false)
	}
	return (
					<div
					onClick={(event) => {
						event.stopPropagation();
						openReserve();
					}}
					onMouseEnter={()=>setHover(true)}
					onMouseLeave={()=>setHover(false)}
					className="text-[15px] rounded-[10px] border-[1px] border-bgmenu text-bgmenu bg-white p-3 w-[174px] font-bold flex items-center justify-center gap-1 hover:bg-bgmenu hover:text-white transition-colors duration-300 cursor-pointer"
				>
					<div className="flex justify-center items-center">
						{!loader ? (
							<div className="flex justify-center items-center">
								<img className="h-[20px] w-[20px] text-bgmenu mr-[10px]" src={hover? "/images/menu/cart-w.svg" : "/images/menu/cart.svg"} alt="Add to cart" />
								<p>Añadir al carrito</p>
							</div>
						) : (
							<div className="flex w-full justify-center items-center">
								<p className="pr-3">Añadiendo al carrito</p> <ClipLoader color={"#ffffff"} loading={true} size={30} />
							</div>
						)}
					</div>
				</div>
	);
}

export default AddCartButton;
