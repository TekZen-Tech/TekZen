import React from "react";

const storiesData = [
  {
    name: "Pooja Verma",
    subtitle: "Tier-3 College → AI Infra Engineer",
    avatar: "/ananya_roy.jpg", // uses existing profile image
    avatarBg: "bg-[#133e2b] text-white",
    initials: "PV",
    company: "Persistent Systems Lab",
    salary: "₹16.5 LPA",
    quote:
      "“Building our own Distributed Vector Retrieval Engine from scratch was harder than 4 years of college. The mock code reviews mirrored senior staff sessions.”",
    capstoneIcon: "✳️",
    capstoneName: "Distributed Vector Retrieval Engine (Go + gRPC)",
  },
  {
    name: "Nikhil Solanki",
    subtitle: "B.Com Graduate → DevOps Architect",
    initials: "NS",
    avatarBg: "bg-[#133e2b] text-[#c8f269]",
    company: "CloudScale Labs",
    salary: "₹15.2 LPA",
    quote:
      "“Coming from commerce, the debugging rigor was intimidating at first. The Sanwer Road studio had mentors who sat with me at 9 PM dissecting packet traces.”",
    capstoneIcon: "☁️",
    capstoneName: "Zero-Trust Multi-Tenant K8s Controller",
  },
  {
    name: "Ritu Raghuvanshi",
    subtitle: "Civil Engineer → Core Backend Dev",
    initials: "RR",
    avatarBg: "bg-[#ebd9c1] text-[#133e2b]",
    company: "Razorpay Ecosystem Partner",
    salary: "₹17.5 LPA",
    quote:
      "“No multiple-choice tests. Every Friday you defend your code on the projector. By the time I interviewed, speaking on concurrency felt completely natural.”",
    capstoneIcon: "💳",
    capstoneName: "Idempotent Payment Webhook Dispatcher",
  },
  {
    name: "Karan Patel",
    subtitle: "Service Desk Analyst → Platform Eng",
    initials: "KP",
    avatarBg: "bg-[#c8f269] text-[#133e2b]",
    company: "FinTech Core UK (Remote)",
    salary: "$45,000 / yr",
    quote:
      "“Securing an international remote contract directly from an Indore campus felt impossible until Tekzen plugged me into asynchronous production workflows.”",
    capstoneIcon: "💾",
    capstoneName: "High-Throughput FIX Protocol Gateway (Rust)",
  },
  {
    name: "Sneha Kulkarni",
    subtitle: "Career Gap (3 Years) → Fullstack Lead",
    initials: "SK",
    avatarBg: "bg-[#e5e3d8] text-[#133e2b]",
    company: "InfoBeans Digital",
    salary: "₹14.0 LPA",
    quote:
      "“Everyone said a 3-year maternal break meant taking junior roles. Tekzen proved that deep system comprehension obliterates resume bias instantly.”",
    capstoneIcon: "🎨",
    capstoneName: "CRDT Collaborative Canvas Engine (TypeScript)",
  },
  {
    name: "Tushar Joshi",
    subtitle: "BCA Graduate → Distributed Systems",
    initials: "TJ",
    avatarBg: "bg-[#b8e259] text-[#133e2b]",
    company: "ScaleLabs Infrastructure",
    salary: "₹21.0 LPA",
    quote:
      "“The Raft consensus protocol assignment almost broke me. But when the interviewer asked how my leader election handled network partitions, I answered like an owner.”",
    capstoneIcon: "📡",
    capstoneName: "Raft Consensus Distributed State Machine",
  },
];

export default function Stories() {
  return (
    <section className="relative w-full bg-[#fbfaf5] pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block bg-[#e5e3d8] text-[#133e2b] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            UNFILTERED SOCIAL PROOF
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] tracking-tight leading-tight mb-3">
            Where Tekzen Fellows Code Today
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-xl mx-auto">
            Every outcome backed by verified salary bands, production repository commits, and rigorous interview feedback.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storiesData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2rem] p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                
                {/* Fellow Profile Header */}
                <div className="flex items-center gap-3.5">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover shrink-0 border border-gray-100"
                    />
                  ) : (
                    <div
                      className={`w-12 h-12 rounded-full ${item.avatarBg} font-extrabold text-sm flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      {item.initials}
                    </div>
                  )}

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#133e2b]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Company & Salary Pill Row */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="bg-[#f4f3ec] text-[#133e2b] text-[11px] font-bold px-3 py-1 rounded-full border border-[#e5e3d8] truncate max-w-[170px]">
                    {item.company}
                  </span>
                  <span className="bg-[#133e2b] text-[#c8f269] text-xs font-extrabold px-3 py-1 rounded-full shrink-0 shadow-2xs">
                    {item.salary}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex text-[#133e2b] text-sm font-bold pt-1">
                  ★★★★★
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.quote}
                </p>
              </div>

              {/* Capstone Shipped Footer */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Capstone Shipped:
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#133e2b]">
                  <span>{item.capstoneIcon}</span>
                  <span className="truncate">{item.capstoneName}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}