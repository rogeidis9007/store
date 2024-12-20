import { useNavigate } from "react-router-dom";
import AddCartButton from "../cards/AddCartButton";

interface GaleryProps {
	image: string;
	title: string;
	description: string;
	price: number | string;
	id: number;
}

export const GalleryItem = ({ image, title, description, price, id }: GaleryProps) => {
	const navigate = useNavigate();
	console.log("Data de la oferta :",title);
	
	const handleCardClick = () => {
		navigate(`/products/details/${id}`);
	};
	return (
		<div
			className={`h-auto flex flex-col mb-9 rounded-[20px] bg-transparent border  z-10 hover:hover:shadow-3xl transition-shadow duration-300  cursor-pointer`}
			onClick={handleCardClick}
		>
			<div className="w-[100%] h-auto bg-transparent hover:cursor-pointer">
				<img className="w-[100%] h-[400px] rounded-t-[20px] bold" src={image || ""} alt={title} />{" "}
			</div>
			<div className="flex flex-col p-[36px] bg-white gap-1 font-Roboto rounded-b-[20px]">
				<div className="text-[18px] font-Roboto_Bold h-[2rem] max-h-[5rem] overflow-hidden text-bgmenu">{title}</div>
				<div className="h-[8rem] max-h-[8rem] overflow-auto scrollbar-thin text-[14px] pr-2 text-[#525252]">{description}</div>
				<div className="text-[20px] text-bgmenu font-bold font-Roboto_Bold">{price} USD</div>
				<AddCartButton id={id}/>
			</div>
		</div>
	);
};
