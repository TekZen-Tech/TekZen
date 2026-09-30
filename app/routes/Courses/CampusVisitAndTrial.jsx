import React, { useState, useRef, useEffect } from "react";

// Custom styled select component to replace the basic OS default dropdown
function CustomSelect({ label, value, options, onChange, placeholder = "Select option" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const selectedOption =
    options.find((opt) => opt.value === value) || { label: value, value };

  return (
    <div className="relative" ref={containerRef}>
      {label && (
        <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
          {label}
        </label>
      )}

      {/* Trigger Button with polished rounded styling */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full bg-[#f4f4ec] hover:bg-[#ecece3] text-[#133e2b] text-xs sm:text-sm rounded-2xl px-4 py-3.5 border transition-all flex items-center justify-between text-left cursor-pointer outline-none ${
          isOpen
            ? "border-[#133e2b] ring-2 ring-[#133e2b]/15 bg-white shadow-sm"
            : "border-neutral-300/80 hover:border-[#133e2b]/60"
        }`}
      >
        <span className="truncate pr-2 font-medium">
          {selectedOption.label || placeholder}
        </span>
        <svg
          className={`w-4 h-4 shrink-0 text-[#133e2b] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Custom Floating Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-neutral-200 py-2 z-50 max-h-64 overflow-y-auto">
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#c8f269]/25 text-[#133e2b] font-bold"
                    : "text-neutral-700 hover:bg-[#c8f269]/15 hover:text-[#133e2b]"
                }`}
              >
                <span className="leading-snug pr-2">{opt.label}</span>
                {isSelected && (
                  <span className="w-4 h-4 rounded-full bg-[#133e2b] text-[#c8f269] flex items-center justify-center text-[10px] font-bold shrink-0">
                    ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function CampusVisitAndTrial() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    track: "Full Stack Engineering (MERN + Next.js Enterprise) (4 Months)",
    mode: "Indore Campus (Offline In-Person)",
    status: "College Student / Recent Grad",
  });

  const [submitted, setSubmitted] = useState(false);

  const trackOptions = [
    {
      label: "Full Stack Engineering (MERN + Next.js Enterprise) (4 Months)",
      value: "Full Stack Engineering (MERN + Next.js Enterprise) (4 Months)",
    },
    {
      label: "C & C++ Systems Mastery (2.5 Months)",
      value: "C & C++ Systems Mastery (2.5 Months)",
    },
    {
      label: "Data Science & AI / ML (6 Months)",
      value: "Data Science & AI / ML (6 Months)",
    },
    {
      label: "Java Enterprise Full Stack (6 Months)",
      value: "Java Enterprise Full Stack (6 Months)",
    },
    {
      label: "Modern Web Development (3 Months)",
      value: "Modern Web Development (3 Months)",
    },
    {
      label: "Python Full Stack & Backend (5 Months)",
      value: "Python Full Stack & Backend (5 Months)",
    },
  ];

  const modeOptions = [
    {
      label: "Indore Campus (Offline In-Person)",
      value: "Indore Campus (Offline In-Person)",
    },
    {
      label: "Hybrid / Live Remote Virtual",
      value: "Hybrid / Live Remote Virtual",
    },
  ];

  const statusOptions = [
    {
      label: "College Student / Recent Grad",
      value: "College Student / Recent Grad",
    },
    {
      label: "Working Software Engineer",
      value: "Working Software Engineer",
    },
    {
      label: "Career Transitioner (Non-CS to Tech)",
      value: "Career Transitioner (Non-CS to Tech)",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Physical Headquarters & Campus Info matching Image 2 */}
        <div className="lg:col-span-6 flex flex-col justify-start">
          <span className="text-xs font-bold text-[#133e2b] tracking-[0.2em] uppercase">
            PHYSICAL HEADQUARTERS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight leading-tight mt-3">
            Visit Our Indore Campus
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
            Located in the educational corridor of Indore. Walk in to inspect our workstation setups, sit with current fellows, and debug code alongside senior faculty.
          </p>

          {/* Campus Location & Hotline Card matching Image 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-neutral-200/90 mt-8 space-y-6 max-w-lg">
            
            {/* Location row */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#faeede] text-[#133e2b] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <svg
                  className="w-5 h-5 text-[#836846]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline font-bold text-sm sm:text-base text-[#133e2b]">
                  Indore Lab & Learning Center
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mt-1">
                  1st Floor, Kalyani Market, Near London Villas, Near Sri Aurobindo Hospital, Indore, Madhya Pradesh 453555
                </p>
              </div>
            </div>

            {/* Direct Hotline / WhatsApp row */}
            <div className="flex items-start gap-4 pt-4 border-t border-neutral-100">
              <div className="w-10 h-10 rounded-full bg-[#e7f7cf] text-[#133e2b] flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <svg
                  className="w-5 h-5 text-[#416812]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-neutral-500">
                  Direct Counselor Hotline & WhatsApp
                </span>
                <a
                  href="tel:+919685825273"
                  className="font-headline font-bold text-base sm:text-lg text-[#133e2b] hover:text-[#2e8b57] transition-colors mt-0.5"
                >
                  +91 96858 25273
                </a>
              </div>
            </div>

          </div>

          {/* Campus Picture with rounded capsule aesthetic matching Image 2 */}
          <div className="relative mt-8 max-w-lg rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white/80 aspect-[16/10] group">
            <img
              src="/fellows-collaboration.jpg"
              alt="TekZen Campus Collaboration Lab"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#133e2b] flex items-center gap-2 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#c8f269] animate-pulse"></span>
              <span>Live Lab Sessions in Progress</span>
            </div>
          </div>

        </div>

        {/* Right Column: Instant Pass Reservation Form Card matching Image 2 */}
        <div className="lg:col-span-6 w-full">
          <div className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-7 sm:p-10 shadow-xl border border-neutral-200/90 max-w-lg lg:max-w-none">
            
            {/* Top Badge matching Image 2 */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c8f269] text-[#133e2b] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase mb-3">
              <span>INSTANT PASS RESERVATION</span>
            </div>

            {/* Form Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#133e2b] font-headline tracking-tight leading-tight">
              Book Your 3-Day Free Trial Seat
            </h3>

            {/* Subtext */}
            <p className="text-neutral-500 text-xs sm:text-sm mt-2 leading-relaxed">
              Select your track and reserve your slot for the upcoming batch. Our admissions mentor will WhatsApp your lab credentials within 4 hours.
            </p>

            {submitted ? (
              <div className="mt-8 p-6 rounded-2xl bg-[#f0f7f3] border border-[#bddecb] text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#133e2b] text-[#c8f269] flex items-center justify-center text-xl font-bold mb-3">
                  ✓
                </div>
                <h4 className="font-headline font-bold text-lg text-[#133e2b]">
                  Demo Pass Reserved!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-sm">
                  Thank you, <strong>{formData.fullName || "Fellow"}</strong>! Your 3-Day Trial details for <strong>{formData.track}</strong> have been logged. Our admissions mentor will contact you on <strong>{formData.phone || "your WhatsApp"}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-bold text-[#133e2b] underline cursor-pointer"
                >
                  Reserve another pass
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:space-y-5">
                
                {/* Full Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yashvardhan Sharma"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-[#f4f4ec] hover:bg-[#ecece3] text-[#133e2b] placeholder-neutral-400 text-xs sm:text-sm rounded-2xl px-4 py-3.5 border border-neutral-300/80 focus:border-[#133e2b] focus:bg-white focus:ring-2 focus:ring-[#133e2b]/15 focus:outline-none transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                      WhatsApp / Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#f4f4ec] hover:bg-[#ecece3] text-[#133e2b] placeholder-neutral-400 text-xs sm:text-sm rounded-2xl px-4 py-3.5 border border-neutral-300/80 focus:border-[#133e2b] focus:bg-white focus:ring-2 focus:ring-[#133e2b]/15 focus:outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Specialization Track Row with Custom Polished Dropdown */}
                <CustomSelect
                  label="Specialization Track *"
                  value={formData.track}
                  options={trackOptions}
                  onChange={(val) => setFormData({ ...formData, track: val })}
                />

                {/* Preferred Mode & Current Status Row with Custom Polished Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomSelect
                    label="Preferred Mode *"
                    value={formData.mode}
                    options={modeOptions}
                    onChange={(val) => setFormData({ ...formData, mode: val })}
                  />

                  <CustomSelect
                    label="Current Status"
                    value={formData.status}
                    options={statusOptions}
                    onChange={(val) => setFormData({ ...formData, status: val })}
                  />
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#133e2b] hover:bg-[#0c2a1a] text-white py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <span>Reserve Free 3-Day Demo Seat</span>
                    <span className="text-[#c8f269]">→</span>
                  </button>
                </div>

                {/* Privacy Guarantee Note */}
                <p className="text-center text-[10px] sm:text-[11px] text-neutral-400 pt-1 leading-normal">
                  We respect your privacy. No spam, only cohort schedules and terminal setup guides.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
