    // next.config.mjs
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      // Apply 'output: export' and 'basePath' only when building for GitHub Pages
      // Check if the environment variable GITHUB_PAGES is set to 'true'
      output: process.env.GITHUB_PAGES ? 'export' : undefined,
      basePath: process.env.GITHUB_PAGES ? '/ChatConnect' : undefined, // <--- Ensure this is EXACTLY '/ChatConnect'

      images: {
        unoptimized: true,
        remotePatterns: [
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
    