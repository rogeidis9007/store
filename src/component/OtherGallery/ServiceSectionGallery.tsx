import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay,Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

import "./service-section-gallery.css";
import PrincipalGalleryItem from "./PrincipalGalleryItem";
import { FC } from "react";
interface ServiceSectionGalleryProps {
	list:string[];
}
const ServiceSectionGallery:FC<ServiceSectionGalleryProps> = ({list}) => {
	return (
		<div className="w-full px-1 flex justify-center items-center">
			<Swiper modules={[Navigation, EffectCoverflow, Autoplay,Pagination]} slidesPerView={1} navigation autoplay pagination={{ clickable: true }} effect="coverflow">
				{" "}
				{list.map((_, index: number) => (
					<SwiperSlide>
						<PrincipalGalleryItem image={list[index]} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default ServiceSectionGallery;
