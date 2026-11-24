import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/Ebrahim_Hanif_CV.pdf",
        destination: "/EbrahimHanif's_Cv.pdf",
      },
    ];
  },
};

export default nextConfig;
