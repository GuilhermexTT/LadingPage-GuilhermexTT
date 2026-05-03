import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Não falha o build por erros de TypeScript
  typescript: {
    ignoreBuildErrors: true,
  },
  // Não falha o build por avisos de ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Permite imagens externas (Unsplash, Cloudinary, etc.)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
