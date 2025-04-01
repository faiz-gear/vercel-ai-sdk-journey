/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  basePath: process.env.BASE_PATH
};

module.exports = nextConfig;
