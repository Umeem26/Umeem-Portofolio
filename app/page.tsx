"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import GlobalBackground from "../components/GlobalBackground";
import AboutMeDynamic from "../components/AboutMeDynamic";
import TechStack from "../components/TechStack";
import Achievements from "../components/Achievements";
import Gallery from "../components/Gallery";
import Preloader from "../components/Preloader";
import InteractiveBackground from "../components/InteractiveBackground";
import { Download, ArrowRight, Code2 } from "lucide-react";

export default function Home() {
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);
  
  const pageWrapperRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (!isLoaderFinished) return;

    // Trigger hero text entrance animations sequentially
    const tl = gsap.timeline();

    // Reset initial state to prevent flashes
    gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, descRef.current, ctaRef.current, scrollIndicatorRef.current], {
      opacity: 0,
      y: 50
    });

    // 1. Badge reveal
    tl.to(badgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // 2. Title slide up & fade-in
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out"
    }, "-=0.5");

    // 3. Subtitle slide up
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.8");

    // 4. Description fade-in
    tl.to(descRef.current, {
      opacity: 0.75,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6");

    // 5. CTA buttons fade-in
    tl.to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");

    // 6. Scroll Indicator fade-in
    tl.to(scrollIndicatorRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    // 7. Morphing scroll transition from Hero to About section
    const heroScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      }
    });

    // Zoom-in, fade-out, and shift Y position of Hero Content
    heroScrollTl.to(heroContentRef.current, {
      scale: 3.5,
      opacity: 0,
      yPercent: -40,
      ease: "none"
    }, 0);

    // Dim and blur the 3D particle canvas background as we scroll out of Hero
    heroScrollTl.to(canvasContainerRef.current, {
      opacity: 0.12,
      filter: "blur(12px)",
      ease: "none"
    }, 0);

    // 8. Elegant background color shift as user scrolls deep into the About section
    gsap.to(pageWrapperRef.current, {
      backgroundColor: "#03170e", // Premium very dark emerald
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, [isLoaderFinished]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main ref={pageWrapperRef} className="relative overflow-x-hidden min-h-screen bg-[#050b14] transition-colors duration-500">
      {/* Cinematic pre-loader overlay */}
      <Preloader onComplete={() => setIsLoaderFinished(true)} />

      {/* Background aesthetics */}
      <GlobalBackground />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Interactive 3D Canvas Background Container */}
        <div ref={canvasContainerRef} className="absolute inset-0 w-full h-full z-0">
          <InteractiveBackground />
        </div>

        {/* Ambient Dark Overlay to enhance text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050b14]/40 to-[#050b14] pointer-events-none z-5" />

        {/* Hero Content Panel */}
        <div ref={heroContentRef} className="container mx-auto relative flex flex-col justify-center items-center text-center min-h-screen px-6 pt-24 lg:pt-20 z-10 pointer-events-none">
          {/* Badge Tag */}
          <div ref={badgeRef} className="mb-6 opacity-0 select-none">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-[10px] font-mono tracking-widest uppercase border rounded-full text-[#D4AF37] border-[#D4AF37]/35 bg-[#065F46]/10 backdrop-blur-md">
              <Code2 className="w-3.5 h-3.5" /> Available for Collaboration
            </span>
          </div>

          {/* Main Title - Serif Elegant Typography */}
          <div className="overflow-hidden mb-4 py-2 select-none">
            <h1 
              ref={titleRef} 
              className="opacity-0 font-serif text-5xl md:text-8xl lg:text-9xl font-extralight tracking-tight text-[#F3F3F1] leading-none"
            >
              HISYAM K. UMAM
            </h1>
          </div>

          {/* Subtitle - Mono technical spacing */}
          <div className="overflow-hidden mb-8 select-none">
            <div 
              ref={subtitleRef} 
              className="opacity-0 font-mono text-[10px] sm:text-xs tracking-[0.45em] text-[#D4AF37] uppercase font-bold"
            >
              CRAFTING DIGITAL EXCELLENCE
            </div>
          </div>

          {/* Soft description text */}
          <p 
            ref={descRef} 
            className="opacity-0 max-w-xl text-sm md:text-base text-[#F3F3F1]/80 leading-relaxed font-light mb-10 select-none"
          >
            A software engineer specializing in high-performance web systems and AI tools. 
            Blending technical precision with functional design.
          </p>

          {/* Call-to-actions */}
          <div 
            ref={ctaRef} 
            className="opacity-0 flex flex-wrap justify-center gap-4 pointer-events-auto relative z-20"
          >
            <button 
              onClick={scrollToProjects} 
              className="relative inline-flex items-center gap-2 px-8 py-3.5 text-xs font-mono tracking-wider uppercase text-black bg-[#D4AF37] hover:bg-[#D4AF37]/90 transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
            </button>
            <a 
              href="/cv-hisyam.pdf" 
              download 
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-mono tracking-wider uppercase border border-slate-700 hover:border-[#F3F3F1]/40 rounded-full text-[#F3F3F1] bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105 duration-300"
            >
              <Download className="w-3.5 h-3.5" /> Download CV
            </a>
          </div>
        </div>

        {/* Cinematic Scroll Down Hint */}
        <div 
          ref={scrollIndicatorRef} 
          className="opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none select-none"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#F3F3F1]/45">Scroll Down</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#D4AF37]/60 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Pinned Scrollytelling About Me Section */}
      <AboutMeDynamic />

      {/* Other portfolio sections */}
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Gallery />
      <Contact />
    </main>
  );
}