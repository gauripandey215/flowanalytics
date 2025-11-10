import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactStrictMode: true,

  // ✅ Add this to silence Turbopack warning
  turbopack: {},

  // ✅ Optional: leave Webpack hook out completely
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
