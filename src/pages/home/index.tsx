import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useEffect, useState } from "react";
import ContactSection from "../../component/banner/ContactSection";
import ContainerLayout from "../../component/layout/containerLayout";
import Loader from "../../component/modal/Loader";
import { loadProductosData } from "../../features/products/productsSlice";
import { loadCartsData } from "../../features/cart/cartsSlice";
import OfertsSection from "../../component/banner/OfertsSection";

const Home = () => {
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

	return (
		<>
			{loading && <Loader />}
			<ContainerLayout banner={true} key={"page-home"}>
				<OfertsSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default Home;
