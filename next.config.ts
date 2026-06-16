import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/consulting",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "/media",
        permanent: true,
      },
      {
        source: "/swag",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tech-education",
        destination: "/consulting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
