import React from "react";

export default function AboutFlightPath() {
  const steps = [
    {
      num: "01",
      title: "Learn Foundations",
      description:
        "Master memory layouts, operating system primitives, POSIX calls, network protocols, and cryptographic handshakes.",
      tag: "Weeks 01–04 • Core Theory",
      isHighlighted: false,
      icon: (
        <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Practice Daily Builds",
      description:
        "Write miniature key-value stores, customized HTTP routers, and multi-threaded event buses under rigorous code reviews.",
      tag: "Weeks 05–08 • Raw Repetitions",
      isHighlighted: false,
      icon: (
        <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233l3.03-2.496a2.652 2.652 0 00-3.75-3.75l-2.496 3.03m-.784 3.216l-3.216.784" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Implement Production Ships",
      description:
        "Deploy containerized microservices to cloud infrastructure, configure CI/CD automations, and manage telemetry tracing.",
      tag: "Weeks 09–14 • Live Production",
      isHighlighted: false,
      icon: (
        <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m0 0L3 18l3-3m0 0l-3 3" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Get Hired Senior Bench",
      description:
        "Enter private interview pipelines with enterprise partners, defended by deep GitHub proof-of-work histories and system whiteboards.",
      tag: "Outcome • Fellowship Placement",
      isHighlighted: true,
      icon: (
        <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-6">
      <div className="bg-[#FAF8F5] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-xs">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase">
            THE FELLOWSHIP FLIGHT PATH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-2">
            A 4–Phase Battle-Tested Progression
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-3 max-w-xl">
            From zero command line intimidation to leading full-scale technical deploys.
          </p>
        </div>

        {/* 4 Flight Path Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-[2rem] p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
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
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-headline text-[#133e2b] mt-4">
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

      </div>
    </section>
  );
}
