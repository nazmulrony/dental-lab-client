/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: "#EBF5F5",
				dark: "#233746",
				light: "#ffffff",
				dimBlue: "#3C8080",
				ruby: "#E12454",
				navy: "#223645",
			},
			fontFamily: {
				lato: "'Lato', 'sans-serif'",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#E12454",
					secondary: "#f6d860",
					accent: "#37cdbe",
					neutral: "#3d4451",
					"base-100": "#ffffff",
				},
			},
			false,
		],
	},
}
