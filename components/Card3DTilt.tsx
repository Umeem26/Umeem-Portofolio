"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card3DTilt({ children, className = "" }: Card3DTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Nilai pergerakan mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Fisika pegas (spring) untuk gerakan kemiringan dan kilau cahaya
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  // 1. Pemetaan Kemiringan 3D
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // 2. Pemetaan Posisi Cahaya Glare (Persentase)
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  
  // INOVASI: Template Gradien Cahaya Dinamis
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.2) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    setIsHovered(true);
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d", 
      }}
      className={`relative will-change-transform ${className}`}
    >
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} 
        className="w-full h-full relative rounded-3xl"
      >
        {children}
        
        {/* INOVASI: Lapisan Kilau (Glare) Hologram */}
        <motion.div
          style={{ background: glareBackground, opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-50 mix-blend-overlay"
        />
      </div>
    </motion.div>
  );
}