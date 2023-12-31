/** @type {import('next').NextConfig} */

// const repo = "manor";
// const assetPrefix = `/${repo}`;
// const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  // domains:
  //   process.env.NODE_ENV === "production"
  //     ? [("localhost", "sevastosm.github.io", "fonts.googleapis.com")]
  //     : null,
  images: {
    // domains: ["localhost", "sevastosm.github.io", "media.graphassets.com"],
    unoptimized: true,
    // path: "./",
  },
  basePath: "",
};

module.exports = nextConfig;
