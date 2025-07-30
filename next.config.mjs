/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Next.js to produce a static export
  output: 'export',
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  ...nextConfig,
  // Set the base path for the project
  basePath: '/ChatConnect',
  assetPrefix: isProd ? '/ChatConnect/' : '',
};
