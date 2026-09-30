import React from "react";
import { Link } from "react-router";

export default function AboutHero() {
  const scrollToLeadership = () => {
    const el = document.getElementById("leadership");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCampus = () => {
    const el = document.getElementById("campus-lab");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative px-6 sm:px-12 md:px-20 pt-8 sm:pt-14 pb-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Visual Asset with Floating Badges matching Image 1 */}
        <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
          {/* Subtle lime blur accent behind image */}
          <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-[#e2f7b8]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* Arched / Rounded Lab Photo Container */}
          <div className="relative w-full max-w-[480px] aspect-[4/4.4] rounded-[3rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white/80 bg-[#133e2b]">
            <img
              src="/fellows-collaboration.jpg"
              alt="TekZen Engineering Lab Fellows"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Top Right Floating Badge matching Image 1 */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-[#133e2b]/95 backdrop-blur-md text-[#c8f269] px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase flex items-center gap-2 shadow-lg border border-[#1b4a35]">
              <span className="w-2 h-2 rounded-full bg-[#c8f269] animate-pulse" />
              <span>COHORT 2025 ADMISSIONS OPEN</span>
            </div>
          </div>

          {/* Bottom Left Floating Card: Zero Slides Policy matching Image 1 */}
          <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-6 bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-neutral-200/90 max-w-[270px] z-20 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#c8f269] text-[#133e2b] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                Zero Slides Policy
              </h4>
              <p className="text-xs text-neutral-600 mt-1 leading-snug">
                Codebases committed to GitHub and deployed to cloud clusters from Day 1.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: The Manifesto & Creed Headline & Text matching Image 1 */}
        <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
          
          {/* Top Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef7db] text-[#133e2b] text-xs font-bold tracking-wide w-fit">
            <span>🍃</span>
            <span>The Tekzen Manifesto & Creed</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#133e2b] font-headline tracking-tight leading-[1.08] mt-4">
            Engineering is an<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#133e2b]">Apprenticeship,</span>
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-3.5 bg-[#c8f269] rounded-full z-0 -rotate-1 origin-left" />
            </span><br />
            Not a Lecture.
          </h1>

          {/* Manifesto Description */}
          <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed mt-6">
            <p>
              Modern technical education has deteriorated into passive 100–person zoom streams, credential factories, and copy-paste syntax memorization. At Tekzen Technologies, we run an intensive atelier model designed for engineers who refuse mediocrity.
            </p>
            <p>
              We mentor high-velocity problem solvers in production environments. You don't study software; you design, fail, refactor, and ship industrial-grade distributed services until the discipline becomes second nature.
            </p>
          </div>

          {/* Action CTAs matching Image 1 */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToLeadership}
              className="inline-flex items-center gap-2 bg-[#133e2b] hover:bg-[#0c2a1a] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>Meet Leadership</span>
              <span>↓</span>
            </button>
            <button
              onClick={scrollToCampus}
              className="inline-flex items-center justify-center bg-[#edeae1] hover:bg-[#e2dfd5] text-[#133e2b] px-6 py-3.5 rounded-full font-bold text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <span>Tour Indore Campus</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
