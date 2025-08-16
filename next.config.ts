import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 👇 This tells Next.js that your app directory is inside "src"
  experimental: {
    appDir: true,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default nextConfig;
