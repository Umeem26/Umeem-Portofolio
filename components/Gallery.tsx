"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Maximize2, X, Camera, Sparkles } from "lucide-react";

// Data sementara (Nanti ganti dengan URL foto asli Anda)
const galleryData = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    title: "Tim Developer PMB",
    category: "Teamwork",
    desc: "Diskusi arsitektur sistem bersama tim untuk proyek pendanaan PMB.",
    span: "md:col-span-2 md:row-span-2", // Ukuran besar
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
    title: "KMIPN Final",
    category: "Competition",
    desc: "Mempresentasikan arsitektur Game Development di kancah nasional.",
    span: "md:col-span-1 md:row-span-1", // Ukuran kecil
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    title: "Late Night Coding",
    category: "Behind the Scene",
    desc: "Mengejar deadline penyelesaian modul Odoo dan PostgreSQL.",
    span: "md:col-span-1 md:row-span-1", // Ukuran kecil
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    title: "Himakom POLBAN",
    category: "Leadership",
    desc: "Memimpin rapat koordinasi kabinet sebagai Sekretaris Jenderal.",
    span: "md:col-span-2 md:row-span-1", // Ukuran melebar
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    title: "AI Integration Test",
    category: "Research",
    desc: "Eksperimen Computer Vision untuk ekstraksi data real-time.",
    span: "md:col-span-1 md:row-span-1", // Ukuran kecil
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    title: "Weightlifting Routine",
    category: "Discipline",
    desc: "Menjaga konsistensi fisik untuk mendukung ketahanan mental.",
    span: "md:col-span-1 md:row-span-1", // Ukuran kecil
  },
];

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Mencari data foto yang sedang diklik
  const selectedPhoto = galleryData.find(photo => photo.id === selectedId);

  return (
    <section id="gallery" className="relative py-32 px-6 overflow-hidden z-10">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest border rounded-full text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/80 dark:bg-indigo-900/20 uppercase backdrop-blur-md shadow-sm"
          >
            <Camera className="w-4 h-4" /> Captured Moments
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight transition-colors"
          >
            The Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-600">Vault.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto transition-colors font-medium"
          >
            Dokumentasi perjalanan dari balik layar penulisan kode, kompetisi, hingga momen kepemimpinan di organisasi. <strong className="text-indigo-600 dark:text-indigo-400">Klik foto untuk memperbesar.</strong>
          </motion.p>
        </div>

        {/* ASYMMETRICAL GRID (BENTO GALLERY) */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6">
          {galleryData.map((photo) => (
            <motion.div
              key={photo.id}
              layoutId={`card-container-${photo.id}`} // KUNCI SIHIR MORPHING
              onClick={() => setSelectedId(photo.id)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-slate-200 ${photo.span} shadow-sm hover:shadow-xl transition-shadow`}
            >
              {/* Gambar Background */}
              <motion.img
                layoutId={`image-${photo.id}`}
                src={photo.url}
                alt={photo.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Kaca Hitam & Tombol Expand (Muncul saat Hover) */}
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/50 scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* Data Plate Bawah (Sliding Up) */}
              <motion.div 
                layoutId={`text-container-${photo.id}`}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
              >
                <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest mb-1">{photo.category}</p>
                <h3 className="text-white font-bold text-lg md:text-xl leading-tight">{photo.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ========================================= */}
      {/* FULLSCREEN LIGHTBOX MORPHING (SIHIR UTAMA) */}
      {/* ========================================= */}
      <AnimatePresence>
        {selectedId && selectedPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            
            {/* Background Blur Gelap (Bisa diklik untuk tutup) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl cursor-zoom-out"
            />

            {/* Container Foto Fullscreen yang terbang dari Grid */}
            <motion.div
              layoutId={`card-container-${selectedPhoto.id}`}
              className="relative w-full max-w-5xl bg-slate-950 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-700/50 flex flex-col md:flex-row z-10"
            >
              
              {/* Foto Membesar */}
              <motion.div className="w-full md:w-2/3 h-[40vh] md:h-[70vh] relative">
                <motion.img
                  layoutId={`image-${selectedPhoto.id}`}
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Panel Detail Kanan */}
              <motion.div 
                layoutId={`text-container-${selectedPhoto.id}`}
                className="w-full md:w-1/3 p-8 md:p-10 flex flex-col bg-slate-900"
              >
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <Sparkles className="w-4 h-4" /> {selectedPhoto.category}
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                  {selectedPhoto.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {selectedPhoto.desc}
                </p>
                
                <button 
                  onClick={() => setSelectedId(null)}
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors font-semibold"
                >
                  <X className="w-5 h-5" /> Tutup Galeri
                </button>
              </motion.div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}