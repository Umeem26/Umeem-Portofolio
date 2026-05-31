"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MapPin, MousePointerClick, Code2, Users, Compass } from "lucide-react";
import { MouseEvent } from "react";

export default function AboutMe() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useMotionTemplate`${mouseY.get() * -15}deg`;
  const rotateY = useMotionTemplate`${mouseX.get() * 15}deg`;
  const glareX = useMotionTemplate`${(mouseX.get() + 1) * 50}%`;
  const glareY = useMotionTemplate`${(mouseY.get() + 1) * 50}%`;

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 flex items-center justify-center z-10">
      <div className="container mx-auto max-w-6xl relative">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* SISI KIRI: THE HOLOGRAPHIC PARALLAX PHOTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 relative flex justify-center perspective-[1000px]"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-500 animate-bounce flex items-center gap-1 opacity-70">
              <MousePointerClick className="w-3 h-3" /> Hover Me
            </div>

            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/40 dark:border-slate-700/50 shadow-2xl group cursor-crosshair transition-transform duration-200 ease-out"
            >
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-10 mix-blend-overlay opacity-30 pointer-events-none"></div>

              <img 
                src="profile4.png" 
                alt="Hisyam Khaeru Umam" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              
              <motion.div 
                style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.4) 0%, transparent 50%)` }}
                className="absolute inset-0 z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div 
                style={{ transform: "translateZ(50px)" }} 
                className="absolute bottom-4 left-4 right-4 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-slate-700/50 shadow-glass"
              >
                <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">Hisyam Khaeru Umam</h3>
                <p className="text-sm font-medium text-blue-400 flex items-center gap-1 mt-1 drop-shadow-md">
                  <MapPin className="w-3 h-3" /> Bandung, Indonesia
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* SISI KANAN: Inovasi Bento Grid & Low Profile Narasi */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">
              Engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Curiosity.</span>
            </h2>
            
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-200 leading-relaxed mb-8 transition-colors">
              <p>
                Sebagai mahasiswa Teknik Informatika di POLBAN, saya selalu melihat pengembangan perangkat lunak sebagai proses pembelajaran yang tiada akhir. Bagi saya, arsitektur kode yang baik adalah yang mampu memecahkan masalah nyata sekaligus ramah untuk dikolaborasikan.
              </p>
              <p>
                Saya memiliki antusiasme mendalam pada <strong className="text-blue-600 dark:text-blue-400 font-semibold">Mobile Apps & Integrasi Sistem</strong>. Berkolaborasi dalam tim untuk membangun solusi digital yang fungsional dan efisien selalu menjadi dorongan utama saya dalam berkarya.
              </p>
            </div>

            {/* THE BENTO GRID INNOVATION (Low Profile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Box 1: Continuous Learner (Purple/Indigo Glow) */}
              <div className="relative p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 backdrop-blur-md border border-indigo-200/60 dark:border-indigo-700/50 shadow-sm flex items-start gap-4 hover:shadow-md transition-all overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-bl-full blur-xl group-hover:bg-indigo-400/30 transition-colors"></div>
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 z-10 border border-indigo-200 dark:border-indigo-800">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="z-10">
                  <h4 className="font-bold text-slate-900 dark:text-white">Lifelong Learner</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-tight mt-1">Konsisten bereksplorasi dengan arsitektur dan teknologi baru.</p>
                </div>
              </div>

              {/* Box 2: Collaborative Team Player */}
              <div className="p-5 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-sm flex items-start gap-4 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all">
                <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Team Contributor</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-tight mt-1">Mengutamakan sinergi dan komunikasi kolaboratif di organisasi.</p>
                </div>
              </div>

              {/* Box 3: Tech Focus (Full Width dengan Animasi Server) */}
              <div className="md:col-span-2 p-5 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 shadow-sm flex items-center justify-between hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700 transition-all group cursor-default">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">System Architecture</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-tight mt-1">Berfokus pada OOP, Mobile Development & System Integration.</p>
                  </div>
                </div>
                
                {/* Visual Indicator (Server Signal) */}
                <div className="hidden sm:flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                   <span className="w-1.5 h-4 bg-emerald-500 rounded-full animate-[pulse_1s_ease-in-out_infinite]"></span>
                   <span className="w-1.5 h-8 bg-emerald-400 rounded-full animate-[pulse_1s_ease-in-out_infinite_200ms]"></span>
                   <span className="w-1.5 h-6 bg-blue-500 rounded-full animate-[pulse_1s_ease-in-out_infinite_400ms]"></span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}