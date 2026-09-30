import React from "react";

export default function DemoPassBanner({ onClaimDemo }) {
  const handleClick = () => {
    if (onClaimDemo) {
      onClaimDemo();
    } else {
      const demoElement = document.getElementById("book-demo");
      if (demoElement) {
        demoElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 my-6">
      {/* Vibrant Lime Gradient Card matching Image 2 */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#bdec50] via-[#cbf368] to-[#e4fab0] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-14 border border-[#b2e83d] shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        
        {/* Decorative soft blurred background accent */}
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/30 rounded-full blur-3xl pointer-events-none" />

        {/* Left Side: Content & Features */}
        <div className="max-w-2xl relative z-10">
          {/* Top Pill Badge matching Image 2 */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#133e2b] text-[#c8f269] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase mb-5">
            <span>NO CREDIT CARD • ZERO UPFRONT COMMITMENT</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#133e2b] font-headline tracking-tight leading-[1.12]">
            Attend 3 Live Lectures Before You Pay a Single Rupee.
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#133e2b]/85 font-medium leading-relaxed mt-4 max-w-xl">
            Experience the Tekzen standard directly. Join our offline physical lab in Indore or connect virtually. Work directly with mentors on real code reviews.
          </p>

          {/* Feature Checklist matching Image 2 */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 sm:mt-7 text-xs sm:text-sm font-bold text-[#133e2b]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-[#133e2b] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Live Terminal Coding</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-[#133e2b] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>1-on-1 Code Review Session</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border-2 border-[#133e2b] flex items-center justify-center text-[10px] font-bold">
                ✓
              </span>
              <span>Lab Workspace Access in Indore</span>
            </div>
          </div>
        </div>

        {/* Right Side: CTA Button & Cohort urgency text */}
        <div className="flex flex-col items-start lg:items-end shrink-0 relative z-10 w-full lg:w-auto">
          <button
            onClick={handleClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133e2b] hover:bg-[#0c2a1a] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>Claim 3-Day Demo Pass</span>
          </button>
          
          <p className="text-[11px] sm:text-xs font-semibold text-[#133e2b]/85 mt-2.5 text-center lg:text-right">
            Next Cohort starts next Monday. Strict 15 seats cap.
          </p>
        </div>

      </div>
    </section>
  );
}
