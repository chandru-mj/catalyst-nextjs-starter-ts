/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/app/" : "",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  output: "export",
  rewrites: () => {
    return [
      {
        source: "/app/server/:path*",
        destination: "/server/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
