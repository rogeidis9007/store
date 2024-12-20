import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../app/store";
import ContainerLayout from "../../component/layout/containerLayout";
import { CategoryDTO, ProductDTO } from "../../shared/dtos/productDTO";
import CardProduct from "../../component/cards/CardProduct";
import Loader from "../../component/modal/Loader";
import { loadProductosData } from "../../features/products/productsSlice";
import { loadCartsData } from "../../features/cart/cartsSlice";

function Products() {
	const products = useSelector((state: RootState) => state.products.data);
	const categorys = useSelector((state: RootState) => state.products.category);
	const [data, setData] = useState<ProductDTO[]>([]);
	const [categoryId, setCategoryId] = useState<number>(0);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const dispatch = useDispatch<AppDispatch>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		const loadData = async () => {
			await dispatch(loadProductosData());
			await dispatch(loadCartsData());
			setLoading(false);
		};
		loadData();
	}, [dispatch]);
	useEffect(() => {
		categoryId != 0 ? setData(products.filter((d:ProductDTO) => d.categoryId == categoryId)) : setData(products);
	}, [categoryId, products]);

	
	const handleCategorySelect = (id: number): void => {
		categoryId != id ? setCategoryId(id) : setCategoryId(0);
	};

	return (
		<>
		{loading && <Loader />}
			{!loading && <ContainerLayout banner={false} key={"page-home"}>
				<div className=" bg-top bg-no-repeat flex flex-col items-center justify-center bg-[grey] pt-[2rem] md:mt-[80px]  min-[320px]:mt-[10px] z-10 bg-[url('/images/fondo_menu.png')]">
					<div className="flex space-x-4 p-5  pb-[2rem] md:mt-20  min-[320px]:mt-10">
						{categorys.length > 0 &&
							categorys.map((data: CategoryDTO) => (
								<div
									key={`filter-products-${data.id}`}
									onClick={() => handleCategorySelect(data.id)}
									className={`${
										categoryId == data.id ? "bg-bgmenu" : "bg-[#ffebe1]"
									} rounded-[5px] flex justify-center w-full text-center items-center p-2 md:px-8  min-[320px]:px-2 tracking-[5%] leading-[16px] text-[14px]  font-normal font-Roboto hover:cursor-pointer hover:bg-[#e0c5b8] transition-colors duration-300`}
								>
									{data.name}
								</div>
							))}
					</div>
					<div className="text-[54px] md:text-[64px]  font-Sail_Regular pb-[3rem] text-bgmenu mt-5 flex  min-[320px]:text-[32px]">
						<p className="text-center p-3 md">Productos</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:px-[10%]  min-[320px]:px-[5%] pt-5 pb-10  gap-9 md:mx-[10%]  min-[320px]:mx-[2%]">
						{data.length > 0 &&
							data.map((data: ProductDTO) => (
								<CardProduct
									key={`product-${data.id}`}
									image={data.image}
									title={data.title}
									description={data.description}
									id={data.id}
									price={data.price}
								/>
							))}
					</div>
				</div>
			</ContainerLayout>}
		</>
	);
}

export default Products;
