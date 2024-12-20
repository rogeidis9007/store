interface TableProps {
	setpax: (x:number)=>void;
	pax: number;
}
function AddNumber(props: TableProps) {
	return (
		<>
			<div className="flex flex-col w-full">
				<div className="flex flex-col !justify-start !items-start w-full">
					<p className="font-Roboto pb-2 text-[#1F0B01]">Cantidad</p>
					<div className="flex !justify-center !items-center shadow-3xl p-4 rounded-[12px] w-full px-[5rem]">
						<div
							className={`${props.pax == 1 ? "opacity-[50%]" : "hover:cursor-pointer"}`}
							onClick={() => {
								if (props.pax > 1) {
									props.setpax(props.pax - 1);
								}
							}}
						>
							<img src="/images/reserve/row.png" className="w-[20px] !h-[20px] hover:cursor-pointer" />
						</div>
						<p className="text-center font-bold text-[20px] px-[20px]">{props.pax}</p>
						<div className="text-center font-bold text-[25px] hover:cursor-pointer" onClick={() => props.setpax(props.pax + 1)}>
							<img src="/images/reserve/row.png" className="rotate-180 w-[20px] !h-[20px] hover:cursor-pointer" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddNumber;
