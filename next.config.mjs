/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  basePath: isProd ? "/portfolio-asakai" : "",
  assetPrefix: isProd ? "/portfolio-asakai" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
