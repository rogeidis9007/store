interface TableProps {
	setPax: (x: number) => void;
	pax: number;
	title?:string;
}
function CardNumberReservation(props: TableProps) {
	return (
		<>
			<div className="flex flex-col w-full">
				<div className="flex flex-col !items-center w-full">
					<p className="font-Roboto_Bold text-[#1F0B01]">{props.title}</p>
					<div className="flex !justify-center !items-center w-full">
						<div
							className={`${props.pax == 1 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.pax > 1) {
									props.setPax(props.pax - 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] !h-[20px] hover:cursor-pointer" />
						</div>
						<p className="text-center font-bold text-[20px] px-[20px]">{props.pax}</p>
						<div className="text-center font-bold text-[25px] hover:cursor-pointer" onClick={() => props.setPax(props.pax + 1)}>
							<img src="/images/reserve/row.png" className="rotate-180 w-[20px] !h-[20px] hover:cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardNumberReservation;
