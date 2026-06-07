"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      // Simulate progress load
      count += Math.floor(Math.random() * 5) + 2;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(onComplete, 800); // delay before marking fully completed
        }, 400);
      }
      setProgress(count);
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <div className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-hidden">
          {/* Top half */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#050b14] border-b border-slate-800/20"
          />

          {/* Bottom half */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050b14] border-t border-slate-800/20"
          />

          {/* Central Logo and Progress */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none"
          >
            {/* Glowing Logo Initials */}
            <div className="relative mb-6">
              <span className="font-serif text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-100 via-gold to-yellow-600 tracking-widest drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                H
              </span>
              <div className="absolute -inset-4 rounded-full border border-gold/10 blur-[8px] animate-pulse"></div>
            </div>

            {/* Progress Bar Container */}
            <div className="w-56 h-[1.5px] bg-slate-900 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-gold to-emerald-400 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress Counter */}
            <div className="font-mono text-xs tracking-[0.25em] text-gold/80">
              INITIALIZING SYSTEM // {progress}%
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
