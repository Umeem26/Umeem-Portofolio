"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [progressVal, setProgressVal] = useState(0);

  useEffect(() => {
    const counter = { val: 0 };
    
    // Create GSAP timeline/animations
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: 100,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          setProgressVal(Math.floor(counter.val));
        },
        onComplete: () => {
          // Play cinematic exit animations
          const tl = gsap.timeline({
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });

          // Scale out and fade out the center text content
          tl.to(contentRef.current, {
            opacity: 0,
            scale: 0.85,
            duration: 0.6,
            ease: "power3.inOut"
          });

          // Split-screen: Top panel slides up, bottom panel slides down
          tl.to(topPanelRef.current, {
            yPercent: -100,
            duration: 0.9,
            ease: "power4.inOut"
          }, "-=0.2");

          tl.to(bottomPanelRef.current, {
            yPercent: 100,
            duration: 0.9,
            ease: "power4.inOut"
          }, "<");

          // Hide container fully
          tl.to(containerRef.current, {
            display: "none",
            duration: 0
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden select-none pointer-events-none"
    >
      {/* Top half panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#050b14] border-b border-slate-900/50 pointer-events-auto"
      />

      {/* Bottom half panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050b14] border-t border-slate-900/50 pointer-events-auto"
      />

      {/* Center content overlay */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-auto"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Minimalist serif monogram logo */}
          <div className="relative mb-2">
            <span className="font-serif text-6xl md:text-7xl font-light text-[#F3F3F1] tracking-widest drop-shadow-[0_0_15px_rgba(212,175,55,0.25)]">
              H.K.U
            </span>
            <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/10 blur-[8px] animate-pulse"></div>
          </div>
          
          <div className="flex flex-col items-center space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-[#D4AF37] opacity-80">
              INITIALIZING...
            </span>
            
            {/* Elegant large counter */}
            <span className="font-mono text-3xl font-extralight text-[#F3F3F1] tracking-widest">
              {progressVal}%
            </span>
          </div>

          {/* Minimal hairline progress indicator */}
          <div className="w-44 h-[1px] bg-slate-800/80 relative overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#065F46] via-[#D4AF37] to-[#F3F3F1]"
              style={{ width: `${progressVal}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
