import React from "react";

const statsData = [
  {
    bg: "bg-[#c8f269]",
    label: "15 Devs Max",
    sublabel: "High-touch atelier batching. Zero overcrowded lecture halls.",
    icon: (
      <svg className="w-5 h-5 text-[#133e2b]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.375h-14.25v-.375ZM15 19.5a5.625 5.625 0 0 0 4.875-5.625v-.375h-4.875v6Z" />
      </svg>
    ),
  },
  {
    bg: "bg-[#ebd9c1]",
    label: "100% Code",
    sublabel: "Day-one terminal sessions, branch workflows, and Git review cycles.",
    icon: (
      <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
      </svg>
    ),
  },
  {
    bg: "bg-[#c8f269]",
    label: "Zero Slides",
    sublabel: "Real production repos, Dockerized containers, and staged deployments.",
    icon: (
      <svg className="w-5 h-5 text-[#133e2b]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.5 10.5a7.5 7.5 0 0 0-14.542-2.14A5.25 5.25 0 0 0 1.5 13.5A5.25 5.25 0 0 0 6.75 18.75h12.75A4.5 4.5 0 0 0 24 14.25a4.5 4.5 0 0 0-4.5-3.75Zm-6.72 4.28a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5Z" />
      </svg>
    ),
  },
  {
    bg: "bg-[#ebd9c1]",
    label: "Placement Sprint",
    sublabel: "Direct referral pipelines, resume overhaul, and system design drills.",
    icon: (
      <svg className="w-5 h-5 text-[#133e2b]" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M7.5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-9Zm3 3.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm.75 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM7.5 16.5a3.75 3.75 0 0 1 7.5 0v.75h-7.5v-.75Z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-7 rounded-[1.75rem] border border-gray-200 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-start text-left"
          >
            {/* Top Icon Badge */}
            <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center shrink-0`}>
              {stat.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#133e2b] mt-5 mb-2 tracking-tight font-headline">
              {stat.label}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-body">
              {stat.sublabel}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}