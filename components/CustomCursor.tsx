"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none blur-[100px] z-30 mix-blend-normal"
      // Gradasi warna dingin (es/biru/ungu) khas AI dan Tech
      style={{
        background: "radial-gradient(circle, rgba(120, 180, 255, 0.15) 0%, rgba(160, 120, 255, 0.05) 50%, rgba(255,255,255,0) 100%)"
      }}
      animate={{
        x: mousePosition.x - 200, // Offset agar kursor pas di tengah orb
        y: mousePosition.y - 200,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.5, // Memberikan efek "delay" (smooth trailing)
      }}
    />
  );
}