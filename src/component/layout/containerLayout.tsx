import React from "react";
import Menu from "../menu/Menu";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

interface Props {
	banner?: boolean;
	footerparams?: boolean;
	children: React.ReactNode;
}

const ContainerLayout = ({ banner, children, footerparams = true }: Props): JSX.Element => {
	return (
		<div className="bg-white">
			<Menu />
			{banner && <Banner />}
			{children}

			{footerparams && <Footer />}
		</div>
	);
};

export default ContainerLayout;
