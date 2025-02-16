/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/portfolio', // Your GitHub repository name
    assetPrefix: '/portfolio/', // Your GitHub repository name
    output: 'export', // Static export configuration
};

export default nextConfig;
