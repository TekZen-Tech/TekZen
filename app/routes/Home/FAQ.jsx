import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is the structure of the FREE 3-Day Demo Class?",
    answer: "The 3-Day Demo gives you full, unrestricted access to the live cohort environment. You will write code in our terminal environment, receive mentor feedback on your syntax, and experience our zero-slide policy before paying any enrollment fee."
  },
  {
    id: 2,
    question: "Can non-CS students or complete beginners join the programs?",
    answer: "Yes. Our foundational programs start from absolute first principles (memory allocation, binary representations, basic logic). What we require is dedication, daily presence at your desk, and willingness to debug."
  },
  {
    id: 3,
    question: "Are the internship certificates valid for college curriculum credits?",
    answer: "Yes! Tekzen Technologies issues formal project completion letters, live repository hashes, and verified credentials recognized for semester credit evaluations across engineering colleges in MP and central India."
  },
  {
    id: 4,
    question: "What kind of placement assistance is provided?",
    answer: "We conduct weekly 1-on-1 resume teardowns, GitHub portfolio polish, system design whiteboarding mock interviews, and share curated direct referrals with hiring partners across Indore, Bhopal, Pune, and Bangalore tech firms."
  }
];

function FAQ() {
  // Store array of open indices; initialize with all open to match screenshot
  const [openIndices, setOpenIndices] = useState([0, 1, 2, 3]);

  const toggleFAQ = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Top Header */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="inline-block bg-[#c8f269] text-[#133e2b] text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full uppercase shadow-2xs mb-3">
          GOT QUESTIONS?
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15]">
          Frequently Asked Questions
        </h2>

        <p className="text-sm sm:text-base text-neutral-600 font-medium max-w-xl mx-auto mt-3 leading-relaxed">
          Everything you need to know about cohorts, classroom expectations, and enrollment.
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-neutral-200/60 shadow-xs transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
              >
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#133e2b] tracking-tight leading-snug">
                  {faq.question}
                </h3>

                <div className={`w-8 h-8 rounded-full bg-[#f5f5ee] flex items-center justify-center shrink-0 text-[#133e2b] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div className="pt-3 mt-3 border-t border-neutral-100">
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;