import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./gallery.css";
import { GalleryItem } from "./GalleyItem";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../shared/dtos/productDTO";
interface GaleryProps {
	list: ProductDTO[];
}
function Gallery({ list }: GaleryProps) {
	console.log("List :", list);
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024); // Considerar móvil si la pantalla es menor a 1024px
		};

		handleResize(); // Verificar tamaño al montar el componente
		window.addEventListener("resize", handleResize); // Agregar evento de cambio de tamaño

		return () => window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar
	}, []);
	return (
		<div className="w-full pb-[10px] flex justify-center items-center">
			<Swiper
				modules={[Pagination]}
				slidesPerView={4}
				pagination={isMobile ? false : { clickable: true }}
				className="mySwiper"
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					// cuando la ventana es >= 1024px
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				}}
			>
				{list.length == 1 && (
					<>
						<SwiperSlide zoom={true}></SwiperSlide>
					</>
				)}
				{list.map((i: any) => (
					<SwiperSlide zoom={false}>
						<GalleryItem image={i.image} title={i.title} description={i.description} id={i.id} price={i.price} />
					</SwiperSlide>
				))}

				{list.length < 4 && (
					<>
						<SwiperSlide zoom={true}></SwiperSlide>
					</>
				)}
			</Swiper>
		</div>
	);
}

export default Gallery;
