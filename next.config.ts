import type {NextConfig} from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: '/my-portfolio',
    assetPrefix: '/my-portfolio/',
    images: {
        unoptimized: true,
    },
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;
