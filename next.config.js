const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['ipfs.infura.io', 'ipfs.io'],
    unoptimized: true, // Disable Image Optimization for `next export`
  },
  trailingSlash: true,  // Ensures proper static export
  // output: 'export'
  basePath: isProd ? '/paybymint' : '',
  assetPrefix: isProd ?  '/paybymint' : ''

};
