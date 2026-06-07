"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMeDynamic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const artifact1Ref = useRef<HTMLDivElement>(null);
  const artifact2Ref = useRef<HTMLDivElement>(null);
  const artifact3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop Configuration (min-width: 768px)
      mm.add("(min-width: 768px)", () => {
        // Timeline for the pinned scrollytelling section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%", // Pinned scroll length
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          }
        });

        // 1. Grayscale to color & Parallax translation of the profile image
        tl.fromTo(
          imageRef.current,
          { filter: "grayscale(100%)", yPercent: -12 },
          { filter: "grayscale(0%)", yPercent: 12, ease: "none" },
          0
        );

        // 2. Word-by-word text reveal scrub (stagger opacity from 0.15 to 1)
        tl.fromTo(
          ".about-word",
          { opacity: 0.15, y: 5 },
          { opacity: 1, y: 0, stagger: 0.08, ease: "none" },
          0.1
        );

        // 3. Floating glassmorphism shapes/cards parallax drifting at different rates
        tl.fromTo(
          artifact1Ref.current,
          { y: 50, rotate: -3 },
          { y: -110, rotate: 5, ease: "power1.out" },
          0
        );

        tl.fromTo(
          artifact2Ref.current,
          { y: 150, rotate: 6 },
          { y: -150, rotate: -6, ease: "power1.out" },
          0
        );

        tl.fromTo(
          artifact3Ref.current,
          { y: 80, rotate: 2 },
          { y: -80, rotate: -4, ease: "power1.out" },
          0
        );
      });

      // Mobile Configuration (max-width: 767px)
      mm.add("(max-width: 767px)", () => {
        // Subtle scroll-reveal trigger on mobile (no pinning)
        gsap.fromTo(
          imageRef.current,
          { filter: "grayscale(100%)", scale: 0.95 },
          {
            filter: "grayscale(0%)",
            scale: 1,
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              end: "bottom 40%",
              scrub: true,
            }
          }
        );

        gsap.fromTo(
          ".about-word",
          { opacity: 0.2 },
          {
            opacity: 1,
            stagger: 0.02,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 75%",
              end: "bottom 35%",
              scrub: true,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const bioText = "Hi, saya Hisyam Khaeru Umam. Saya memandang rekayasa perangkat lunak sebagai perpaduan antara logika sistematis dan kolaborasi yang solid. Sebagai seorang lifelong learner, saya mendedikasikan diri untuk terus mengeksplorasi teknologi baru, menyederhanakan arsitektur yang kompleks, dan menciptakan integrasi sistem yang andal. Fokus utama saya terletak pada pengembangan mobile apps berkualitas tinggi dan perancangan system integration yang efisien untuk membantu tim bergerak lebih cepat dan berinovasi secara konsisten.";
  const words = bioText.split(" ");

  return (
    <div ref={containerRef}>
      <section
        id="about"
        ref={sectionRef}
        className="relative min-h-screen w-full bg-[#050b14] overflow-hidden flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-16 md:py-0 border-b border-slate-900/60"
      >
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#065F46]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Floating Artifacts - Desktop only glassmorphism widgets */}
        <div 
          ref={artifact1Ref} 
          className="hidden md:block absolute left-[8%] top-[12%] p-5 bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-glass select-none pointer-events-none z-20 max-w-[190px]"
        >
          <div className="text-[9px] font-mono tracking-[0.3em] text-[#D4AF37] mb-1">CULTURE // 01</div>
          <h4 className="font-serif text-sm text-[#F3F3F1] font-light">Collaborative Mindset</h4>
        </div>

        <div 
          ref={artifact2Ref} 
          className="hidden md:block absolute right-[10%] top-[70%] p-5 bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-glass select-none pointer-events-none z-20 max-w-[210px]"
        >
          <div className="text-[9px] font-mono tracking-[0.3em] text-[#065F46] mb-1">CORE FOCUS // 02</div>
          <h4 className="font-serif text-sm text-[#F3F3F1] font-light">System Integration</h4>
        </div>

        <div 
          ref={artifact3Ref} 
          className="hidden md:block absolute left-[35%] bottom-[10%] p-5 bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 rounded-2xl shadow-glass select-none pointer-events-none z-20 max-w-[190px]"
        >
          <div className="text-[9px] font-mono tracking-[0.3em] text-slate-400 mb-1">ENGINEER // 03</div>
          <h4 className="font-serif text-sm text-[#F3F3F1] font-light">Lifelong Learner</h4>
        </div>

        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Column: Pinned Profile Frame with subtle Parallax */}
          <div className="w-full md:w-[45%] flex justify-center items-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[360px] md:h-[480px] lg:w-[400px] lg:h-[530px] overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a]/40 shadow-glass">
              {/* Inner floating border design detail */}
              <div className="absolute inset-3 border border-white/5 rounded-xl pointer-events-none z-10" />
              
              <img
                ref={imageRef}
                src="/profile2.png"
                alt="Hisyam K. Umam Profile"
                className="absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover filter grayscale"
              />
              {/* Dark editorial vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/60 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Right Column: Progressive Reveal Paragraph */}
          <div className="w-full md:w-[50%] flex flex-col justify-center text-left">
            <div className="font-mono text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase mb-4 select-none">
              WHO I AM
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#F3F3F1] mb-8 leading-tight tracking-tight select-none">
              Membangun Jembatan Logika
            </h2>

            <div ref={textRef} className="leading-relaxed text-lg md:text-xl lg:text-2xl font-light tracking-wide font-serif">
              {words.map((word, i) => (
                <span
                  key={i}
                  className="about-word inline-block mr-2.5 text-[#F3F3F1] opacity-15 select-none"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
