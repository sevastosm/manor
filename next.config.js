/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ["localhost", "fonts.googleapis.com"],
  images: {
    domains: ["localhost", "media.graphassets.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
