import React from "react";

import { createPortal } from "react-dom";

interface ModalProps {
	onCloseModal: () => void;
	children?: React.ReactNode;
	hideCloseButton?: boolean;
	type?: string;
	style?: string;
}

export default function Modal(props: ModalProps) {
	return createPortal(
		<>
			<div className=" will-change-transform modal-overlay z-50 w-screen h-screen bg-black/20 fixed top-0 left-0"></div>

			<div
				className={`${props.style}  will-change-transform bg-white max-h-[95%] z-50 scrollbar-hide shadow-lg w-[90%] md:w-[30%] h-auto overflow-auto modal-component fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  min-w-[10%]  py-4 px-4 md:px-10 rounded-[20px] `}
			>
				<header className="h-[50%] max-h-[60%] z-20 w-full flex flex-col pb-4  top-0 sticky ">
					<button
						onClick={props.onCloseModal}
						className="z-20 absolute top-[-5px] h-[45px] md:-right-6 right-6  font-Roboto px-3  rounded-full    bg-transparent"
					>
						<img src="/images/reserve/close.png" className="z-10 w-[20px] h-[20px] hover:cursor-pointer " />
					</button>
				</header>

				{props.children}

				<div className="will-change-transform flex items-center justify-end "></div>
			</div>
		</>,
		document.getElementById("modal-root") || document.body
	);
}
