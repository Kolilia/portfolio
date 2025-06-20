/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true, // Добавьте для статического экспорта
	},

	reactStrictMode: true,
	swcMinify: true,
};

module.exports = nextConfig;
