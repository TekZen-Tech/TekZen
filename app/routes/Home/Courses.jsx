import React from "react";

const data = [
  {
    id: "c-cpp-systems-mastery",
    title: "C & C++ Systems Mastery",
    duration: "2.5 Months",
    badge: "Free 3-Day Demo",
    description:
      "Pointers, memory management, low-level data structures, OOP internals, and STL under the hood.",
    capstoneProject: "Custom Memory Allocator & Cache-Oblivious B-Tree",
    footerNote: "Batch size: 15 max",
    isFeatured: false,
    badgeType: "demo",
    blobBg: "bg-[#eef8ce]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21m3.75-18v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H8.25A2.25 2.25 0 006 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    id: "modern-web-development",
    title: "Modern Web Development",
    duration: "3 Months",
    badge: "Frontend Core",
    description:
      "React 19, Tailwind CSS, Modern ESNext, State machines, Component design systems, and Web performance.",
    capstoneProject: "Collaborative Real-time Canvas & UI Workspace",
    footerNote: "Interactive live labs",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#f4efe0]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
    ),
  },
  {
    id: "full-stack-development-mern-nextjs",
    title: "Full Stack Development (MERN + Next.js)",
    duration: "6 Months",
    badge: "Flagship",
    description:
      "Production architecture with Next.js App Router, Node.js microservices, PostgreSQL, Prisma, and Docker deployments.",
    capstoneProject: "Multi-tenant SaaS Platform with Webhooks & Auth",
    footerNote: "Placement guaranteed track",
    isFeatured: false,
    badgeType: "flagship",
    blobBg: "bg-[#DDEFE4]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5h10.5a4.5 4.5 0 004.5-4.5 4.5 4.5 0 00-4.5-4.5c-.88 0-1.7.26-2.39.71A6 6 0 006 7.5a6 6 0 00-3.75 8.25z" />
      </svg>
    ),
  },
  {
    id: "data-science-ai-ml",
    title: "Data Science & AI / ML",
    duration: "6 Months",
    badge: "High Demand",
    description:
      "Python, NumPy, Pandas, Scikit-Learn, PyTorch, RAG Pipelines, LangChain, and fine-tuning Open-Source LLMs.",
    capstoneProject: "Enterprise Semantic Search Copilot & Vector Index",
    footerNote: "GPU Cloud Access included",
    isFeatured: false,
    badgeType: "demo",
    blobBg: "bg-[#E7E7D9]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: "java-enterprise-full-stack",
    title: "Java Enterprise Full Stack",
    duration: "6 Months",
    badge: "Enterprise Core",
    description:
      "Core Java 21, Spring Boot 3, Hibernate JPA, Kafka event messaging, Microservices architecture, and Angular/React frontends.",
    capstoneProject: "Distributed High-Throughput Core Banking Ledger",
    footerNote: "MNC & Banking readiness",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#E7DAC3]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5" />
      </svg>
    ),
  },
  {
    id: "python-full-stack-backend",
    title: "Python Full Stack & Backend",
    duration: "5 Months",
    badge: "Backend Track",
    description:
      "FastAPI, Django REST, Celery distributed tasks, Redis caching, Postgres optimizations, and Autonomous AI Agent integrations.",
    capstoneProject: "Real-time Analytics Engine with Async Workers",
    footerNote: "Async IO & APIs",
    isFeatured: false,
    badgeType: "standard",
    blobBg: "bg-[#DCF668]",
    icon: (
      <svg className="w-4 h-4 text-[#133e2b] group-hover:text-[#c8f269] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function Courses({ heading, subheading, title,handleDetailView }) {
  const handleCourseClick = (course) => {
    handleDetailView(course);
  };
  return (
    <section id="courses" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-8 flex flex-col">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#133e2b]">
            {heading ?? "CURATED ENGINEERING TRACKS"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#133e2b] font-headline leading-[1.15] tracking-tight mt-3">
            {subheading ?? "Engineered for depth, not superficial certificates."}
          </h2>
        </div>

        <div className="lg:col-span-5 flex items-end">
          <p className="text-base sm:text-lg text-neutral-600 font-body leading-relaxed">
            {title ?? "Every track is constructed around verifiable GitHub proof-of-work. Choose your specialization and master the mechanics."}
          </p>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {data.map((course) => {
          return (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="group relative p-6 sm:p-7 rounded-[2rem] border bg-white hover:bg-[#133e2b] text-neutral-900 border-neutral-200/80 hover:border-[#133e2b] shadow-xs hover:shadow-2xl transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Top-Right Corner Accent Blob */}
              <div
                className={`absolute top-0 right-0 w-36 sm:w-44 h-32 sm:h-36 ${course.blobBg} group-hover:bg-[#1b4d36] rounded-tr-[2rem] rounded-bl-[4.5rem] transition-colors duration-300 pointer-events-none z-0`}
              />

              {/* Card Top Content */}
              <div className="relative z-10">
                {/* Badges Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {/* Duration Badge */}
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#f2ece0] text-[#133e2b] group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {course.duration}
                  </span>

                  {/* Special Tag Badge */}
                  {course.badgeType === "demo" ? (
                    <span className="bg-[#c8f269] text-[#133e2b] px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#133e2b] inline-block" />
                      <span>{course.badge}</span>
                    </span>
                  ) : course.badgeType === "flagship" ? (
                    <span className="bg-[#133e2b] text-[#c8f269] group-hover:bg-[#c8f269] group-hover:text-[#133e2b] px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors">
                      {course.badge}
                    </span>
                  ) : (
                    <span className="bg-white/80 group-hover:bg-white/20 text-[#133e2b] group-hover:text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-2xs">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-headline mt-4 mb-3 tracking-tight leading-snug text-[#133e2b] group-hover:text-[#c8f269] transition-colors">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-xs sm:text-sm font-body leading-relaxed mb-2 text-neutral-600 group-hover:text-neutral-200 transition-colors">
                  {course.description}
                </p>
              </div>

              {/* Card Bottom Area (Capstone + Footer) */}
              <div className="relative z-10 border-t pt-2 border-neutral-300 group-hover:border-white/10 transition-colors">
                {/* Capstone Project Label */}
                <span className="block text-[10px] sm:text-xs font-extrabold tracking-wider uppercase mb-2 text-neutral-500 group-hover:text-[#88b593] transition-colors">
                  CAPSTONE PROJECT
                </span>

                {/* Capstone Project Box */}
                <div className="p-3.5 rounded-2xl border bg-[#f5f2e9] border-[#e8e4d8] text-[#133e2b] group-hover:bg-[#1a4a35] group-hover:border-[#255b42] group-hover:text-white transition-all duration-300 flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-[#133e2b] flex items-center justify-center shrink-0 transition-colors">
                    {course.icon}
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-semibold leading-tight text-[#133e2b] group-hover:text-white transition-colors">
                    {course.capstoneProject}
                  </span>
                </div>

                {/* Footer Note & Action Button */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-medium text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    {course.footerNote}
                  </span>

                  <button className="bg-[#c8f269] hover:bg-[#bbf264] text-[#133e2b] px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-sm hover:scale-105 transition-all cursor-pointer shrink-0">
                    <span>Enquire Now</span>
                    <span className="font-extrabold text-sm">›</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}