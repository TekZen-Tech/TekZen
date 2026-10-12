import React from "react";

export default function AboutPrinciples() {
  const reasons = [
    {
      pill: "Curriculum",
      pillBg: "bg-[#eaf8cc] text-[#133e2b]",
      title: "Industry-Relevant Learning",
      description:
        "Our training focuses on practical concepts, commonly used tools, and skills directly relevant to software development, data analytics, and emerging technologies.",
      footerNote: "Modern stacks & real developer tools",
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      pill: "Methodology",
      pillBg: "bg-[#f0f4ea] text-neutral-700",
      title: "Hands-On Practical Approach",
      description:
        "Learners reinforce concepts through continuous coding exercises, structured lab assignments, live demonstrations, and project-based milestones.",
      footerNote: "Zero passive watching • Active coding",
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      pill: "Faculty",
      pillBg: "bg-[#eaf8cc] text-[#133e2b]",
      title: "Expert Guidance",
      description:
        "We provide clear explanations, practical guidance, and mentorship to help learners overcome technical challenges, debug errors, and deepen understanding.",
      footerNote: "Senior technical mentorship",
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
    },
    {
      pill: "Support",
      pillBg: "bg-[#f0f4ea] text-neutral-700",
      title: "Personalized Mentorship",
      description:
        "We encourage learners to ask questions freely, practice consistently, and seek individualized guidance tailored to their learning speed and career goals.",
      footerNote: "Doubt clearing & 1-on-1 feedback",
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.199a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      pill: "Flexibility",
      pillBg: "bg-[#eaf8cc] text-[#133e2b]",
      title: "Flexible Learning Opportunities",
      description:
        "Weekday and weekend batch options are available to suit the schedules of college students, fresh graduates, and working professionals.",
      footerNote: "Weekday & weekend batch schedules",
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ),
    },
    {
      pill: "Portfolio",
      pillBg: "bg-[#f0f4ea] text-neutral-700",
      title: "Project-Based Skill Development",
      description:
        "Our learning approach encourages learners to build functional projects that demonstrate their technical understanding, problem-solving abilities, and portfolio value.",
      footerNote: "Tangible projects to show recruiters",
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-4">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase bg-[#eef7db] px-4 py-1.5 rounded-full">
          WHY CHOOSE US
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-4">
          Why Choose Tekzen Technologies?
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 mt-3.5 leading-relaxed">
          We aim to bridge the gap between academic knowledge and practical industry requirements by helping learners build strong technical foundations and apply what they learn to solve real problems.
        </p>
      </div>

      {/* 6 Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-14">
        {reasons.map((r, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-[2rem] p-7 sm:p-8 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-[#f0f7e6] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {r.icon}
              </div>

              {/* Tag Pill */}
              <span className={`inline-block text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${r.pillBg}`}>
                {r.pill}
              </span>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#133e2b] mt-4 tracking-tight leading-snug">
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-3">
                {r.description}
              </p>
            </div>

            {/* Footer row with checkmark */}
            <div className="pt-6 mt-8 border-t border-neutral-100 flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border border-[#133e2b] flex items-center justify-center text-[10px] font-bold text-[#133e2b]">
                ✓
              </span>
              <span className="text-xs font-bold text-[#133e2b]">
                {r.footerNote}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
