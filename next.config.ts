import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // L'ancien CV (2024) a été supprimé : les liens déjà partagés mènent au nouveau.
  async redirects() {
    return [{ source: "/CV.pdf", destination: "/CV-Mattias-Mathevon.pdf", permanent: true }];
  },
};

export default nextConfig;
