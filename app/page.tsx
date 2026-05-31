"use client";

import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import GlobalBackground from "../components/GlobalBackground";
import AboutMe from "../components/AboutMe";
import TechStack from "../components/TechStack";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

const Canvas3D = dynamic(() => import("../components/Canvas3D"), { ssr: false });

const roles = [
  "Software Engineer.",
  "Tech Enthusiast.",
  "AI Explorer.",
  "Problem Solver."
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1.2 } }
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <main className="relative overflow-x-hidden">
    <GlobalBackground />
    <Navbar />

      <section className="relative min-h-screen w-full overflow-hidden z-10">
        <div className="absolute inset-0 top-[15%] lg:top-0 lg:left-auto lg:right-0 w-full lg:w-[55%] min-h-screen h-full z-0">
          <Canvas3D /> 
        </div>

        <div className="absolute top-1/2 left-0 md:left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-blue-900/40 dark:to-emerald-900/20 rounded-full blur-[120px] opacity-40 -z-10 animate-pulse pointer-events-none transition-colors duration-700"></div>

        <div className="container mx-auto relative flex flex-col justify-center min-h-screen px-6 pt-24 lg:pt-20 z-10 pointer-events-none">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col items-start text-left max-w-2xl pointer-events-none mt-10 lg:mt-0">
            
            {/* Mengganti tag Mapres dengan tag yang lebih low-profile */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase border rounded-full text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50 bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-md shadow-sm transition-colors">
              <Code2 className="w-4 h-4" /> Available for Collaboration
            </motion.div>

            {/* STRUKTUR TEKS LURUS SEMPURNA */}
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors">
              Crafting Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">Excellence </span>
              <br className="hidden md:block" />
              
              {/* Flexbox wrapper agar 'as a' dan 'Software Engineer' sejajar */}
              <span className="flex items-center flex-wrap gap-x-3 mt-1 md:mt-2">
                as a
                <span className="inline-grid relative justify-items-start">
                  <span className="opacity-0 pointer-events-none col-start-1 row-start-1">Software Engineer.</span>
                  <AnimatePresence mode="popLayout">
                    <motion.span 
                      key={currentRole} 
                      initial={{ y: 30, opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      exit={{ y: -30, opacity: 0 }} 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                      className="col-start-1 row-start-1 text-slate-700 dark:text-slate-300 whitespace-nowrap"
                    >
                      {roles[currentRole]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium transition-colors">
              Hi, saya Hisyam Khaeru Umam. Saya berkembang di titik temu antara <strong className="text-slate-900 dark:text-white">rekayasa perangkat lunak presisi</strong> dan <strong className="text-slate-900 dark:text-white">kolaborasi tim yang solid</strong>. Mengubah logika kompleks menjadi solusi fungsional.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10 pointer-events-auto relative z-20">
              <button onClick={scrollToProjects} className="relative inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold text-white transition-all rounded-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 shadow-xl hover:-translate-y-1 overflow-hidden group border border-transparent dark:border-blue-500">
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 h-full w-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </button>
              <a href="/cv-hisyam.pdf" download className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold transition-all border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:-translate-y-1 group">
                <Download className="w-4 h-4 group-hover:text-blue-500 transition-colors" /> Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <AboutMe />
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Gallery />
      <Contact />
    
    </main>
  );
}