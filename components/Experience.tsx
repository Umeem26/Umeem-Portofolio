"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const timelineData = [
  {
    title: "Persiapan Kerja Praktik (Pra-KP)",
    org: "Survei Penempatan IT & Finance",
    date: "2024 - Present",
    desc: "Aktif melakukan scouting kriteria dan pemetaan korporasi teknologi finansial potensial untuk implementasi otomatisasi sistem industri.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    title: "Sekretaris Jenderal",
    org: "Himakom POLBAN",
    date: "2023 - Present",
    desc: "Mengendalikan simpul birokrasi, penyusunan draf keorganisasian, serta harmonisasi manajemen linimasa kerja seluruh jajaran kabinet internal.",
    icon: <Users className="w-5 h-5" />,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30"
  },
  {
    title: "D3 Teknik Informatika",
    org: "Politeknik Negeri Bandung (POLBAN)",
    date: "Semester 4",
    desc: "Menempuh pendidikan vokasi rekayasa perangkat lunak terapan. Mengembangkan kompetensi analitis tinggi dalam struktur data, database tingkat lanjut, dan automasi proses.",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30"
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SIHIR UTAMA: Mendeteksi scroll khusus untuk area timeline ini
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Mengubah rasio scroll menjadi tinggi garis (0% sampai 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 px-6 z-10 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Journey.</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg font-medium transition-colors">
            Rekam jejak integrasi akademik dan kapabilitas kepemimpinan taktis.
          </p>
        </div>

        {/* CONTAINER UTAMA TIMELINE DENGAN REF SENSOR */}
        <div ref={containerRef} className="relative">
          
          {/* A. Garis Dasar / Rumah Tracker (Redup) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2 transition-colors"></div>

          {/* B. GARIS TRACER BERGERAK (Mengalir mengikuti scroll kursor) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ height: lineHeight }} 
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>

          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
              className={`relative flex flex-col md:flex-row items-start mb-16 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              
              {/* Bulatan pusat yang ikut bersinar saat terlewati */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-white dark:bg-slate-900 z-10 shadow-sm transition-colors">
                <div className={`p-2 rounded-full ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
              </div>

              {/* Obsidian Card yang presisi */}
              <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-12">
                <div className={`p-8 rounded-[30px] bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-glass dark:shadow-none transition-all hover:shadow-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">{item.title}</h3>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 transition-colors">{item.org}</p>
                  <p className="text-slate-600 dark:text-slate-200 text-base leading-relaxed font-medium dark:font-semibold transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}