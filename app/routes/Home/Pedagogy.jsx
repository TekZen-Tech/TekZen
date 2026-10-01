import React from 'react';

const steps = [
  {
    number: "01",
    title: "Learn",
    description: "Unpack internal runtime behavior, compiler nuances, and architecture fundamentals without superficial shortcuts.",
    footer: "First Principles Focus"
  },
  {
    number: "02",
    title: "Practice",
    description: "Solve rigorous algorithmic edge cases daily on custom IDE tests, debugging live race conditions and memory leaks.",
    footer: "300+ Solved Challenges"
  },
  {
    number: "03",
    title: "Implement",
    description: "Build full-scale enterprise software in team pods with GitHub actions, code reviews, and Dockerized cloud deploys.",
    footer: "Production Repositories"
  },
  {
    number: "04",
    title: "Get Hired",
    description: "Resume restructuring, portfolio auditing, mock technical rounds, and direct hiring partner referrals in MP & NCR.",
    footer: "Career Assistance"
  }
];

const technologies = [
  "Python",
  "React 19",
  "Java 21",
  "Spring Boot 3",
  "Next.js 15",
  "C / C++ 20",
  "Docker",
  "PostgreSQL",
  "Redis",
  "FastAPI",
  "AWS Cloud",
  "Git & GitHub"
];

function Pedagogy() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Top Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#133e2b]/80 block">
          THE TEKZEN PEDAGOGY
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#133e2b] tracking-tight leading-[1.12] mt-3 max-w-3xl mx-auto">
          4 Steps from beginner to hired engineer.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
          A disciplined sprint structure tested across cohorts to transform foundational logic into job-ready autonomy.
        </p>
      </div>

      {/* 4 Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-10 sm:mb-14">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-xs border border-neutral-200/60 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-[#a6e22e] tracking-tight block">
                {step.number}
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-3 mb-2 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="border-t border-neutral-100 pt-4 mt-6">
              <span className="text-xs font-bold text-neutral-800 tracking-tight block">
                {step.footer}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Technologies & Frameworks Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-neutral-200/60 text-center shadow-xs">
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-6">
          TECHNOLOGIES &amp; FRAMEWORKS YOU WILL MASTER HANDS-ON
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-[#f3f3ea] hover:bg-[#e7e7de] text-[#133e2b] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-200/40 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pedagogy;