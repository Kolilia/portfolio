/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3b82f6", // Синий цвет по умолчанию
				dark: "#1e293b", // Для темной темы
			},
			screens: {
				xs: "475px", // Кастомный брейкпоинт
			},
		},
	},
	plugins: [],
	darkMode: "class", // Включение темной темы через класс
};
