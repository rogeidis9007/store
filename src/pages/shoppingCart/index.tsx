import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import { Skeleton } from "@nextui-org/react";
import PreReservationCard from "../../component/cards/PreReservationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { ProductDTO } from "../../shared/dtos/productDTO";
import { loadProductosData } from "../../features/products/productsSlice";
import { loadCartsData } from "../../features/cart/cartsSlice";
import Loader from "../../component/modal/Loader";

const ShoppingCartPage = () => {

	const dispatch = useDispatch<AppDispatch>();
	const produts = useSelector((state: RootState) => state.products.data);
	const navigate = useNavigate();
	const [totalProducts, setTotalProdutcs] = useState<number>(0);
	const [totalPrice, setTotalPrice] = useState<number>(100);
	const prereservation = useSelector((state: RootState) => state.cart.data.products);

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

		useEffect(()=>{
			prereservation && setTotalProdutcs(
				prereservation.reduce((sum, p) => {
					return sum + p.quantity;
				}, 0))
				prereservation && produts && setTotalPrice(prereservation.reduce((sum, pre) => {
					return sum + pre.quantity*(produts.find(p=>p.id==pre.productId)?.price||0);
				}, 0))
		},[prereservation,produts])
	
	const handlePayment = () => {
		prereservation && prereservation?.length > 0 && navigate("/order");
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
		{loading && <Loader />}
			{!loading && <ContainerLayout banner={false} key={`page-shopping-cart`}>
				<div className="items-center justify-center w-full bg-[#F1F1F1] pt-10 mt-20 z-10 px-[5%] md:px-[10%]">
					<div className="w-[100%] bg-transparent">
						<div className="flex">
							<div className=" w-full">
								<div className="flex">
									<div className="flex-1 flex w-[30%]">
										<p className="font-Sail_Regular text-[64px] flex text-[#1F0B01] min-[320px]:text-[24px] text-bgmenu">Carrito</p>
									</div>
									<div className="flex flex-col md:flex-row w-[70%] text-[16px] font-bold font-Roboto_Bold text-end text-[#1F0B01] justify-center md:justify-between items-end md:items-center">
										<span className="font-Roboto text-[16px] text-[#888888]">
											{`${totalProducts} productos`}
										</span>
										<Link to={"/products"}>
											<span className="flex justify-center items-center gap-1 text-bgmenu">
												Seguir comprando
												<FontAwesomeIcon icon={faArrowRight} className="size-[20px] pl-1 mr-2" />
											</span>
										</Link>
									</div>
								</div>
								{loading ? (
									<div className="w-full auto space-y-5 p-4 pb-10">
										<div className="space-y-3">
											<Skeleton className="w-3/5 rounded-lg">
												<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
											</Skeleton>
											<Skeleton className="w-4/5 rounded-lg">
												<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
											</Skeleton>
											<Skeleton className="w-2/5 rounded-lg">
												<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
											</Skeleton>
										</div>
										<div className="space-y-3">
											<Skeleton className="w-3/5 rounded-lg">
												<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
											</Skeleton>
											<Skeleton className="w-4/5 rounded-lg">
												<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
											</Skeleton>
											<Skeleton className="w-2/5 rounded-lg">
												<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
											</Skeleton>
										</div>
									</div>
								) : (
									prereservation?.map((pre, i: number) => {
										const prod = produts.find((p:ProductDTO)=>p.id == pre.productId)
										return (
											<PreReservationCard
												key={`shopping-cart-${i}`}
												category={prod?.category || "Categoria"}
												id={prod?.id || 1}
												image={prod?.image||""}
												pax={parseInt(pre.quantity.toString())}
												title={prod?.title||""}
												price={prod?.price||0.00}
												type={prod?.category||""}
												setLoader={setLoading}
											/>
										);
									})
								)}
								{loading ? (
									<div className=" w-full flex flex-col  auto space-y-5 p-4 pb-10">
										<Skeleton className="rounded-lg h-[50%]">
											<div className="h-24 rounded-lg bg-default-300"></div>
										</Skeleton>
									</div>
								) : (
									<div className={` flex w-[100%] p-[2rem] bg-white rounded-[8px] m-2`}>
										<div className="flex pl-[2rem] bg-white  font-Roboto ] w-[40%]">
											<div className="text-[20px] flex justify-center items-center font-bold font-Roboto_Bold text-start text-bgmenu">TOTAL</div>
										</div>
										<div className=" w-[40%] flex  text-bgmenu text-[20px] font-bold font-Roboto_Bold mt-2 mr-2 justify-end">{totalPrice.toFixed(2)} USD</div>
										{prereservation && prereservation?.length > 0 && (
											<div className=" w-[20%] flex flex-col">
												<div
													onClick={handlePayment}
													className=" w-[100%] rounded-[5px] flex justify-center items-center bg-bgmenu bg-opacity-80 h-[3rem] p-2 px-8 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-bgmenu transition-colors duration-300"
												>
													<p className="text-white text-[20px] font-bold font-Roboto_Bold">Pagar</p>
												</div>
											</div>
										)}
									</div>
								)}
								<div className="font-Roboto text-[14px] text-[#888888] m-2">
									Los precios de nuestros productos están sujetos a cambio. Si dejas tu compra en el carrito se mostrará el precio más reciente de
									cada producto. Los códigos de descuento no son acumulables ni aplicables junto a otras promociones especiales salvo que se indique
									lo contrario. En promociones del tipo 2x1 se descontará el curso de menor precio.
								</div>
								<div className="font-Roboto text-[16px] text-[#888888] m-2">
									<FontAwesomeIcon icon={faCircleInfo} className="size-[20px] pl-1 mr-2" /> Si tienes alguna duda puedes visitar a:{" "}
									<Link to={"/shopping-cart"} className="underline">
										Términos y condiciones Políticas de privacidad ó Contáctanos
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ContainerLayout>}
		</>
	);
};
export default ShoppingCartPage;
