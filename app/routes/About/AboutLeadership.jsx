import React from "react";

export default function AboutLeadership() {
  const founders = [
    {
      name: "Priyanshu Joshi",
      role: "Managing Director & Career Architect",
      subRole: "Director of Incubator Strategy",
      badgeBg: "bg-[#c8f269] text-[#133e2b]",
      image: "/priyanshu_joshi.jpg",
      bio: "Priyanshu anchors the fellowship's engineering culture and professional outcome pipelines. He has forged hiring syndicates with 40+ high-growth tech firms across Bengaluru, Pune, and international remote hubs, building zero-compromise bridges between apprentice capability and top engineering payrolls.",
      domains: ["Fellowship Governance", "Talent Syndicates"],
    },
    {
      name: "Aditya Sharma",
      role: "Chief Systems Architect & Lab Dean",
      subRole: "Cloud & Systems R&D",
      badgeBg: "bg-[#133e2b] text-[#c8f269]",
      image: "/aditya_sharma.jpg",
      bio: "With 10+ years engineering high-throughput microservices, telemetry backends, and fault-tolerant infrastructure, Aditya curates the technical syllabus. He personally conducts weekly architectural triage sessions where fellows tear down production incidents and design resilient system fallbacks.",
      domains: ["Distributed Consensus", "Cloud Kernels"],
    },
  ];

  const mentors = [
    {
      name: "Rohan Verma",
      track: "Cloud & DevOps Track",
      trackBg: "bg-[#eaf8cc] text-[#133e2b]",
      role: "Lead Full-Stack & Cloud Infrastructure",
      image: "/rohan_verma.jpg",
      bio: "Oversees runtime reliability, container orchestration, and server-side concurrency. Rohan guides fellows through writing custom ingress controllers, asynchronous worker queues, and microservice meshes in production clusters.",
      stack: ["Golang", "Node.js", "Kubernetes", "Kafka"],
    },
    {
      name: "Ananya Roy",
      track: "AI Systems Track",
      trackBg: "bg-[#faeede] text-[#133e2b]",
      role: "Senior AI Systems Engineer & LLMOps Lead",
      image: "/ananya_roy.jpg",
      bio: "Specializes in large language model serving pipelines, latency minimization, and vector index architectures. Ananya ensures fellows master embedding orchestration, model evaluation harnesses, and enterprise data sanitization.",
      stack: ["PyTorch", "LLMOps", "Vector DBs (Qdrant)", "FastAPI"],
    },
  ];

  return (
    <section id="leadership" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-8">
      
      {/* 1. Co-Founders Subsection matching Image 3 (Top) */}
      <div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div>
            <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase">
              LEADERSHIP & FOUNDING VISION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-3 max-w-xl">
              Mentorship From Those Who Built Systems
            </h2>
          </div>
          <p className="text-neutral-600 text-sm max-w-sm leading-relaxed">
            Tekzen was founded by practicing engineering practitioners who run live client systems, not corporate administrators or slide instructors.
          </p>
        </div>

        {/* 2 Co-Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Photo */}
              <div className="w-32 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-neutral-100">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Founder Details */}
              <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider ${f.badgeBg}`}>
                      CO-FOUNDER
                    </span>
                    <span className="text-xs text-neutral-400 font-semibold">
                      {f.subRole}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-headline text-[#133e2b] mt-3">
                    {f.name}
                  </h3>
                  <p className="text-xs font-bold text-[#133e2b] mt-0.5">
                    {f.role}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-3">
                    {f.bio}
                  </p>
                </div>

                {/* Domain tags */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-neutral-400 mr-1">
                    Domain:
                  </span>
                  {f.domains.map((dom, dIdx) => (
                    <span
                      key={dIdx}
                      className="bg-[#ece9e0] text-neutral-700 text-[10px] font-bold px-3 py-1 rounded-full"
                    >
                      {dom}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Active Staff Engineers Subsection matching Image 3 (Bottom) */}
      <div className="mt-20">
        <div>
          <span className="text-xs font-bold text-[#628522] tracking-[0.2em] uppercase">
            ACTIVE STAFF ENGINEERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-2">
            The Lead Mentors in the Terminal Daily
          </h2>
        </div>

        {/* 2 Staff Mentor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-8">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-neutral-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Photo */}
              <div className="w-32 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden shrink-0 shadow-sm bg-neutral-100">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Mentor Details */}
              <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                  <span className={`inline-block text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider ${m.trackBg}`}>
                    {m.track}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold font-headline text-[#133e2b] mt-2.5">
                    {m.name}
                  </h3>
                  <p className="text-xs font-bold text-[#133e2b] mt-0.5">
                    {m.role}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-3">
                    {m.bio}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-5 pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-2">
                  {m.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#ece9e0] text-[10px] font-semibold text-neutral-700 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
