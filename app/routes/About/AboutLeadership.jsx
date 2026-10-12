import React from "react";
import { Link } from "react-router";

export default function AboutLeadership() {
  const mentorPillars = [
    {
      title: "Clear Explanations & Live Demos",
      badge: "Pedagogy",
      badgeBg: "bg-[#eaf8cc] text-[#133e2b]",
      description:
        "We break down abstract programming concepts, memory architectures, and data structures into intuitive, step-by-step logic through active live coding demonstrations.",
      points: [
        "Interactive syntax walkthroughs",
        "Visual concept breakdowns",
        "Zero-intimidation beginner friendly",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      title: "1-on-1 Debugging & Mentorship",
      badge: "Individual Focus",
      badgeBg: "bg-[#133e2b] text-[#c8f269]",
      description:
        "Every learner encounters coding roadblocks. Our mentors provide hands-on assistance to help you debug errors, understand compiler warnings, and write clean, structured code.",
      points: [
        "Dedicated doubt resolution time",
        "Code quality & logic reviews",
        "Paced to match your learning speed",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
    },
    {
      title: "Career & Portfolio Direction",
      badge: "Industry Ready",
      badgeBg: "bg-[#eaf8cc] text-[#133e2b]",
      description:
        "From organizing your code projects into clean GitHub repositories to preparing for technical interviews, we help you translate learning into tangible career readiness.",
      points: [
        "Real project showcase guidance",
        "Resume and portfolio enhancement",
        "Technical interview practice",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      ),
    },
  ];

  return (
    <section id="leadership" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-6">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
        <div>
          <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase bg-[#eef7db] px-4 py-1.5 rounded-full">
            MENTORSHIP & SUPPORT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-4 max-w-xl">
            Expert Guidance for Every Learner
          </h2>
        </div>
        <p className="text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
          At Tekzen Technologies, we believe that practical skills, continuous learning, and the right guidance can transform career aspirations into professional achievements.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
        {mentorPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[2.25rem] p-7 sm:p-9 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f7e6] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${pillar.badgeBg}`}>
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#133e2b] mb-3">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-100 space-y-2.5">
              {pillar.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2.5 text-xs font-semibold text-neutral-700">
                  <span className="w-4 h-4 rounded-full bg-[#f0f7e6] text-[#456b14] flex items-center justify-center text-[10px] font-extrabold shrink-0">
                    ✓
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Trust Stats Bar */}
      <div className="mt-12 bg-[#133e2b] rounded-[2rem] p-6 sm:p-10 text-white shadow-lg grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#c8f269]">Hands-On</p>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">Practical Coding First</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#c8f269]">1-on-1</p>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">Doubt Resolution</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#c8f269]">Small</p>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">Focused Batches</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#c8f269]">Real</p>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1">Portfolio Projects</p>
        </div>
      </div>

    </section>
  );
}
