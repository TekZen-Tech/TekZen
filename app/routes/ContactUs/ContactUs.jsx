import React, { useState } from "react";
import Enquiry from "./Enquiry";
import ReachingOut from "./ReachingOut";
import Frequently from "./Frequently";

export default function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeSlot: "11:00 AM",
      });
    }, 2000);
  };

  return (
    <>
    <section className="relative w-full bg-[#fbfaf5] min-h-screen py-12 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      {/* Rich Radial Lime Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[450px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4f870]/50 via-[#ebfaaf]/30 to-transparent blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Header Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 bg-[#c8f269] px-4 py-1.5 rounded-full shadow-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#133e2b]"></span>
            <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#133e2b] uppercase">
              VISIT OUR INDORE CAMPUS &bull; ADMISSIONS OPEN
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15]">
            Connect with mentors. <br />
            <span className="font-serif italic font-normal text-[#133e2b]">
              Walk into{" "}
            </span>
            <span className="font-extrabold text-[#133e2b]">the atelier.</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-normal">
            Whether you want to inspect our terminal-first classrooms, speak
            directly with chief architects, or book a 1-on-1 code audit for your
            career transition, our physical doors in Indore are open.
          </p>
        </div>

        {/* Action CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {/* Primary CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="group bg-[#133e2b] hover:bg-[#1c523b] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2.5 cursor-pointer"
          >
            <span>Book a Campus Walkthrough</span>
            <svg
              className="w-4 h-4 text-white transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919685825273"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ebd9c1] hover:bg-[#e3cbaf] text-[#133e2b] font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-2xs"
          >
            <svg
              className="w-5 h-5 text-[#133e2b]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

          {/* Phone Button */}
          <a
            href="tel:+919685825273"
            className="bg-white/80 hover:bg-white border border-gray-200 text-[#133e2b] font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2.5 shadow-2xs cursor-pointer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#133e2b]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.439-5.146-3.757-6.585-6.585l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <span>+91 9685825273</span>
          </a>
        </div>

        {/* Featured Card */}
        <div className="bg-[#f4f3ec] rounded-[2.25rem] sm:rounded-[2.75rem] p-3.5 sm:p-5 lg:p-6 border border-[#e5e3d8] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: Image with Badge */}
            <div className="lg:col-span-7 relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-[2rem] overflow-hidden group">
              <img
                src="/contact_mentor.jpg"
                alt="TekZen Indore Atelier Hub"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-xs border border-gray-200/60 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-700"></span>
                </span>
                <span className="text-xs font-bold text-[#133e2b] tracking-wide">
                  Indore Hub Active: Terminal Seats Open Today
                </span>
              </div>
            </div>

            {/* Right Column: Atelier Access Info */}
            <div className="lg:col-span-5 flex flex-col justify-center px-2 py-4 sm:px-4 sm:py-6">
              
              {/* Subheading */}
              <span className="text-[11px] sm:text-xs font-bold text-[#5c7a1e] tracking-widest uppercase mb-2">
                DIRECT ATELIER ACCESS
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#133e2b] tracking-tight mb-3 leading-snug">
                Immersive, In-Person Mentorship
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                Step right onto our production floor in Kalyani Market. Sit with
                practicing system architects, review live codebases, and test-drive
                real development environments before enrolling.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200/90 mb-6"></div>

              {/* Perks List */}
              <div className="space-y-3.5">
                
                {/* Perk 1 */}
                <div className="bg-white rounded-full p-2.5 sm:p-3 pr-6 flex items-center gap-3.5 shadow-2xs border border-gray-100 hover:shadow-xs transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#f4f3ec] flex items-center justify-center shrink-0 text-[#133e2b]">
                    <svg
                      className="w-5 h-5 text-[#133e2b]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#133e2b]">
                      15-Minute Response Time
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                      Instant response for walk-ins & demos
                    </p>
                  </div>
                </div>

                {/* Perk 2 */}
                <div className="bg-white rounded-full p-2.5 sm:p-3 pr-6 flex items-center gap-3.5 shadow-2xs border border-gray-100 hover:shadow-xs transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#f4f3ec] flex items-center justify-center shrink-0 text-[#133e2b]">
                    <svg
                      className="w-5 h-5 text-[#133e2b]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#133e2b]">
                      Direct Mentor Access
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                      Strictly pedagogical guidance, zero pushy sales
                    </p>
                  </div>
                </div>

                {/* Perk 3 */}
                <div className="bg-white rounded-full p-2.5 sm:p-3 pr-6 flex items-center gap-3.5 shadow-2xs border border-gray-100 hover:shadow-xs transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#f4f3ec] flex items-center justify-center shrink-0 text-[#133e2b]">
                    <svg
                      className="w-5 h-5 text-[#133e2b]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 8.25L10.5 12 6 15.75m6 0h4.5M3.75 4.5h16.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#133e2b]">
                      Walk-in Terminal Demos
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5">
                      Hands-on code audits and rig trials
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Walkthrough Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#c8f269] text-[#133e2b] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#133e2b]">Campus Walkthrough Scheduled!</h3>
                <p className="text-neutral-600 text-sm">
                  Our chief architect will reach out to confirm your session. We look forward to welcoming you to the atelier!
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-[#133e2b] mb-1">Book Campus Walkthrough</h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Visit our Indore hub for a 1-on-1 code audit and terminal tour.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#133e2b] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#133e2b]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#133e2b] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#133e2b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#133e2b] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#133e2b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#133e2b] mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#133e2b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#133e2b] mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#133e2b] bg-white"
                      >
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#133e2b] hover:bg-[#1c523b] text-white font-medium py-3 rounded-xl transition-all cursor-pointer text-sm shadow-xs"
                    >
                      Confirm Walkthrough Booking
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
    <Enquiry/>
    <ReachingOut/>
    <Frequently/>
    </>
  );
}
