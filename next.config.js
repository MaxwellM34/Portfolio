const path = require("path");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    outputFileTracingRoot: path.join(__dirname),
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    async redirects() {
      return [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "maxwellmcinnis.com",
            },
          ],
          destination: "https://www.maxwellmcinnis.com/:path*",
          permanent: true,
        },
      ];
    },
  };

  return nextConfig;
};
