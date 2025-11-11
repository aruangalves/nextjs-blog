import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  /**SSG GENERATION CONFIG: */
  /*output: 'export',
  images: {
    unoptimized: true,
  },*/
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
