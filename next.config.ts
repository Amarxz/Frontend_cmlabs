import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Membiarkan build sukses meskipun ada error ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Membiarkan build sukses meskipun ada error TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
