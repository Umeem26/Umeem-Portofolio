"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, CheckCircle2, Star, Target, Zap } from "lucide-react";
import React from 'react';

export default function Achievements() {
  
  // Data Penghargaan (KMIPN & PMB) dengan Bukti Foto
  const awardEvidence = [
    {
      id: 1,
      name: "KMIPN - Game Development",
      category: "NASIONAL - Finalist",
      desc: "Kompetisi Mahasiswa Informatika Politeknik Nasional. Bertarung dalam arsitektur game development.",
      icon: <Medal className="w-9 h-9" />, 
      theme: "from-amber-400 to-orange-500",
      glow: "shadow-amber-500/30",
      evidencePhoto: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" 
    },
    {
      id: 2,
      name: "Program Mahasiswa Berdampak",
      category: "PMB AWARDEE & FUNDING",
      desc: "Dianugerahi pendanaan untuk mengonversi konsep teknis menjadi solusi sosial yang nyata.",
      icon: <Award className="w-9 h-9" />, 
      theme: "from-emerald-400 to-teal-500",
      glow: "shadow-emerald-500/30",
      evidencePhoto: "https://images.unsplash.com/photo-1507537362145-9f71485a0ca6?q=80&w=800&auto=format&fit=crop" 
    },
  ];

  return (
    // MENGHAPUS bg-slate-950 agar transparan dan background ombak global kita terlihat!
    <section id="achievements" className="relative py-32 px-6 overflow-hidden z-10">
      
      {/* Background Ornaments (Sci-Fi Grid Light Version) */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-amber-400/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest border rounded-full text-amber-600 dark:text-amber-300 border-amber-200 dark:border-amber-900 bg-amber-50/80 dark:bg-amber-950/50 uppercase backdrop-blur-md shadow-sm"
          >
            <Zap className="w-4 h-4" /> The Proven Edge
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors"
          >
            The Hall of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Triumphs.</span>
          </motion.h2>
        </div>

        {/* ========================================= */}
        {/* KOLOM KIRI: AWARDS (The Evidence Morphing Plaques) */}
        {/* ========================================= */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 font-mono tracking-wide">
              <Trophy className="w-7 h-7 text-amber-500" />
              Validating the Journey
            </h3>

            {awardEvidence.map((award, index) => (
              <motion.div 
                key={award.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                // Diubah menjadi Light Glassmorphism
                className={`relative p-8 rounded-[30px] bg-white/60 dark:bg-[#1a202c] backdrop-blur-xl border border-white/80 dark:border-slate-700/50 hover:${award.glow} shadow-glass dark:shadow-none transition-all duration-700 group overflow-visible cursor-help`}
              >
                
                {/* LAYER BUKTI FOTO */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0">
                  <img src={award.evidencePhoto} alt={`Evidence for ${award.name}`} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                  {/* Overlay Gelap transparan agar teks bukti tetap terbaca */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div> 
                </div>

                {/* LAYER KONTEN PLAKAT */}
                <div className="relative z-10 flex gap-6 items-start group-hover:opacity-0 transition-opacity duration-700">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${award.theme} text-white shadow-xl group-hover:scale-110 transition-transform`}>
                    {award.icon}
                  </div>
                  <div>
                    {/* Teks diubah ke Slate 900 */}
                    <h4 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2 tracking-tight">{award.name}</h4>
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-200 mb-4 shadow-sm">
                      <Target className="w-3.5 h-3.5" /> {award.category}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium dark:font-semibold line-clamp-2 transition-colors">
                      {award.desc}
                    </p>
                  </div>
                </div>

                {/* Indikator "Hover for Evidence" */}
                <div className="absolute bottom-4 right-6 text-xs font-semibold font-mono text-amber-700 dark:text-amber-400 group-hover:opacity-0 transition-opacity">
                  [ Hover for Evidence ]
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================= */}
          {/* KOLOM KANAN: SERTIFIKASI GLOBAL (The Laser Scanning Grid) */}
          {/* ========================================= */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 font-mono tracking-wide">
              <CheckCircle2 className="w-7 h-7 text-blue-600" />
              Verified Competencies
            </h3>

            <div className="flex flex-col gap-4">
              {[
                { provider: "Google Skills", title: "Professional Standards", delay: 0 },
                { provider: "Dicoding", title: "Fundamental & Advanced", delay: 0.1 },
                { provider: "HackerRank", title: "Problem Solving", delay: 0.2 },
                { provider: "Vercel", title: "Deployment Mastery", delay: 0.3 },
              ].map((cert) => (
                <motion.div 
                  key={cert.provider}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: cert.delay }}
                  // Diubah menjadi Light Glassmorphism
                  className="relative p-6 rounded-2xl bg-white/70 dark:bg-[#111827] backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 shadow-sm dark:shadow-none group overflow-visible transition-all duration-300 cursor-default hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-[0_15px_30px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  {/* Efek Garis Laser Horizontal */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      {/* Teks diubah ke Slate 900 */}
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{cert.provider}</h4>
                      <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1 uppercase tracking-widest text-xs">{cert.title}</p>
                  </div>
                    {/* Ikon kembali ke tema terang */}
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 text-slate-400 group-hover:text-white group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all shadow-sm">
                      <Star className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}