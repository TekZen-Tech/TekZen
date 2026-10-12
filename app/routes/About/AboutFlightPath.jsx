import React from "react";

export default function AboutFlightPath() {
  const steps = [
    {
      num: "01",
      stepName: "Learn",
      title: "Understand Fundamentals",
      description:
        "Understand fundamental concepts, core programming principles, memory behavior, logic building, and essential developer tools.",
      tag: "Phase 01 • Concepts & Principles",
      isHighlighted: false,
      icon: (
        <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      num: "02",
      stepName: "Practice",
      title: "Strengthen Knowledge",
      description:
        "Strengthen knowledge through progressive coding drills, guided assignments, laboratory exercises, and mentor code reviews.",
      tag: "Phase 02 • Coding Drills & Exercises",
      isHighlighted: false,
      icon: (
        <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      num: "03",
      stepName: "Build",
      title: "Develop Practical Projects",
      description:
        "Apply concepts by building practical applications, integrating databases, working with datasets, and completing capstone projects.",
      tag: "Phase 03 • Real-World Applications",
      isHighlighted: false,
      icon: (
        <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>
      ),
    },
    {
      num: "04",
      stepName: "Grow",
      title: "Portfolio & Career Confidence",
      description:
        "Improve technical confidence, build an impressive project portfolio, prepare for interviews, and explore professional opportunities.",
      tag: "Phase 04 • Portfolio & Opportunities",
      isHighlighted: true,
      icon: (
        <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-6">
      <div className="bg-[#FAF8F5] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-xs">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase bg-[#eef7db] px-4 py-1.5 rounded-full">
            OUR LEARNING APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-4">
            Learn → Practice → Build → Grow
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3.5 leading-relaxed">
            At Tekzen Technologies, we follow a structured learning journey designed to help learners progress from basic concepts to practical implementation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2rem] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                s.isHighlighted
                  ? "border-2 border-[#b0d83b] ring-4 ring-[#b0d83b]/15"
                  : "border border-neutral-200/90"
              }`}
            >
              <div>
                {/* Number & Icon header row */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#133e2b] font-headline">
                    {s.num}
                  </span>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center ${s.isHighlighted ? "bg-[#c8f269]" : "bg-neutral-100"}`}>
                    {s.icon}
                  </div>
                </div>

                {/* Step Name Tag */}
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#456b14] mt-3">
                  Step {s.num} • {s.stepName}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold font-headline text-[#133e2b] mt-1">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2.5">
                  {s.description}
                </p>
              </div>

              {/* Tag bottom row */}
              <div
                className={`pt-4 mt-8 border-t text-[11px] font-bold ${
                  s.isHighlighted
                    ? "border-[#b0d83b]/60 text-[#133e2b]"
                    : "border-neutral-200/70 text-neutral-500"
                }`}
              >
                {s.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-6 border-t border-neutral-200/80 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            💡 This approach encourages consistent practice, independent thinking, and continuous improvement.
          </p>
        </div>

      </div>
    </section>
  );
}
