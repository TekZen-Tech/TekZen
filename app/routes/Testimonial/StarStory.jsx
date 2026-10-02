import React, { useState } from "react";

const categories = [
  { id: "all", label: "All Stories (68)" },
  { id: "systems", label: "Systems & C++ (16)" },
  { id: "fullstack", label: "Fullstack & Web (24)" },
  { id: "cloud", label: "Cloud & DevOps (14)" },
  { id: "ai", label: "AI & Data Systems (8)" },
  { id: "non-cs", label: "Non-CS Switchers (18)" },
];

const stories = [
  {
    id: 1,
    name: "Aditya Sharma",
    avatar: "/aditya_sharma.jpg",
    categoryKey: "systems",
    isNonCs: true,
    tag: "NON-CS TO CORE SYSTEMS",
    background: "Mechanical Graduate (2022) → Systems Engineer at ScaleLabs",
    priorComp: "₹3.2 LPA (TCS Ninja Offer)",
    verifiedPlacement: "₹18.0 LPA",
    cohort: "Cohort #14 Fellow",
    quote:
      "“Online courses told me to clone an e-commerce cart. At Tekzen Indore, my mentor tore down my concurrency model in C++ until I learned lock-free ring buffers. That single Capstone got me grilled for 2 hours by ScaleLabs architects — and closed an ₹18 LPA offer on the spot.”",
    capstoneTitle: "LSM-Tree Key-Value Engine with Bloom Filter Buffers",
    capstoneDesc:
      "Engineered in Modern C++20 with custom mmap allocator and WAL journaling.",
    prNum: "PR #42",
    labHours: "640 Hours In-Person",
    heatmap: [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1],
  },
  // {
  //   id: 2,
  //   name: "Ananya Roy",
  //   avatar: "/ananya_roy.jpg",
  //   categoryKey: "fullstack",
  //   isNonCs: false,
  //   tag: "FULLSTACK ARCHITECTURE",
  //   background: "B.Tech ECE (2023) → Senior Fullstack Engineer at TechCorp UK",
  //   priorComp: "₹4.5 LPA (Regional Agency)",
  //   verifiedPlacement: "₹22.0 LPA",
  //   cohort: "Cohort #12 Fellow",
  //   quote:
  //     "“I went from basic React hooks to building real-time collaborative canvas engines using Rust WebAssembly and CRDTs. The peer code reviews at the Indore Atelier gave me senior-level confidence.”",
  //   capstoneTitle: "Distributed Collaborative Canvas with CRDT Synchronization",
  //   capstoneDesc:
  //     "Built with React 19, Rust WASM, and WebSockets with zero-latency optimistic updates.",
  //   prNum: "PR #88",
  //   labHours: "720 Hours In-Person",
  //   heatmap: [2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 2],
  // },
  // {
  //   id: 3,
  //   name: "Rohan Verma",
  //   avatar: "/rohan_verma.jpg",
  //   categoryKey: "cloud",
  //   isNonCs: false,
  //   tag: "DEVOPS & INFRASTRUCTURE",
  //   background: "Tier-3 CS Graduate → Site Reliability Engineer at CloudScale",
  //   priorComp: "₹3.8 LPA (Offshore IT)",
  //   verifiedPlacement: "₹24.0 LPA",
  //   cohort: "Cohort #11 Fellow",
  //   quote:
  //     "“At Tekzen, we deployed Kubernetes operators directly to bare-metal servers. Demystifying Linux eBPF kernel hooks during capstone week was what separated me from thousands of applicants.”",
  //   capstoneTitle: "eBPF-Powered Kubernetes Pod Network Monitor & Telemetry",
  //   capstoneDesc:
  //     "Written in Go & C with eBPF probes for zero-overhead packet inspection.",
  //   prNum: "PR #104",
  //   labHours: "580 Hours In-Person",
  //   heatmap: [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
  // },
];

