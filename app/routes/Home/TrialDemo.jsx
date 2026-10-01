import React from 'react';

function TrialDemo() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-[#c5f25a] relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-[#b8e84a] shadow-lg">
        {/* Subtle radial glow effect on the right */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#103423] text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full uppercase mb-4 shadow-2xs">
              <span>ZERO UPFRONT RISK</span>
              <span className="text-[#c8f269]">•</span>
              <span>100% FREE PASS</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#103423] leading-[1.15] tracking-tight">
              Experience Our Teaching in C &amp; C++ For 3 Days Free.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#103423]/80 font-medium leading-relaxed mt-4 mb-8 max-w-xl">
              Attend three full live sessions on our Indore campus or online with zero upfront fee. Inspect our code-first pedagogy, meet the mentors, and make an informed decision.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold text-[#103423]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#103423] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span>3 Hands-on live sessions</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#103423] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span>1-on-1 Code assessment</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#103423] flex items-center justify-center text-[10px] font-bold">
                  ✓
                </div>
                <span>Strict 15-desk seating limit</span>
              </div>
            </div>
          </div>

          {/* Right Action CTA */}
          <div className="flex flex-col items-center lg:items-end shrink-0">
            <button className="bg-[#103423] hover:bg-[#0a2317] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-md hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer">
              <span>Reserve Your Demo Seat</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <a
              href="tel:+919685825273"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#103423]/90 mt-3.5 hover:underline transition-all"
            >
              <svg className="w-4 h-4 text-[#103423]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.114-3.758-6.584-6.584l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Or call direct: +919685825273</span>
            </a>
          </div>
        </div>
      </div>

      {/* Book a Lab Tour / Reserve Form Section */}
      <div className="mt-10 sm:mt-14 bg-[#f5f5ee] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 border border-neutral-200/50 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Info */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#c8f269] text-[#133e2b] text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-1.5 rounded-full uppercase mb-5 shadow-2xs">
              <span>NO RISK</span>
              <span>•</span>
              <span>ZERO COMMITMENT</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] leading-[1.12] tracking-tight mb-5 max-w-lg">
              Book a Lab Tour <br />
              or Reserve Your <br />
              Seat
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed mb-8 max-w-md">
              Come visit our workspace in Indore, check out our terminal workstations, meet the senior engineering mentors, and discuss the best curriculum track for your career goals.
            </p>

            {/* Contact Info List */}
            <div className="space-y-4 text-xs sm:text-sm text-neutral-800 font-medium max-w-lg">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#133e2b] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <span className="font-bold text-neutral-900">Indore Campus: </span>
                  <span>1st Floor, Kalyani Market, Near London Villas, In Front of Shankeshwar City, Near Sri Aurbindo Hospital, Indore, MP – 452001</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#133e2b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.114-3.758-6.584-6.584l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <span className="font-bold text-neutral-900">Direct Hotline: </span>
                  <a href="tel:+919685825273" className="hover:underline">+91 9685825273</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#133e2b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <span className="font-bold text-neutral-900">Admissions: </span>
                  <a href="mailto:admissions@tekzen.tech" className="hover:underline">admissions@tekzen.tech</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#133e2b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="font-bold text-neutral-900">Lab Hours: </span>
                  <span>Monday – Saturday (9:00 AM – 8:00 PM)</span>
                </div>
              </div>
            </div>

            {/* Divider & WhatsApp Link */}
            <div className="w-full border-t border-neutral-300/60 pt-6 mt-8">
              <a
                href="https://wa.me/919685825273"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#c8f269] hover:bg-[#b8e855] text-[#133e2b] font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#133e2b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-neutral-200/60 w-full max-w-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                Reserve Your Demo Seat
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1 mb-6">
                Fill out this quick form. Our counseling mentor will reach out within 2 hours.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Siddharth Verma"
                    className="w-full bg-[#f3f3ea] text-sm text-neutral-800 px-5 py-3.5 rounded-full border border-transparent focus:border-[#133e2b] focus:bg-white focus:outline-none transition-all placeholder:text-neutral-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#f3f3ea] text-sm text-neutral-800 px-5 py-3.5 rounded-full border border-transparent focus:border-[#133e2b] focus:bg-white focus:outline-none transition-all placeholder:text-neutral-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                    Interested Program
                  </label>
                  <div className="relative">
                    <select
                      defaultValue="c-cpp"
                      className="w-full bg-[#f3f3ea] text-sm text-neutral-800 px-5 py-3.5 rounded-full border border-transparent focus:border-[#133e2b] focus:bg-white focus:outline-none transition-all appearance-none font-medium cursor-pointer pr-10"
                    >
                      <option value="c-cpp">C &amp; C++ Systems Mastery (Free 3–Day Demo)</option>
                      <option value="fullstack">Full Stack Development (MERN + Next.js)</option>
                      <option value="ai-ml">Data Science &amp; AI / ML</option>
                      <option value="java">Java Enterprise Full Stack</option>
                      <option value="python">Python Full Stack &amp; Backend</option>
                      <option value="webdev">Modern Web Development</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c8f269] hover:bg-[#b8e855] text-[#133e2b] font-bold text-sm sm:text-base py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Confirm Free Demo Seat</span>
                  <div className="w-4 h-4 rounded-full border border-[#133e2b] flex items-center justify-center text-[#133e2b] text-[9px] font-bold">
                    ✓
                  </div>
                </button>

                <p className="text-[11px] text-neutral-400 font-medium text-center pt-1">
                  No credit card required. Only 4 spots left for the upcoming batch in Indore.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrialDemo;