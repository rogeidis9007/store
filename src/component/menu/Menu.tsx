import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Menu() {
	const [menumovil, setMenuMovil] = useState(false);
	const location = useLocation();

	const menuRef = useRef<HTMLDivElement>(null);



	const shoppingCartCant = useSelector((state: RootState) => state?.cart?.data?.products?.length || 0);


	return (
		<>
			{
				// @ts-ignore
				<div className={`fixed top-0 left-0 right-0   bg-bgmenu md:bg-bgmenu h-[83px] flex items-center justify-between z-50`} ref={menuRef}>
					<div className="w-full  md:w-auto relative">
						<div className="w-[10%] pr-2">
							<section className="text-[#FFFFFF] text-[32px] flex md:px-1 items-center">
								<img
									src="/images/menu/iconamoon_menu-burger-horizontal-bold.png"
									className={`${menumovil && "rotate-90 transition-transform transform ease-in-out duration-300"
										} transition-transform transform ease-in-out duration-300 w-[2rem] h-[2rem] md:hidden mr-3 ml-2 hover:cursor-pointer`}
									onClick={() => setMenuMovil(!menumovil)}
								/>
								<Link to="/" className="flex items-center">
									<span className="hover:text-hoverMenu md:text-[32px] font-Sail_Regular w-full flex justify-start p-1 ml-[0px] md:ml-[24px] min-[320px]:text-[24px]">
										<p className="whitespace-nowrap ">Fashion Store</p>
									</span>
								</Link>
							</section>
						</div>
						{/*Dropdawn cuando el menu este en modo Movile*/}
						<div
							className={`bg-bgmenu md:hidden absolute top-[120px] w-[100%] ${!menumovil ? "backdrop-blur-sm md:hidden -translate-x-[100rem]" : ""
								}  transition-transform transform ease-in-out duration-300 text-white z-10  -mt-16`}
						>
							<div className="space-y-1 px-2 pb-3 pt-2 items-center justify-center">
								<Link to="/products">
									<p className="block rounded-md px-3 py-2 text-base" aria-current="page">
										Productos
									</p>
								</Link>

								<Link to="/">
									<p className="block rounded-full px-3 py-2 text-base font-medium bg-info text-white hover:cursor-pointer">Iniciar</p>
								</Link>
								<Link to="/">
									<p className="block rounded-full px-3 py-2 text-base font-medium bg-info text-white hover:cursor-pointer">Registrarse</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-[80%] hidden md:text-[#FFFFFF] md:flex md:gap-5 md:mx-auto md:font-bold justify-center items-center pr-5 ">
						<Link to="/products">
							<div
								className={`hover:cursor-pointer hover:text-hoverMenu ${location.pathname === "/products" ? "text-[#E38A5D]" : "text-[#FFFFFF]"}`}

							>
								Productos
							</div>
						</Link>

					</div>
					<div className="w-[40%]   min-[320px]:w-[20%] text-[#FFFFFF] flex  justify-end items-center md:gap-6  mr-5 right-0  min-[320px]:mr-2">

						<Link to="/shopping-cart">
							<div className="pr-5">
								<Badge count={shoppingCartCant}>
									<Avatar size={"large"} style={{ backgroundColor: "transparent" }} icon={<ShoppingCartOutlined />} />
								</Badge>
							</div>
						</Link>


						<Link to="/">
							<div className=" hover:cursor-pointer hover:text-hoverMenu text-[16px]  px-3 py-2 hidden md:inline-block">
								<p className=" font-bold">Iniciar</p>
							</div>
						</Link>

						<Link to="/">
							<div className="hover:cursor-pointer hover:text-hoverMenu hover:border-hoverMenu text-FF80 text-[16px] border border-FF40 rounded px-3 py-2 hidden md:inline-block">
								<p className=" font-bold">Registrarse</p>
							</div>
						</Link>
					</div>
				</div>
			}
		</>
	);
}

export default Menu;
