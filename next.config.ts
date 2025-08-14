import type {NextConfig} from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: isProd ? '/anhtuanmdev.github.io' : '',
    assetPrefix: isProd ? '/anhtuanmdev.github.io/' : '',
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
