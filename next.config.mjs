// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Apply 'output: export' and 'basePath' only when building for GitHub Pages
  // Check if the environment variable GITHUB_PAGES is set to 'true'
  output: process.env.GITHUB_PAGES ? 'export' : undefined,
  basePath: process.env.GITHUB_PAGES ? '/ChatConnect' : undefined,

  images: {
    unoptimized: true, // For static export, Next.js Image component needs this
    remotePatterns: [ // Add this section to allow images from readdy.ai
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/api/search-image/**', // Allow any path under this
      },
    ],
  },
};

export default nextConfig;
