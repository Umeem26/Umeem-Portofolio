"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Kumpulan Teknologi & Tools Lengkap (Logo Resmi Devicon)
const techData = [
  // Bahasa
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Language", color: "shadow-yellow-400/50" },
  { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", category: "Language", color: "shadow-cyan-500/50" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Language", color: "shadow-orange-500/50" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "Language", color: "shadow-blue-600/50" },
  
  // Framework & Engine
  { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", category: "Framework", color: "shadow-sky-400/50" },
  { name: "Godot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", category: "Game Engine", color: "shadow-blue-500/50" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Framework", color: "shadow-slate-800/50" },
  
  // Database
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database", color: "shadow-indigo-500/50" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database", color: "shadow-green-500/50" },
  
  // Enterprise & Tools
  { name: "Odoo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", category: "Enterprise", color: "shadow-purple-500/50" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps", color: "shadow-blue-500/50" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "OS", color: "shadow-yellow-500/50" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Version Control", color: "shadow-orange-600/50" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", category: "Deployment", color: "shadow-slate-800/50" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Editor", color: "shadow-blue-500/50" },
];

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    // PERBAIKAN UTAMA: Penambahan id="tech" agar tombol di Navbar bisa melakukan smooth scroll kesini
    <section id="tech" className="relative py-32 px-6 z-10 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        
        <div className="mb-20 text-center">
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Ecosystem.</span>
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto transition-colors font-medium">
            Arahkan kursor Anda ke ekosistem gelembung di bawah untuk mengeksplorasi susunan teknologi, tools, dan infrastruktur saya.
          </p>
        </div>

        {/* SMARTWATCH BUBBLE GRID */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-3xl mx-auto" onMouseLeave={() => setHoveredTech(null)}>
          {techData.map((tech) => {
            const isHovered = hoveredTech === tech.name;
            const isDimmed = hoveredTech !== null && !isHovered;

            return (
              <div key={tech.name} className="relative w-16 h-16 md:w-20 md:h-20">
                <motion.div
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  animate={{
                    width: isHovered ? 192 : 80,
                    height: isHovered ? 224 : 80,
                    x: isHovered ? -56 : 0,
                    y: isHovered ? -72 : 0,
                    borderRadius: isHovered ? 32 : 9999,
                    zIndex: isHovered ? 50 : isDimmed ? 0 : 10,
                    opacity: isDimmed ? 0.4 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`absolute top-0 left-0 flex flex-col items-center justify-center bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-white dark:border-slate-700 overflow-hidden shadow-glass dark:shadow-none transition-colors ${isHovered ? tech.color : 'hover:shadow-md'}`}
                >
                  
                  {/* Logo Image */}
                  <motion.img 
                    src={tech.icon} 
                    alt={tech.name}
                    animate={{
                      width: isHovered ? 64 : 32,
                      height: isHovered ? 64 : 32,
                      marginBottom: isHovered ? 16 : 0
                    }}
                    className="object-contain"
                  />

                  {/* Teks Detail */}
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-center w-full px-4"
                    >
                      <h4 className="font-bold text-slate-900 dark:text-white text-lg leading-tight truncate">{tech.name}</h4>
                      <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">{tech.category}</p>
                    </motion.div>
                  )}

                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}