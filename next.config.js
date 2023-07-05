/** @type {import('next').NextConfig} */

const repo = "manor";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  domains: ["localhost", "sevastosm.github.io/manor", "fonts.googleapis.com"],
  images: {
    domains: [
      "sevastosm.github.io/manor",
      "localhost",
      "media.graphassets.com",
    ],
    unoptimized: true,
  },
  // assetPrefix: assetPrefix,
  basePath: basePath,
};

module.exports = nextConfig;
