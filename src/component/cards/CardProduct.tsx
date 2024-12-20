import { useNavigate } from "react-router-dom";
import "./menu.css"; // Importa tu archivo CSS
import AddCartButton from "./AddCartButton";
interface CardProductProps {
	image: string;
	title: string;
	description: string;
	price: number | string;
	id: number;
}

function CardProduct({ image, title, description, price, id }: CardProductProps) {
	const navigate = useNavigate();
	const handleCardClick = () => {
		navigate(`/products/details/${id}`);
	};

	return (
		<div
			className="h-auto flex flex-col rounded-[20px] bg-transparent border z-10 hover:shadow-3xl transition-shadow duration-300 border-bordermenu cursor-pointer"
			onClick={handleCardClick}
		>
			<div className="w-[100%] h-[300px] bg-transparent hover:cursor-pointer">
				<img className="w-[100%] h-full rounded-t-[20px]" src={image || "/images/dish/default.png"} alt={title} />
			</div>
			<div className="flex flex-col p-[20px] bg-white gap-1 font-Roboto rounded-b-[20px]">
				<div className="text-[14px] font-Roboto_Bold text-bgmenu h-[8rem] max-h-[9rem] overflow-auto scrollbar-thin flex items-center">{title}</div>
				{
					<div
						className="text-[#525252] h-[6.2rem] max-h-[8rem] overflow-auto scrollbar-thin pr-1 text-[14px] !  custom-scrollbar"
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				}
				<div className="text-[16px] text-bgmenu font-bold font-Roboto_Bold">{price} USD</div>

				<AddCartButton id={id} />
			</div>
		</div>
	);
}

export default CardProduct;
