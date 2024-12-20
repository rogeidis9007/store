import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import { useParams } from "react-router-dom";
import Loader from "../../component/modal/Loader";
import CardProductDetail from "../../component/cards/CardProductDetail";
import { ProductDTO } from "../../shared/dtos/productDTO";
const ProductDetailPage = () => {
	const { id } = useParams();
	let products = useSelector((state: RootState) => state.products.data);
	const loading = useSelector((state: RootState) => state.products.loading);
	const [product, setProduct] = useState<ProductDTO | undefined>(undefined);


	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	useEffect(() => {
		products.length > 0 && id && setProduct(products.find((s) => s.id == parseInt(id)));
	}, [id, products]);

	return (
		<>
		{loading && <Loader />}
			{!loading && <ContainerLayout banner={false} key={`page-product-details-${id}`}>
				<div className="flex flex-col items-center justify-center bg-[#F1F1F1] pt-10 mt-20 z-10 p-0 p-10 min-[320px]:p-1 min-[320px]:pt-4">
					<div className="md:w-[85%] min-[320px]:w-[100%] bg-transparent">{product && <CardProductDetail product={product} />}</div>
				</div>
			</ContainerLayout>}
		</>
	);
};
export default ProductDetailPage;
