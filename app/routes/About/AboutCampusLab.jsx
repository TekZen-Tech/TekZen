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
                  <a
                    href="https://maps.app.goo.gl/DYfWTsFBvMzZkkfr9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-neutral-600 mt-0.5 leading-relaxed hover:text-[#133e2b] hover:underline block"
                  >
                    1st Floor, Kalyani Market, near London Villas, in front of Shankheshwar City, near Sri Aurobindo Hospital, Indore, Madhya Pradesh.
                  </a>
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

          {/* Right Column: Interactive Campus Map */}
          <div className="lg:col-span-6 relative">
            <a
              href="https://maps.app.goo.gl/DYfWTsFBvMzZkkfr9"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open TekZen Technologies Indore location on Google Maps"
              className="relative block rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/3] bg-neutral-900 group cursor-pointer"
            >
              <iframe
                title="TekZen Technologies Indore Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d919.5448869134004!2d75.8588713!3d22.79581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303293642daf7%3A0x80b35a49da967710!2sTekzen%20Technologies!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0 pointer-events-none group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Top Action Pill */}
              <div className="absolute top-4 right-4 bg-white/95 hover:bg-white text-[#133e2b] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md backdrop-blur-md flex items-center gap-1.5 transition-all group-hover:scale-105">
                <span>View on Google Maps</span>
                <svg className="w-3.5 h-3.5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>

              {/* Overlay Chip */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all group-hover:bg-black/75">
                <div className="flex items-center justify-between mb-1">
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider bg-[#c8f269] text-[#133e2b] px-2.5 py-0.5 rounded-full">
                    INDORE HUB • LIVE MAP
                  </span>
                  <span className="text-[11px] font-bold text-[#c8f269] flex items-center gap-1">
                    <span>Click for directions</span>
                    <span>→</span>
                  </span>
                </div>
                <h4 className="font-headline font-bold text-base text-white">
                  TekZen Technologies Campus
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5 line-clamp-2">
                  1st Floor, Kalyani Market, near London Villas, in front of Shankheshwar City, near Sri Aurobindo Hospital, Indore.
                </p>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
