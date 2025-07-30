// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure this is set for static export
  basePath: '/ChatConnect', // <--- Add this line, matching your repo name
  // Optional: If you use images, you might also need this:
  // images: {
  //   unoptimized: true, // For static export, Next.js Image component needs this
  // },
};

export default nextConfig;