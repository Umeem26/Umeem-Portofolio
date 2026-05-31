"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Smartphone, Camera, HeartPulse } from "lucide-react";
import Card3DTilt from "@/components/Card3DTilt";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectData = [
  {
    title: "Si Kaya App",
    desc: "Aplikasi mobile offline-first untuk digitalisasi manajemen keuangan peternak unggas lokal. Berhasil menekan efisiensi biaya pakan hingga 30-40%.",
    tech: ["Flutter", "SQLite", "Offline-First"],
    icon: <Sparkles className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "DigiCare Platform",
    desc: "Platform digital rekayasa kesehatan terpadu yang dirancang untuk mempercepat aksesibilitas monitoring dan efisiensi manajemen perawatan pengguna.",
    tech: ["Mobile Dev", "Database Management"],
    icon: <Smartphone className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Mebuca VanBooth",
    desc: "Inovasi bisnis photobooth keliling berbasis van yang mengintegrasikan teknologi Computer Vision untuk automasi pencetakan foto kreatif.",
    tech: ["Computer Vision", "System Design"],
    icon: <Camera className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "CompoundMe",
    desc: "Aplikasi personal finance mandiri yang dirancang untuk pelacakan finansial dan kebiasaan yang terstruktur, dengan fokus pada arsitektur bersih.",
    tech: ["Mobile Dev", "UI/UX", "Finance Tech"],
    icon: <HeartPulse className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 z-10 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight transition-colors"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">Projects.</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto font-medium transition-colors">
            Kompilasi artefak digital dan rekayasa sistem yang mentransformasikan baris kode menjadi solusi fungsional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              {/* BUNGKUSAN CARD 3D TILT */}
              <Card3DTilt className="h-full rounded-3xl group cursor-crosshair">
                <div className="flex flex-col h-full rounded-3xl overflow-hidden bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 shadow-glass dark:shadow-none transition-colors">
                  
                  <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-700">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[15%] group-hover:grayscale-0" />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl text-slate-800 dark:text-white shadow-sm">
                      {project.icon}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 flex-grow font-medium transition-colors">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-3 py-1 text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 rounded-full transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mt-auto border-t border-slate-200 dark:border-slate-700 pt-4 transition-colors">
                      <a href="#" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <GithubIcon className="w-4 h-4" /> Repository
                      </a>
                      <a href="#" className="flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}