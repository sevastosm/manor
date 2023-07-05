/** @type {import('next').NextConfig} */

const repo = "manor";
const assetPrefix = `/${repo}`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  domains: ["localhost", "sevastosm.github.io", "fonts.googleapis.com"],
  images: {
    // domains: ["sevastosm.github.io", "localhost", "media.graphassets.com"],
    unoptimized: true,
    // path: "./",
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
