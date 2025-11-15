import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'roshnisodhi.com' },
      { protocol: 'https', hostname: 'www.roshnisodhi.com' },
    ],
  },
};

export default nextConfig;
