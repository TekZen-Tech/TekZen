import React from "react";

export default function AboutPrinciples() {
  const principles = [
    {
      pill: "Hard Limit",
      pillBg: "bg-[#f0f4ea] text-neutral-600",
      title: "15–Seat Terminal Cap",
      description:
        "We reject massive cohort scaling. Every cohort strictly stops at 15 desks per batch, guaranteeing that lead architects review every single pull request, architectural decision, and schema design daily.",
      footerNote: "1:5 Architect to Fellow ratio",
      hasBlob: false,
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>
      ),
    },
    {
      pill: "Assessment",
      pillBg: "bg-[#eaf8cc] text-[#133e2b]",
      title: "Proof of Work over Papers",
      description:
        "Paper diplomas and multiple-choice quizzes are banned. Fellows graduate only after deploying live, resilient distributed software systems tested under synthetic stress loads and peer security audits.",
      footerNote: "Live domain deployments with telemetry",
      hasBlob: true,
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      pill: "Engineering Rigor",
      pillBg: "bg-[#f0f4ea] text-neutral-600",
      title: "Systems-First Thinking",
      description:
        "Frameworks and libraries come and go. We train you on foundational mental models: network sockets, memory allocation, consensus protocols, cache eviction, database internals, and concurrency constraints.",
      footerNote: "Language-agnostic computational depth",
      hasBlob: false,
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-6.5l-2 2m-7 7l-2 2m0-11l2 2m7 7l2 2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-8">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center">
        <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase">
          INSTITUTIONAL PRINCIPLES
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-3">
          Built on Principles, Not Trends
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 mt-3 max-w-2xl leading-relaxed">
          Three non-negotiables that separate our engineering cohorts from conventional bootcamps and university courses.
        </p>
      </div>

      {/* 3 Principles Cards Grid matching Image 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
        {principles.map((p, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-[2rem] p-7 sm:p-8 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top-Right Decorative Accent Blob for Card 2 */}
            {p.hasBlob && (
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#eef8ce] rounded-full pointer-events-none" />
            )}

            <div>
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-[#f0f7e6] flex items-center justify-center mb-6">
                {p.icon}
              </div>

              {/* Tag Pill */}
              <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${p.pillBg}`}>
                {p.pill}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold font-headline text-[#133e2b] mt-4 tracking-tight leading-snug">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-3">
                {p.description}
              </p>
            </div>

            {/* Footer row with checkmark */}
            <div className="pt-6 mt-8 border-t border-neutral-100 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-[#133e2b] flex items-center justify-center text-[10px] font-bold text-[#133e2b]">
                ✓
              </span>
              <span className="text-xs font-bold text-[#133e2b]">
                {p.footerNote}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
