// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Always export and set basePath when this config is used for deployment
  // The 'deploy' script will ensure this config is used for the build it triggers
  output: 'export',
  basePath: '/ChatConnect', // <--- This is now always set for the export build

  images: {
    unoptimized: true, // Essential for Next.js Image component with static export
    remotePatterns: [ // Allows images from readdy.ai
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/api/search-image/**',
      },
    ],
  },
};

export default nextConfig;
