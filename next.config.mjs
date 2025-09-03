/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            },
        ],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '3mb',
        },
    },
};

export default nextConfig;
