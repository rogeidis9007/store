import React from "react";

import { createPortal } from "react-dom";
import { SyncLoader } from "react-spinners";
import ContainerLayout from "../layout/containerLayout";

interface ModalProps {
	children?: React.ReactNode;
	hideCloseButton?: boolean;
	type?: string;
	style?: string;
}

export default function Loader(props: ModalProps) {
	return createPortal(
		<>
			<div className=" will-change-transform modal-overlay z-50 w-screen h-screen bg-black/50 fixed top-0 left-0"></div>

			<ContainerLayout banner={false} key={`1`} footerparams={false}>
				<div
					className={`${props.style} justify-center items-center flex !h-[200px]  will-change-transform bg-transparent max-h-[95%] z-50 scrollbar-hide  w-[100%] md:w-[30%]  overflow-auto modal-component fixed top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2  min-w-[10%]  py-4 px-4 md:px-10 rounded-[20px] `}
				>
					<div className="spinner-container">
						<SyncLoader color={"#000"} loading={true} size={40} margin={15} />
					</div>
				</div>
			</ContainerLayout>
		</>,
		document.getElementById("modal-root") || document.body
	);
}
