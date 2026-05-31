import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Menyuruh Next.js membuat versi statis (folder 'out')
  output: "export",
  
  // Mematikan optimasi gambar server bawaan Next.js 
  // (Wajib dimatikan agar kompatibel dengan GitHub Pages & 3D Texture)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;