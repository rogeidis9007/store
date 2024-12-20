/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"left-bottom": "-5px 5px 10px rgba(0, 0, 0, 0.3)",
			},
			fontFamily: {
				Kaushan: ["Kaushan Script"],
				Jaini_Purva: ["Jaini Purva"],
				Sail_Regular: ["Sail Regular"],
				Roboto: ["Roboto Regular", "sans-serif"],
				Roboto_Bold: ["Roboto Bold", "sans-serif"],
			},
			colors: {
				FF80: "rgba(255, 255, 255, 0.8)",
				FF40: "rgba(255, 255, 255, 0.4)",
				bgmenu: "#7c292f",
				bordermenu: "rgba(31, 11, 1, 0.17)",
				hoverMenu:"#000",
				titlecolor: "#7c292f",
			},
			boxShadow: {
				"3xl": "0 10px 15px 0px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui(),
		function ({ addUtilities }) {
			addUtilities({
				".scrollbar-thin": {
					"&::-webkit-scrollbar": {
						width: "2px",
						padding: "15px",
					},
					"&::-webkit-scrollbar-track": {
						background: "#f1f1f1",
					},
					"&::-webkit-scrollbar-thumb": {
						background: "#D16733",
						borderRadius: "10px",
					},
					"&::-webkit-scrollbar-thumb:hover": {
						background: "#105bbd",
					},
				},
			});
		},

		require("tailwindcss-animated"),
	],
};
