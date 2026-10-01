import React from 'react';

const negativePoints = [
  "Batches of 80–120 students listening passively to theory slides.",
  "Copy-pasted To-Do apps that get immediately flagged and rejected by tech recruiters.",
  "Zero Git workflows, code reviews, pull requests, or debug terminal discipline.",
  "Generic certificate with no verifiable GitHub commit history."
];

const positivePoints = [
  "Strict cap of 15 developers per batch for tailored 1–on–1 code critiques.",
  "Production capstones hosted on cloud infrastructure with live staging domains.",
  "Daily GitHub Pull Requests audited by veteran software architects.",
  "Direct engineering referrals and bespoke mock technical interviews."
];

function Different() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-[#f5f5ee] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-neutral-200/50">
        {/* Header Label */}
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#133e2b]/80 block">
          THE TEKZEN DIFFERENCE
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15] mt-3 mb-8 sm:mb-12 max-w-2xl">
          Why mass coaching institutes fail software engineers.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Card - Mass-Lecture Trap */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs border border-neutral-200/60 flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-neutral-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#fde8e8] text-[#e53e3e] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                  The Generic Mass-Lecture Trap
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-5">
                {negativePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#fde8e8] text-[#e53e3e] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-[15px] text-neutral-600 font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card - Tekzen Engineering Atelier */}
          <div className="bg-[#133e2b] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-[#1b4a35] flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-white/10">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c8f269] text-[#133e2b] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  The Tekzen Engineering Atelier
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-5">
                {positivePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-[#c8f269] text-[#133e2b] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-[15px] text-white/90 font-medium leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Internship CTA Banner */}
      <div className="mt-8 sm:mt-12 bg-[#103423] relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-[#1b4a35] text-white shadow-xl">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8f269]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <span className="inline-block border border-[#c8f269]/40 bg-[#c8f269]/10 text-[#c8f269] text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full uppercase mb-5">
              OPEN FOR COLLEGE STUDENTS &amp; FRESH GRADS
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              Kickstart your career <br className="hidden sm:inline" />
              <span className="text-[#c8f269]">with real industry</span> experience.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mt-4 mb-8 max-w-xl">
              Bridge the gap between college theory and corporate expectations. Work directly on production codebases, write unit tests, participate in daily standups, and earn a verified industry internship credential.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#c8f269] text-[#c8f269] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span>Experience Certificate</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#c8f269] text-[#c8f269] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span>Live Staging Projects</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#c8f269] text-[#c8f269] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span>Senior Mentor Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 sm:items-center lg:items-stretch min-w-[220px]">
            <button className="bg-[#c8f269] hover:bg-[#b8e855] text-[#133e2b] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md transition-all text-center cursor-pointer">
              Apply for Internship
            </button>

            <button className="bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer">
              <svg className="w-5 h-5 text-[#c8f269]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <span>WhatsApp Mentor</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Different;
