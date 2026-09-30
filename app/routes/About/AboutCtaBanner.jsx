import React from "react";
import { Link } from "react-router";

export default function AboutCtaBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-8">
      {/* Huge Dark Green Gradient Banner matching Image 5 (Bottom) */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0c2e1c] via-[#103722] to-[#16442c] rounded-[2.5rem] sm:rounded-[3.5rem] p-10 sm:p-16 lg:p-20 text-center text-white shadow-2xl border border-[#1b4a35]">
        
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c8f269]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Top Pill Badge matching Image 5 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#c8f269] text-xs font-bold border border-white/15 mb-6">
            <span>Admissions For Next Quarter</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-headline tracking-tight leading-[1.08]">
            Stop Studying Syntax.<br />
            Start Shipping Systems.
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-300 text-sm sm:text-base mt-6 max-w-xl leading-relaxed">
            Cohort seats are strictly restricted to 15 fellows to safeguard individual mentorship depth. Book your technical aptitude diagnostic today.
          </p>

          {/* Action CTAs matching Image 5 */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/courses#book-demo"
              className="bg-[#c8f269] hover:bg-[#bbf264] text-[#133e2b] font-bold px-8 py-4 rounded-full text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all active:scale-95 cursor-pointer"
            >
              Book Free Demo &amp; Diagnostic
            </Link>
            <button
              onClick={() => alert("Downloading Fellowship Syllabus specification...")}
              className="bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base border border-white/30 hover:border-white/50 transition-all active:scale-95 cursor-pointer"
            >
              Download Fellowship Syllabus
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
