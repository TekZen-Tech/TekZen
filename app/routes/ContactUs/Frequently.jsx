import React, { useState } from "react";

const faqData = [
  {
    question: "Do I need to bring my own laptop for the campus trial?",
    answer:
      "No, our Indore atelier labs are fully equipped with dual-monitor developer rigs, pre-configured terminal environments, and dev tools. However, you are welcome to bring your personal laptop if you wish to set up local repositories.",
  },
  {
    question: "Are walk-in visits accepted without a pre-booked demo pass?",
    answer:
      "Yes, walk-in visits are welcome between 9:00 AM and 8:00 PM (Mon-Sat). However, pre-booking a demo seat ensures a dedicated system architect is reserved for your 1-on-1 code audit.",
  },
  {
    question: "Can parents or sponsors join the consultation session?",
    answer:
      "Absolutely. Parents and guardians are invited to tour our Kalyani Market campus, inspect our infrastructure, and discuss career placement trajectories with our chief mentors.",
  },
  {
    question: "What if I live outside Indore and cannot visit in person?",
    answer:
      "We offer live 1-on-1 video call consultations and virtual terminal pass access. You can schedule a remote code audit with our senior engineering team from anywhere.",
  },
];

export default function Frequently() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full bg-[#fbfaf5] pb-20 sm:pb-28 font-sans">
      <div className="w-full mx-auto bg-[#f4f3ec] p-7 sm:p-12 lg:p-14 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-5">
            <span className="inline-block bg-[#e5e3d8] text-[#133e2b] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-3">
              Frequently Clarified
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15] mb-4">
              Planning your campus visit?
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-8 max-w-md">
              Got specific questions regarding eligibility, demo equipment, or parent accompaniment? Review our visitation protocol answers.
            </p>

            {/* Small Accommodation Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-2xs hover:shadow-xs transition-all">
              <h3 className="text-sm font-bold text-[#133e2b] mb-1.5">
                Need special accommodation?
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                Let our facilities team know 24 hours ahead of your arrival in Indore.
              </p>
              <a
                href="tel:+919685825273"
                className="text-xs font-bold text-[#133e2b] hover:text-[#5c7a1e] inline-flex items-center gap-1 transition-colors group cursor-pointer"
              >
                <span>Direct Dial Desk</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (ACCORDION) ================= */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white border border-gray-100/90 shadow-2xs overflow-hidden transition-all duration-300 ${
                    isOpen ? "rounded-[1.75rem] ring-1 ring-[#133e2b]/10" : "rounded-full sm:rounded-full hover:shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-[#133e2b] text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#f4f3ec] flex items-center justify-center shrink-0 text-[#133e2b] transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#133e2b] text-white" : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-gray-100/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
