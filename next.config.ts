import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: [
    'firegeoapp-tunnel-7ulcv8hj.devinapps.com',
    'firegeoapp-tunnel-nfvi106v.devinapps.com',
    'firegeoapp-tunnel-fk54n9nw.devinapps.com',
    'firegeoapp-tunnel-ixf0uibe.devinapps.com',
    'firegeoapp-tunnel-x4c02o1y.devinapps.com',
    'firegeoapp-tunnel-4t0xe1cb.devinapps.com',
  ],
};

export default nextConfig;
