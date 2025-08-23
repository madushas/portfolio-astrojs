import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/images/**',
            },
        ],
        // Enable WebP and AVIF formats
        formats: ['image/webp', 'image/avif'],
        // Enable device pixel ratio optimization
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Enable minimum cache TTL
        minimumCacheTTL: 60,
    },
    // Enable experimental features for better optimization
    experimental: {
        optimizePackageImports: [
            'framer-motion',
            'lucide-react',
            'react-icons',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
        ],
    },
};

// Conditionally apply bundle analyzer
const config = process.env.ANALYZE === 'true' 
    ? withBundleAnalyzer()(nextConfig)
    : nextConfig;

export default config;
