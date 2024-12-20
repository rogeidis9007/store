interface CardOrderProps {
	price: number;
	category: string;
	pax: number;
	note?: string;
	image: string;
	title: string;
}

function OrderDetailCard(props: CardOrderProps) {
	return (
		<div className={` flex w-[100%] gap-2 p-[2rem] min-[320px]:p-[1rem] bg-white  h-auto  border-b-1 border-black`}>
			<div className="md:flex h-auto bg-transparent  justify-start items-start  w-[20%] min-[320px]:w-[100%]">
				<img className="w-[100%] h-full rounded-[8px]" src={`${props.image}`} />
			</div>
			<div className="flex flex-col pl-[2rem] bg-white gap-1 font-Roboto ] w-[65%] md:w-[70%] min-[320px]:w-[90%]">
				<div className="text-[16px] font-bold font-Roboto_Bold text-start text-[#1F0B01]">{props.title}</div>
				<div className="font-Roboto text-[14px] text-[#525252]">
					Categoría: <span className="text-[#1F0B01]">{props.category}</span>
				</div>
				<div className="font-Roboto text-[14px] text-[#525252] w-full">
					Cantidad: <span className="text-[#1F0B01]">{props.pax}</span>
				</div>
				{props.note && (
					<div className="flex flex-col text-[#525252] text-[14px] font-Roboto">
						<p>NOTA</p>
						<div className=" text-[14px] font-Roboto text-[#525252]" dangerouslySetInnerHTML={{ __html: props.note }} />
					</div>
				)}
				<div className="font-Roboto_Bold text-[#D16733] text-[16px] ">
				{" "}
				<p>{props.price} USD</p>
			</div>
			</div>
			
		</div>
	);
}

export default OrderDetailCard;
