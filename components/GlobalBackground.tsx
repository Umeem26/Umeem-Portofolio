"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  const slab1Y = useTransform(scrollYProgress, [0, 1], ["-10vh", "120vh"]);
  const slab1X = useTransform(scrollYProgress, [0, 1], ["70vw", "10vw"]);
  const slab2Y = useTransform(scrollYProgress, [0, 1], ["80vh", "-30vh"]);
  const slab2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.5, 0.8]);
  const slab3Y = useTransform(scrollYProgress, [0, 1], ["110vh", "-10vh"]);
  const slab3X = useTransform(scrollYProgress, [0, 1], ["30vw", "80vw"]);
  const dataLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    // INI DIA TERSANGKANYA! Kita ubah bg-slate-50 menjadi dinamis: dark:bg-[#0a0f1c]
    <div className="fixed inset-0 z-[-50] overflow-hidden bg-slate-50 dark:bg-[#0a0f1c] pointer-events-none" style={{ perspective: "1000px" }}>
      
      {/* Grid Dasar - Menyesuaikan warna gelap/terang */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* CONTINUOUS OBJECTS (Mengambang Terus Menerus) */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] border border-dashed border-slate-300/40 dark:border-slate-700/50 rounded-full opacity-50"
      />
      <motion.div 
        animate={{ y: [0, -50, 0], x: [0, 30, 0], rotate: [0, 180, 360] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[5%] w-32 h-32 border-2 border-indigo-200/40 dark:border-indigo-500/20 rounded-2xl opacity-60 shadow-[0_0_30px_rgba(99,102,241,0)] dark:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
      />

      {/* PANEL 1: SERVER BLADE (Aura berubah di Dark Mode) */}
      <motion.div style={{ y: slab1Y, x: slab1X }} className="absolute">
        <motion.div 
          animate={{ y: [0, -20, 0], rotateX: [40, 50, 40], rotateZ: [-20, -10, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          // Kaca berubah gelap saat dark mode, border menyala
          className="w-96 h-64 bg-white/30 dark:bg-slate-900/40 backdrop-blur-md border-[1.5px] border-white/80 dark:border-slate-700/50 shadow-[0_20px_50px_rgba(59,130,246,0.05)] dark:shadow-[0_20px_50px_rgba(16,185,129,0.05)] rounded-3xl p-6 flex flex-col gap-4 overflow-hidden"
        >
          <div className="w-1/3 h-2 bg-blue-400/20 dark:bg-emerald-400/20 rounded-full"></div>
          <div className="w-3/4 h-2 bg-purple-400/20 dark:bg-blue-400/20 rounded-full"></div>
          <div className="mt-auto w-full h-1/2 border-t-2 border-dashed border-slate-300/30 dark:border-slate-600/30"></div>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-300/20 dark:bg-emerald-500/10 blur-3xl rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* PANEL 2: DATA CHIP */}
      <motion.div style={{ y: slab2Y, left: "15vw", scale: slab2Scale }} className="absolute">
        <motion.div 
          animate={{ y: [0, 30, 0], rotateX: [60, 45, 60], rotateY: [10, 25, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-80 bg-white/40 dark:bg-slate-800/30 backdrop-blur-xl border border-white dark:border-slate-600/50 shadow-[0_20px_40px_rgba(16,185,129,0.05)] dark:shadow-[0_20px_40px_rgba(59,130,246,0.1)] rounded-2xl flex items-center justify-center"
        >
          <div className="w-4/5 h-4/5 border border-emerald-400/30 dark:border-blue-500/30 rounded-xl relative">
              <div className="absolute top-[-5px] left-10 w-4 h-2 bg-emerald-400/50 dark:bg-blue-500/50 rounded-full"></div>
              <div className="absolute bottom-10 right-[-5px] w-2 h-4 bg-emerald-400/50 dark:bg-blue-500/50 rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* PANEL 3: GEOMETRY PROCESSOR */}
      <motion.div style={{ y: slab3Y, x: slab3X }} className="absolute">
        <motion.div 
          animate={{ y: [0, -15, 0], rotateZ: [30, 120, 30], rotateX: [20, 40, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-48 bg-gradient-to-br from-white/40 to-white/10 dark:from-slate-800/40 dark:to-slate-900/10 backdrop-blur-lg border border-white/60 dark:border-slate-700/50 shadow-glass dark:shadow-none rounded-full flex items-center justify-center"
        >
          <div className="w-1/2 h-1/2 border-2 border-indigo-400/30 dark:border-purple-500/30 rotate-45"></div>
        </motion.div>
      </motion.div>

      {/* SCROLL-DRAWN DATA STREAM */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-slate-200/50 dark:bg-slate-800/50">
        <motion.div style={{ height: dataLineHeight }} className="w-full bg-gradient-to-b from-transparent via-blue-500 to-purple-600 dark:via-emerald-400 dark:to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.8)] dark:shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
      </div>
      <div className="absolute top-0 left-[30%] w-[1px] h-full bg-slate-200/30 dark:bg-slate-800/50">
        <motion.div style={{ height: dataLineHeight }} className="w-full bg-gradient-to-b from-transparent via-emerald-400 to-emerald-600 dark:via-purple-500 dark:to-pink-600 shadow-[0_0_15px_rgba(16,185,129,0.8)] dark:shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
      </div>

    </div>
  );
}