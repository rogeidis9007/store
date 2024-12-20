import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import OrderFormCard from "../../component/cards/OrderFormCard";
import OrderDetailCard from "../../component/cards/OrderDetailCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
import Loader from "../../component/modal/Loader";
import { loadProductosData } from "../../features/products/productsSlice";
import { loadCartsData } from "../../features/cart/cartsSlice";
import { ProductDTO } from "../../shared/dtos/productDTO";
import { paymentApi } from "../../services/paymentApi";
import { notification } from "antd";

const OrderPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const prereservation = useSelector((state: RootState) => state.cart.data.products);
  const produts = useSelector((state: RootState) => state.products.data);
  const navigate = useNavigate();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [paymentLoading,setPaymentLoading] = useState<boolean>(false);
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
		prereservation && produts && setTotal(prereservation.reduce((sum, pre) => {
      return sum + pre.quantity*(produts.find(p=>p.id==pre.productId)?.price||0);
    }, 0))
	}, [prereservation]);

  const handlePayment = async (payment:any) => {
    setPaymentLoading(true);
    const response:any = await paymentApi(payment);

    response.success === true &&
				notification.success({
					message: `Pago realizado con exito`,
					description: "Felicidades por su compra!",
					placement: "bottom",
				})
        navigate("/");
        setPaymentLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <ContainerLayout banner={false} key={`page-shopping-cart`}>
        <div className="items-center justify-center w-full bg-[#F1F1F1] pt-10 mt-20 z-10 px-[10%] pb-5">
          <div className=" w-full">
            <div className="flex">
              <div className="flex-1 flex w-[30%]">
                <p className="font-Sail_Regular text-[64px] flex text-bgmenu min-[320px]:text-[32px]">
                  Gestiona tu pedido
                </p>
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
              <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                <div>
                  <OrderFormCard price={total} handlePayment={handlePayment} loading={paymentLoading}/>
                  <div className="flex pb-2 p-4 gap-2">
                    <img
                      src="/images/payment/visa.png"
                      className=" w-[40px] h-[30px] "
                    ></img>
                    <img
                      src="/images/payment/mastercard.png"
                      className=" w-[40px] h-[30px] "
                    ></img>
                    <img
                      src="/images/payment/fontisto_american-express.png"
                      className=" w-[40px] h-[30px] "
                    ></img>
                    <img
                      src="/images/payment/zelle.png"
                      className=" w-[40px] h-[30px] "
                    ></img>
                  </div>
                  <p className="text-[20px] font-Roboto_Bold">
                    ¿Qué estás comprando?
                  </p>
                  <div className="font-Roboto text-[14px] text-[#888888] m-2">
                    Los precios de nuestros productos están sujetos a cambio. Si
                    dejas tu compra en el carrito se mostrará el precio más
                    reciente de cada producto. Los códigos de descuento no son
                    acumulables ni aplicables junto a otras promociones
                    especiales salvo que se indique lo contrario. En promociones
                    del tipo 2x1 se descontará el curso de menor precio.
                    <br />
                    <br />
                    Los precios de nuestros productos están sujetos a cambio. Si
                    dejas tu compra en el carrito se mostrará el precio más
                    reciente de cada producto. Los códigos de descuento no son
                    acumulables ni aplicables junto a otras promociones
                    especiales salvo que se indique lo contrario. En promociones
                    del tipo 2x1 se descontará el curso de menor precio.
                  </div>
                  <div className="font-Roboto text-[16px] text-[#888888] m-2">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="size-[20px] pl-1 mr-2"
                    />{" "}
                    Si tienes alguna duda puedes visitar a:{" "}
                    <Link to={"/terms"} className="underline">
                      Términos y condiciones Políticas de privacidad ó
                      Contáctanos
                    </Link>
                  </div>
                </div>
                <div className="h-auto flex flex-col gap-1 w-[100%]  p-2 bg-white rounded-[8px] m-2">
                  <div className="flex justify-between p-5 ">
                    <p className="font-Roboto_Bold text-[24px] text-bgmenu min-[320px]:text-[20px]">
                      Pedido
                    </p>
                    <Link to={"/shopping-cart"}>
                      <span className="flex justify-center items-center gap-1 font-Roboto_Bold text-[16px] text-bgmenu">
                        Editar
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="size-[15px] pl-1 mr-2"
                        />
                      </span>
                    </Link>
                  </div>
                  {
                    prereservation && prereservation?.length > 0 && prereservation.map((item,i:number)=>{
                      const prod = produts.find((p:ProductDTO)=>p.id == item.productId)
                        return  <OrderDetailCard
                        key={`order-cart-${i}`}
                        price={prod?.price||0}
                        pax={item.quantity}
                        category={prod?.category||""}
                        title={prod?.title||""}
                        image={prod?.image||""}
                      />
                    })
                  }
                 
                </div>
              </div>
            )}
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};
export default OrderPage;
