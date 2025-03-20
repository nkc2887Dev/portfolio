import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "fastly.picsum.photos",
      "raw.githubusercontent.com",
      "mozilla.github.io",
      "morth.nic.in",
      "cors-anywhere.herokuapp.com",
    ],
    unoptimized: true,
  },
  // basePath: "/portfolio", // Match the GitHub repository name
  // assetPrefix: "/portfolio", // Ensure assets load correctly
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  output: "export",
};

export default nextConfig;
