import React from "react";

export default function AboutMissionVision() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Intro Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase bg-[#eef7db] px-4 py-1.5 rounded-full">
          PURPOSE & ASPIRATION
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-4">
          Our Mission & Vision
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 mt-3.5 leading-relaxed">
          Whether you are starting your programming journey, exploring data analytics and artificial intelligence, or preparing for a career in software development, Tekzen Technologies provides a learning environment designed to support your growth.
        </p>
      </div>

      {/* Dual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Mission Card */}
        <div className="relative bg-[#133e2b] text-white rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-lg border border-[#1b4e36] flex flex-col justify-between group hover:shadow-2xl transition-all duration-300">
          {/* Subtle lime glow accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8f269]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 bg-[#c8f269] text-[#133e2b] px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-6 shadow-xs">
              <svg className="w-3.5 h-3.5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <span>Our Mission</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-headline tracking-tight text-white mb-4">
              Simplifying Technology Education for Everyone
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
              Our mission is to simplify technology education and make practical, career-oriented IT training accessible to aspiring professionals. We strive to equip learners with technical skills, problem-solving abilities, project experience, and professional confidence to prepare them for evolving career opportunities.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-[#c8f269] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#c8f269] animate-pulse"></span>
            <span>Committed to practical capability & career impact</span>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative bg-[#f4f3ec] text-[#133e2b] rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-xs border border-[#e2dfd5] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
          {/* Accent light sphere */}
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#c8f269]/20 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 bg-[#133e2b] text-[#c8f269] px-3.5 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase mb-6 shadow-xs">
              <svg className="w-3.5 h-3.5 text-[#c8f269]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Our Vision</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-headline tracking-tight text-[#133e2b] mb-4">
              The Trusted Destination for Tech Learning
            </h3>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Our vision is to become a trusted destination for technology learning and skill development by nurturing capable, confident, and industry-ready professionals who can contribute meaningfully to the digital world.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-300/60 flex items-center gap-3 text-xs text-[#456b14] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#456b14]"></span>
            <span>Nurturing confident, industry-ready professionals</span>
          </div>
        </div>

      </div>
    </section>
  );
}
