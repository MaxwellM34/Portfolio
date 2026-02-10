const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  outputFileTracingRoot: path.join(__dirname),
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid flaky Windows cache pack writes that can corrupt dev chunks.
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;
