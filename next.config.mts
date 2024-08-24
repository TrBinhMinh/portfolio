// @ts-check

import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/homepage",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
