import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";
import PrincipalGalleryItem from "./PrincipalGalleryItem";

function PrincipalGallery() {
	const imagesprueba = [
		"/images/banner/carbon.png",
		"/images/banner/carbon.png",
		"/images/banner/carbon.png",
		"/images/banner/carbon.png",
		"/images/banner/carbon.png",
		"/images/banner/carbon.png",
		"/images/banner/dulceria.png",
		"/images/banner/dulceria.png",
	];
	return (
		<div className="w-full pb-[80px] px-1 flex justify-center items-center">
			<Swiper modules={[Navigation, EffectCoverflow, Autoplay]} slidesPerView={3} autoplay navigation effect="coverflow">
				{" "}
				{imagesprueba.map((_, index: number) => (
					<SwiperSlide>
						<PrincipalGalleryItem image={imagesprueba[index]} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default PrincipalGallery;
