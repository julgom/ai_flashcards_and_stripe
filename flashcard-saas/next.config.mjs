
/** @type {import('next').NextConfig} */
/*
const nextConfig = {};

export default nextConfig;
*/



/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['pdf2json'],
    },
};

export default nextConfig;