export default function StarStory() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStories = stories.filter((story) => {
    const matchesCategory =
      selectedCategory === "all" ||
      (selectedCategory === "non-cs" && story.isNonCs) ||
      story.categoryKey === selectedCategory;

    const matchesSearch =
      story.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.background.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.capstoneTitle.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full bg-[#fbfaf5] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Search Bar Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <span className="text-[11px] sm:text-xs font-extrabold text-[#5c7a1e] tracking-widest uppercase block mb-1.5">
              EMPIRICAL TRAJECTORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] tracking-tight">
              Real Stories. Real Commits.
            </h2>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Filter by company, stack, or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200/90 shadow-2xs py-3 pl-11 pr-4 rounded-full text-xs sm:text-sm text-[#133e2b] placeholder-gray-400 outline-none focus:border-[#133e2b] transition-all"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Filter Category Pills Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#133e2b] text-white shadow-xs"
                    : "bg-[#f4f3ec] text-[#133e2b] hover:bg-[#e8e7df]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Stories Cards List */}
        <div className="space-y-8">
          {filteredStories.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 text-center text-neutral-500 text-sm">
              No matching fellow stories found for "{searchQuery}".
            </div>
          ) : (
            filteredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-[2.25rem] sm:rounded-[2.75rem] p-6 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/40"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  
                  {/* Left Column: Fellow Profile & Offer Details */}
                  <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
                    {/* Avatar Photo with Lime Ring */}
                    <div className="relative mb-4">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover p-1 bg-[#c8f269] shadow-md"
                      />
                    </div>

                    {/* Tag Badge */}
                    <span className="bg-[#c8f269] text-[#133e2b] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                      {story.tag}
                    </span>

                    {/* Fellow Name */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#133e2b] tracking-tight mb-1">
                      {story.name}
                    </h3>

                    {/* Background Tagline */}
                    <p className="text-xs sm:text-sm text-neutral-500 font-medium mb-6">
                      {story.background}
                    </p>

                    {/* Offer Comparison Box */}
                    <div className="bg-[#f7f6f0] rounded-2xl p-4 space-y-3 w-full border border-gray-100">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-500 font-medium">Prior Compensation</span>
                        <span className="font-bold text-neutral-400 line-through">
                          {story.priorComp}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-gray-200/60">
                        <span className="font-bold text-[#133e2b]">Tekzen Verified Placement</span>
                        <span className="bg-[#133e2b] text-[#c8f269] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-2xs">
                          {story.verifiedPlacement}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Quote, Capstone & Heatmap */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Stars & Cohort */}
                    <div className="flex items-center gap-3">
                      <div className="flex text-[#133e2b] text-base font-bold">
                        ★★★★★
                      </div>
                      <span className="text-xs font-semibold text-neutral-400">
                        {story.cohort}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-base sm:text-lg text-[#133e2b] font-bold leading-relaxed italic">
                      {story.quote}
                    </blockquote>

                    {/* Capstone Box */}
                    <div>
                      <span className="text-[10px] font-extrabold text-neutral-400 tracking-widest uppercase mb-2 block">
                        CAPSTONE ARCHITECTURE BUILT
                      </span>
                      <div className="bg-[#f4f3ec] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#e5e3d8]">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">💾</span>
                            <h4 className="text-xs sm:text-sm font-bold text-[#133e2b]">
                              {story.capstoneTitle}
                            </h4>
                          </div>
                          <p className="text-xs text-neutral-600 mt-1">
                            {story.capstoneDesc}
                          </p>
                        </div>

                        <a
                          href="https://github.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white hover:bg-gray-50 text-[#133e2b] text-xs font-bold px-4 py-2.5 rounded-xl border border-gray-200 shrink-0 inline-flex items-center gap-1 shadow-2xs transition-all cursor-pointer"
                        >
                          <span>View {story.prNum}</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Attendance / Heatmap Visualizer */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-[11px] font-bold text-neutral-500 mb-2">
                        <span>Indore Lab Attendance & Code Rigor</span>
                        <span className="text-[#133e2b]">{story.labHours}</span>
                      </div>
                      
                      {/* Bar Heatmap */}
                      <div className="flex gap-1.5 h-3 w-full">
                        {story.heatmap.map((val, idx) => (
                          <div
                            key={idx}
                            className={`flex-1 rounded-xs ${
                              val === 2
                                ? "bg-[#133e2b]"
                                : val === 1
                                ? "bg-[#c8f269]"
                                : "bg-[#82c943]"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
