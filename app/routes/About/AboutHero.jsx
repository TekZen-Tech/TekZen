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
              src="/contrast.jpeg"
              alt="TekZen Engineering Lab Fellows"
              className="w-full h-full object-cover object-center"
            />
            
            {/* Top Right Floating Badge matching Image 1 */}
            <div className="absolute top-5 right-5 sm:top-6 sm:right-6 bg-[#133e2b]/95 backdrop-blur-md text-[#c8f269] px-3.5 py-1.5 rounded-full text-[11px] font-extrabold tracking-wider uppercase flex items-center gap-2 shadow-lg border border-[#1b4a35]">
              <span className="w-2 h-2 rounded-full bg-[#c8f269] animate-pulse" />
              <span>COHORT 2025 ADMISSIONS OPEN</span>
            </div>
          </div>

          {/* Bottom Left Floating Card: Practical Training */}
          <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-6 bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-neutral-200/90 max-w-[280px] z-20 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#c8f269] text-[#133e2b] flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
              <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                Practical & Project-Based
              </h4>
              <p className="text-xs text-neutral-600 mt-1 leading-snug">
                Real coding exercises, guided lab assignments, and portfolio-ready projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Headline & Official About Copy */}
        <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
          
          {/* Top Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef7db] text-[#133e2b] text-xs font-bold tracking-wide w-fit">
            <span>🍃</span>
            <span>About Us • Tekzen Technologies</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#133e2b] font-headline tracking-tight leading-[1.08] mt-4">
            Simplifying Tech<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#133e2b]">Excellence.</span>
              <span className="absolute left-0 bottom-1 sm:bottom-2 w-full h-3 sm:h-3.5 bg-[#c8f269] rounded-full z-0 -rotate-1 origin-left" />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-bold text-[#456b14] italic mt-2">
            Your Success, Our Mission
          </p>

          {/* Description */}
          <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed mt-5">
            <p>
              At <strong className="text-neutral-900 font-semibold">Tekzen Technologies</strong>, we believe that practical skills, continuous learning, and the right guidance can transform career aspirations into professional achievements. We are an IT training institute based in Indore, Madhya Pradesh, committed to helping students, graduates, beginners, and working professionals develop the technical knowledge and practical experience needed to pursue opportunities in the technology industry.
            </p>
            <p>
              Our focus is on delivering industry-relevant training through hands-on practice, real-world projects, personalized mentorship, and career-oriented learning. We aim to bridge the gap between academic knowledge and practical industry requirements by helping learners build strong technical foundations and apply what they learn to solve real problems.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-[#133e2b] hover:bg-[#0c2a1a] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Course Tracks</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
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
