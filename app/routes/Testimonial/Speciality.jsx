import React from "react";

const hiringPartners = [
  { name: "ScaleLabs", category: "Cloud Infrastructure" },
  { name: "FinTech Core", category: "London & Bengaluru" },
  { name: "InfoBeans", category: "Enterprise Software" },
  { name: "CloudScale", category: "Kubernetes Ops" },
  { name: "Persistent", category: "AI R&D Benches" },
  { name: "Razorpay Eco", category: "Fintech Rail Builders" },
];

export default function Speciality() {
  return (
    <section className="relative w-full bg-[#fbfaf5] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Full Dark Green Feature Card */}
        <div className="bg-[#0c2a1c] rounded-[2.25rem] sm:rounded-[2.75rem] p-7 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden border border-emerald-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Text & Audit Standards */}
            <div className="lg:col-span-5">
              <span className="bg-white/10 backdrop-blur-xs text-[#c8f269] px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 mb-4 border border-white/10">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span>Production Audit Standard</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                We Don't Grade Homework. We Review Production Code.
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                This is how a Tekzen apprentice learns. Every capstone is submitted via Git, tested under simulated concurrent loads, and scrutinized line-by-line by former Tier-1 principal engineers.
              </p>

              <div className="space-y-3 font-medium text-xs sm:text-sm text-gray-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#c8f269] text-[#0c2a1c] flex items-center justify-center font-bold text-xs shrink-0">
                    ✓
                  </div>
                  <span>Memory-leak profiling using Valgrind and eBPF kernel probes</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#c8f269] text-[#0c2a1c] flex items-center justify-center font-bold text-xs shrink-0">
                    ✓
                  </div>
                  <span>Zero toleration for unhandled promise rejections or thread locks</span>
                </div>
              </div>
            </div>

            {/* Right Column: Git Diff & Code Review Terminal */}
            <div className="lg:col-span-7">
              <div className="bg-[#07140e] border border-emerald-900/80 rounded-3xl p-4 sm:p-6 font-mono text-xs text-gray-200 shadow-2xl relative overflow-hidden">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-emerald-900/50">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-[11px] text-gray-400 pl-2 font-sans font-medium hidden sm:inline">
                      pr-review-allocator-v2.cpp &mdash; Tekzen Atelier Git
                    </span>
                  </div>

                  <div className="text-[10px] sm:text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-0.5 rounded-md border border-yellow-500/20">
                    STATUS: CHANGES_REQUESTED
                  </div>
                </div>

                {/* Code Snippet */}
                <div className="space-y-1.5 text-[11px] leading-relaxed">
                  <div className="text-gray-500">41 template &lt;typename T&gt;</div>
                  <div className="text-gray-300">42 class LockFreeRingBuffer &#123;</div>
                  
                  {/* Deletion Line */}
                  <div className="bg-red-950/70 text-red-300 px-3 py-1.5 rounded-md border-l-2 border-red-500 flex items-center overflow-x-auto">
                    <span className="select-none text-red-500 pr-2">43 -</span>
                    <code>std::atomic&lt;size_t&gt; head_&#123;0&#125;;</code>
                  </div>

                  {/* Addition Line */}
                  <div className="bg-emerald-950/80 text-emerald-300 px-3 py-1.5 rounded-md border-l-2 border-emerald-500 flex items-center overflow-x-auto">
                    <span className="select-none text-emerald-500 pr-2">43 +</span>
                    <code>
                      alignas(64) std::atomic&lt;size_t&gt; head_&#123;0&#125;; <span className="text-emerald-500">// Cache-line padding</span>
                    </code>
                  </div>
                </div>

                {/* Staff Architect Comment Box */}
                <div className="bg-[#0d2218] border border-emerald-800/80 rounded-2xl p-3.5 sm:p-4 mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[#c8f269] font-bold text-xs sm:text-sm">
                      Vikram R. (Staff Architect @ Tekzen)
                    </span>
                    <span className="text-gray-400 text-[10px]">14 hours ago</span>
                  </div>

                  <p className="text-gray-300 text-[11px] sm:text-xs leading-relaxed font-sans">
                    “Aditya, your buffer works in single-core benchmarks, but under 16 concurrent threads you will experience severe false-sharing degradation across CPU L1/L2 caches. Add explicit <code className="text-[#c8f269] bg-black/40 px-1 py-0.5 rounded">alignas(hardware_destructive_interference_size)</code>. Benchmark again with Google Benchmark.”
                  </p>
                </div>

                {/* Audit Passed Banner */}
                <div className="bg-[#071a11] text-[#c8f269] border border-emerald-800/60 rounded-xl px-4 py-2.5 text-[10px] sm:text-11px font-mono font-bold flex items-center gap-2 mt-3">
                  <svg className="w-4 h-4 text-[#c8f269] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span>
                    Audit Passed after Revision 3 (0.42ns median latency verified) <span className="text-white opacity-80 uppercase">MERGED TO MAIN</span>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Hiring Partners Section */}
        <div className="mt-14 sm:mt-20">
          <p className="text-[11px] font-extrabold text-neutral-400 tracking-widest text-center uppercase mb-6 sm:mb-8">
            ENGINEERING TEAMS HIRING DIRECT FROM OUR INDORE ATELIER
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {hiringPartners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-[#f4f3ec] border border-[#e5e3d8] rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-center hover:shadow-xs transition-all flex flex-col justify-center items-center"
              >
                <h4 className="text-base sm:text-lg font-extrabold text-[#133e2b] tracking-tight">
                  {partner.name}
                </h4>
                <p className="text-[11px] text-neutral-500 font-medium mt-0.5">
                  {partner.category}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}