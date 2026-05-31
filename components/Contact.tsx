"use client";

import { motion } from "framer-motion";
import { Mail, Terminal as TerminalIcon, Send } from "lucide-react";
import { useState, useEffect } from "react";

// Komponen Ikon GitHub Native anti-error
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Menginisiasi koneksi aman...\n> Memuat protokol kolaborasi...\n> Sistem siap. Silakan ketik pesan Anda untuk Hisyam.";

  // Animasi Typewriter untuk Terminal
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 50); // Kecepatan mengetik
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contact" className="relative min-h-screen py-32 px-6 flex flex-col justify-center overflow-hidden z-10">
      
      <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Compile</span> Something.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Tertarik untuk berkolaborasi dalam project AI, Web App, atau sekadar berdiskusi tentang arsitektur kode?
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* THE QUANTUM TERMINAL BOARD */}
        {/* ========================================= */}
        <div className="relative w-full max-w-3xl">
          
          {/* Efek Glow di belakang Terminal */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-[80px] opacity-20 -z-10 rounded-full animate-pulse"></div>

          {/* Social Media Orbits (Bola Kaca Melayang) */}
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 10 }} animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-12 -top-12 md:-left-20 md:-top-10 w-16 h-16 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-glass flex items-center justify-center text-slate-700 hover:text-blue-600 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] z-20">
            <LinkedinIcon className="w-7 h-7" />
          </motion.a>

          <motion.a href="#" whileHover={{ scale: 1.2, rotate: -10 }} animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-8 -top-8 md:-right-16 md:-top-16 w-20 h-20 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-glass flex items-center justify-center text-slate-700 hover:text-slate-900 hover:shadow-[0_0_30px_rgba(15,23,42,0.4)] z-20">
            <GithubIcon className="w-9 h-9" />
          </motion.a>

          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 15 }} animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -left-6 -bottom-10 md:-left-12 md:-bottom-12 w-14 h-14 rounded-full bg-white/40 backdrop-blur-xl border border-white/60 shadow-glass flex items-center justify-center text-slate-700 hover:text-emerald-500 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] z-20">
            <Mail className="w-6 h-6" />
          </motion.a>

          {/* Terminal Box UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl bg-[#0f172a]/80 backdrop-blur-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Terminal Header (Mac Style) */}
            <div className="flex items-center px-4 py-3 bg-slate-800/50 border-b border-slate-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto flex items-center gap-2 text-slate-400 text-xs font-mono">
                <TerminalIcon className="w-3 h-3" /> hisyam@dev-server ~ /contact
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base h-[300px] flex flex-col">
              
              {/* Output Typewriter */}
              <div className="text-emerald-400 whitespace-pre-wrap mb-6 flex-grow">
                {text}
                {isTyping && <span className="inline-block w-2 h-5 bg-emerald-400 animate-pulse ml-1 align-middle"></span>}
              </div>

              {/* Input Form Area */}
              <form className="mt-auto opacity-0 animate-[fadeIn_1s_ease-in-out_forwards] delay-[2000ms]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <span className="text-purple-400">~/guest</span> $
                    <input 
                      type="email" 
                      placeholder="Masukkan email Anda..." 
                      className="flex-grow bg-transparent border-b border-slate-600 focus:border-blue-500 outline-none px-2 py-1 text-slate-200 placeholder:text-slate-600 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex items-start gap-2 text-blue-400">
                    <span className="text-purple-400 mt-2">~/msg</span> $
                    <div className="flex-grow relative">
                      <textarea 
                        rows={1}
                        placeholder="echo 'Halo Hisyam, mari kolaborasi!'" 
                        className="w-full bg-transparent border-b border-slate-600 focus:border-blue-500 outline-none px-2 py-1 text-slate-200 placeholder:text-slate-600 transition-colors resize-none overflow-hidden"
                        required
                      ></textarea>
                      <button type="button" className="absolute right-0 bottom-2 text-slate-400 hover:text-emerald-400 transition-colors">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-6 w-full text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Hisyam Khaeru Umam. Crafted with <span className="text-red-500 animate-pulse">♥</span> and AI.</p>
      </div>

    </section>
  );
}