import { ProductDTO } from "../../shared/dtos/productDTO";
import AddCartButton from "./AddCartButton";

interface CardProductDetailProps {
	product: ProductDTO;
}

function CardProductDetail({ product }: CardProductDetailProps) {
	return (
		<>
			<div className={`w-full md:flex flex-col md:flex-row bg-transparent border-0 md:gap-0 min-[320px]:p-[3%]`}>
				<div className="w-[100%] md:w-[50%] h-auto bg-transparent hover:cursor-pointer mr-[16px]">
					<img className="rounded-[20px] w-full h-auto" src={product.image} alt={product.title} />
				</div>
				<div className=" w-[100%] md:w-[50%] flex flex-col p-[36px] bg-white gap-0 rounded-[20px]">
					<div className="auto text-[32px] font-Roboto_Bold text-bgmenu ">{product.title}</div>
					<div className="text-[32px] text-black font-bold font-Roboto-bold">{product.price} USD</div>
					<div
						className="mt-[10px] h-[80%] max-h-[80%] overflow-none text-[16px] font-Roboto text-[#525252]"
						dangerouslySetInnerHTML={{ __html: product.description }}
					/>
					<div className="text-[12px] text-[#525252] font-Roboto">Lo encuentras en :</div>
					<div className="text-[14px] bg-[#FFEBE1] w-[150px] text-center rounded text-[#88604B] font-Roboto mb-[16px] mt-[5px]">
						{product.category}
					</div>
					<AddCartButton id={product.id} />
				</div>
			</div>
		</>
	);
}

export default CardProductDetail;
