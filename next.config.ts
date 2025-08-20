import type {NextConfig} from "next";
const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    // No basePath needed for username.github.io repositories
    // basePath: '',
    // assetPrefix: '',

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
