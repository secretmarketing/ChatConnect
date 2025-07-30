/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

const isProd = process.env.NODE_ENV === 'production';

export default {
  ...nextConfig,
  basePath: '/ChatConnect',
  assetPrefix: isProd ? '/ChatConnect/' : '',
};
