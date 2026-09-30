import React from "react";
import { Link } from "react-router";

export default function AboutCampusLab() {
  return (
    <section id="campus-lab" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-6">
      <div className="bg-[#FAF8F5] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-neutral-200/80 shadow-xs">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Lab Specs & Details matching Image 5 */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef7db] text-[#133e2b] text-xs font-bold w-fit">
              <span>📍</span>
              <span>Physical Facility & Engineering Atelier</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight mt-4">
              The Indore Engineering Lab
            </h2>

            {/* Description */}
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-4">
              Located in the technical corridor of Indore, our physical lab provides fellows with uninterrupted gigabit network fiber, ergonomic Herman Miller seating, and quiet pairing booths engineered for 12–hour technical flow states.
            </p>

            {/* 3 Specifications List matching Image 5 */}
            <div className="mt-8 space-y-6">
              
              {/* 1. Address Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f0f7e6] text-[#133e2b] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                    Address Location
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                    Kalyani Market, Near Sri Aurobindo Hospital, Sanwer Road, Indore, MP 453555
                  </p>
                </div>
              </div>

              {/* 2. Infrastructure Specifications */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f0f7e6] text-[#133e2b] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                    Infrastructure Specifications
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                    Dual-redundant 1 Gbps symmetric leased line, local on-prem server racks for bare-metal DevOps exercises.
                  </p>
                </div>
              </div>

              {/* 3. Visiting & Lab Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#f0f7e6] text-[#133e2b] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                    Visiting & Lab Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                    Monday through Saturday: 08:30 AM – 09:30 PM (Fellows maintain 24/7 keycard access during hack weeks).
                  </p>
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <Link
                to="/courses#book-demo"
                className="inline-flex items-center gap-2 bg-[#133e2b] hover:bg-[#0c2a1a] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Schedule Campus Walkthrough</span>
                <span>›</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Lab Photo & Overlay Chip matching Image 5 */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] bg-neutral-900 group">
              <img
                src="/indore_lab.jpg"
                alt="TekZen Indore Engineering Lab Interior"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Overlay Chip matching Image 5 */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-white">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-[#c8f269] text-[#133e2b] px-2.5 py-0.5 rounded-full mb-1.5">
                  INDORE HUB
                </span>
                <h4 className="font-headline font-bold text-base text-white">
                  Where Code Becomes Craft
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Open desk terminals, zero cubicles, pure collaborative velocity.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
