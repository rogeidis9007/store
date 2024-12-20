import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Galery from "../OtherGallery/Gallery";

const OfertsSection = () => {
	const oferts = useSelector((state: RootState) => state.products.oferts);

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[2rem] z-10 ">
				<div className="flex space-x-4 justify-items-center items-center pb-[1rem]">
				<div className="md:text-[64px] sm:text-[48px] min-[320px]:text-[24px] min-sm font-Sail_Regular pb-[3rem] text-bgmenu">Nuestras Ofertas</div>
				</div>

				<div className="grid grid-cols-1 items-center justify-center gap-[10px] pb-[1rem] mx-[10%] ">
					<Galery list={oferts} />
				</div>
				<div>
				<a href="/products" className="text-gray-400 hover:text-bgmenu text-[24px] transition hover:text-[#000]">
                Ver mas ...
              </a>
				</div>
			</div>
		</>
	);
};

export default OfertsSection;
