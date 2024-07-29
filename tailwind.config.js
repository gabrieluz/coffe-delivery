/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"yellow-light": "#F1E9C9",
			yellow: "#DBAC2C",
			"yellow-dark": "#C47F17",
			"purple-light": "#EBE5F9",
			purple: "#8047F8",
			"purple-dark": "#4B2995",
			title: "#272221",
			subtitle: "#403937",
			text: "#574F4D",
			label: "#8D8686",
			hover: "#D7D5D5",
			button: "#E6E5E5",
			input: "#EDEDED",
			card: "#F3F2F2",
			background: "#FAFAFA",
			white: "#FFFFFF",
		},

		extend: {
			fontFamily: {
				Roboto: ["Roboto"],
			},
			borderRadius: {
				coffeeCard: "6px 36px",
				shoppingCard: "6px 44px",
			},
			fontSize: {},
			minHeight: {
				mainWrapper: "calc(100vh - 104px) ",
			},
			maxHeight: {
				detailsCard: "calc(100vh - 552px)",
			},
		},
	},
	plugins: [],
};
