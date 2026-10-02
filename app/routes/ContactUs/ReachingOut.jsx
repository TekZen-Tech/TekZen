import React from "react";

const steps = [
  {
    number: "01",
    badgeBg: "bg-[#133e2b] text-[#c8f269]",
    title: "15-Min Technical Profiling",
    description:
      "No generic sales scripts. An engineering tutor reviews your past projects, language fluency, and current graduation timeline.",
    highlight: "Target track recommendation",
  },
  {
    number: "02",
    badgeBg: "bg-[#c8f269] text-[#133e2b]",
    title: "3-Day Terminal Pass",
    description:
      "Experience our zero-slides, 100% production code environment. Sit at a dual-monitor rig, push live Git commits, and attend live labs.",
    highlight: "Free lab access voucher",
  },
  {
    number: "03",
    badgeBg: "bg-[#ebd9c1] text-[#133e2b]",
    title: "Personalized Blueprint",
    description:
      "Receive an actionable quarter-by-quarter learning roadmap tailored to competitive product companies or offshore enterprise positions.",
    highlight: "No obligation to enroll",
  },
];

export default function ReachingOut() {
  return (
    <section className="relative w-full bg-[#fbfaf5] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto bg-[#f4f3ec] rounded-[2.25rem] sm:rounded-[2.75rem] p-7 sm:p-12 lg:p-14 border border-[#e5e3d8] shadow-xs">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4">
          <div className="max-w-2xl">
            <span className="text-[11px] sm:text-xs font-extrabold text-[#5c7a1e] tracking-widest uppercase block mb-2">
              TRANSPARENT PROTOCOL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15]">
              What Happens When You Reach Out?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed font-normal lg:text-left">
            We operate with engineering rigor: no aggressive telecalling, strictly pedagogical guidance.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 sm:mt-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-7 sm:p-8 border border-gray-100/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div
                  className={`w-12 h-12 rounded-full ${step.badgeBg} flex items-center justify-center text-base font-extrabold mb-6 shadow-2xs group-hover:scale-105 transition-transform`}
                >
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-extrabold text-[#133e2b] tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bottom Highlight Checkmark */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#5c7a1e]">
                <div className="w-4 h-4 rounded-full bg-[#f4f3ec] flex items-center justify-center text-[#5c7a1e] shrink-0 border border-emerald-200">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}