import React, { useState } from "react";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    track: "",
    userType: "College Student",
    interactionMode: "Offline at Indore Campus",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        whatsapp: "",
        email: "",
        track: "",
        userType: "College Student",
        interactionMode: "Offline at Indore Campus",
        note: "",
      });
    }, 3500);
  };

  return (
    <section className="relative w-full bg-[#fbfaf5] pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR (4 CARDS) ================= */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            {/* CARD 1: Campus Address & Hours */}
            <div className="bg-[#f4f3ec] rounded-[2rem] p-6 border border-[#e5e3d8] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#e5e3d8] text-[#133e2b] px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  🏢 Central Atelier
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  Indore, MP
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-[#133e2b] mb-2 tracking-tight">
                Indore Campus & Labs
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5">
                1st Floor, Kalyani Market, Near London Villas, In Front of Shankeshwar City, Near Sri Aurobindo Hospital, Indore, MP - 452001
              </p>

              <div className="border-t border-gray-300/60 pt-4 space-y-2.5 text-xs text-neutral-700 font-medium">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#133e2b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mon – Sat</span>
                  </div>
                  <span className="font-bold text-[#133e2b]">9:00 AM – 8:00 PM</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#133e2b]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>Sunday</span>
                  </div>
                  <span className="font-bold text-[#133e2b]">By Prior Appointment</span>
                </div>
              </div>
            </div>

            {/* CARD 2: Direct Lines */}
            <div className="bg-[#f4f3ec] rounded-[2rem] p-6 border border-[#e5e3d8] shadow-xs">
              <h3 className="text-xl font-extrabold text-[#133e2b] mb-4 tracking-tight">
                Direct Lines
              </h3>

              <div className="space-y-3">
                {/* Contact Line 1 */}
                <a
                  href="tel:+919685825273"
                  className="bg-white rounded-full p-3 px-4 flex items-center justify-between border border-gray-100/80 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f4f3ec] flex items-center justify-center text-[#133e2b] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.439-5.146-3.757-6.585-6.585l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                        Admissions Desk
                      </p>
                      <p className="text-sm font-bold text-[#133e2b]">
                        +91 9685825273
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#133e2b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>

                {/* Contact Line 2 */}
                <a
                  href="mailto:admissions@tekzen.tech"
                  className="bg-white rounded-full p-3 px-4 flex items-center justify-between border border-gray-100/80 hover:shadow-xs transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#f4f3ec] flex items-center justify-center text-[#133e2b] shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">
                        Admissions & Fellowships
                      </p>
                      <p className="text-sm font-bold text-[#133e2b]">
                        admissions@tekzen.tech
                      </p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#133e2b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* CARD 3: Direct Mentor WhatsApp */}
            <div className="bg-[#133e2b] rounded-[2rem] p-6 text-white relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#c8f269] uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#c8f269]"></span>
                  INSTANT DISPATCH
                </span>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  Direct Mentor WhatsApp
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed mb-5 max-w-[240px]">
                  Get syllabus PDFs & track counseling within minutes.
                </p>

                <a
                  href="https://wa.me/919685825273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c8f269] hover:bg-[#b5e054] text-[#133e2b] font-extrabold text-xs px-5 py-3 rounded-full inline-flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <span>Open WhatsApp (+91 9685825273)</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              {/* Decorative Matrix Grid Icon on right */}
              <div className="absolute right-4 bottom-4 z-0 opacity-20 pointer-events-none">
                <div className="grid grid-cols-4 gap-1.5 w-20 h-20">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-xs"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 4: Transit & Directions */}
            <div className="bg-[#f4f3ec] rounded-[2rem] p-6 border border-[#e5e3d8] shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-extrabold text-[#133e2b] tracking-tight">
                  Transit & Directions
                </h3>
                <span className="bg-[#c8f269] text-[#133e2b] text-[11px] font-bold px-3 py-1 rounded-full">
                  5 Min from Aurobindo
                </span>
              </div>

              {/* Map Illustration Container */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-gray-200/80 mb-3 group">
                <img
                  src="/indore_map.jpg"
                  alt="Indore Campus Map"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Location Pin Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-xs border border-black/5 flex items-center gap-1.5 text-[11px] font-bold text-[#133e2b]">
                  <span>📍 Opposite Shankeshwar City, Ujjain Rd</span>
                </div>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                Accessible via BRTS, local transit, and shared autos along the Sanwer-Ujjain corridor. Ample parking available inside Kalyani Market arcade.
              </p>
            </div>

          </div>

          {/* ================= RIGHT MAIN FORM CONTAINER ================= */}
          <div className="lg:col-span-7 bg-white rounded-[2.25rem] sm:rounded-[2.75rem] p-6 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/40">
            
            {/* Top Subheader */}
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-[#5c7a1e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-xs font-bold text-[#5c7a1e] tracking-wide">
                Direct Admissions Portal
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#133e2b] tracking-tight mb-3 leading-tight">
              Send an Inquiry or Reserve a Demo Seat
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-600 mb-8 leading-relaxed">
              Experience our 3-day terminal pass. No sales reps—our lead instructors review every application.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#c8f269] text-[#133e2b] rounded-full flex items-center justify-center mx-auto text-3xl font-extrabold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#133e2b]">Inquiry Received!</h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-bold text-[#133e2b]">{formData.fullName || "Developer"}</span>. Our lead instructors are reviewing your details and will get in touch within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Yashika Patel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#f7f6f0] border border-transparent focus:border-[#133e2b] focus:bg-white rounded-2xl py-3 px-4 pr-10 text-sm text-[#133e2b] placeholder-gray-400 outline-none transition-all"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* WhatsApp & Email (2 Cols on SM+) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                      WhatsApp Number *
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3.5 text-xs font-bold text-gray-500 pointer-events-none">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full bg-[#f7f6f0] border border-transparent focus:border-[#133e2b] focus:bg-white rounded-2xl py-3 pl-12 pr-4 text-sm text-[#133e2b] placeholder-gray-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="e.g. yashika@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f7f6f0] border border-transparent focus:border-[#133e2b] focus:bg-white rounded-2xl py-3 px-4 pr-10 text-sm text-[#133e2b] placeholder-gray-400 outline-none transition-all"
                      />
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium pointer-events-none">
                        @
                      </div>
                    </div>
                  </div>
                </div>

                {/* Track / Purpose Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                    Select Track / Purpose *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full bg-[#f7f6f0] border border-transparent focus:border-[#133e2b] focus:bg-white rounded-2xl py-3 px-4 pr-10 text-sm text-[#133e2b] outline-none transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select an engineering track or visit intention
                      </option>
                      <option value="Full Stack Web Architecture">Full Stack Web Architecture</option>
                      <option value="System Design & DevOps">System Design & DevOps</option>
                      <option value="Backend Engineering">Backend Engineering</option>
                      <option value="1-on-1 Code Audit & Campus Tour">1-on-1 Code Audit & Campus Tour</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Who are you? Selection Pills */}
                <div>
                  <label className="block text-xs font-bold text-[#133e2b] mb-2">
                    Who are you?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { id: "College Student", icon: "🎓", label: "College Student" },
                      { id: "Working Pro", icon: "💻", label: "Working Pro" },
                      { id: "Parent / Guardian", icon: "👨‍👩‍👧", label: "Parent / Guardian" },
                    ].map((item) => {
                      const isSelected = formData.userType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, userType: item.id })}
                          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                            isSelected
                              ? "bg-[#133e2b] text-white shadow-2xs"
                              : "bg-[#f4f3ec] hover:bg-[#e8e7df] text-neutral-700"
                          }`}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Mode of Interaction */}
                <div>
                  <label className="block text-xs font-bold text-[#133e2b] mb-2">
                    Preferred Mode of Interaction
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      { id: "Offline at Indore Campus", icon: "🏢", label: "Offline at Indore Campus" },
                      { id: "Live Online Video Call", icon: "💻", label: "Live Online Video Call" },
                    ].map((item) => {
                      const isSelected = formData.interactionMode === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, interactionMode: item.id })}
                          className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                            isSelected
                              ? "bg-[#c8f269] text-[#133e2b] border border-[#b8e259] shadow-2xs"
                              : "bg-[#f4f3ec] hover:bg-[#e8e7df] text-neutral-700"
                          }`}
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Note or Career Question (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-[#133e2b] mb-1.5">
                    Note or Career Question (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your branch, year, or specific doubts regarding placement tracks..."
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full bg-[#f7f6f0] border border-transparent focus:border-[#133e2b] focus:bg-white rounded-2xl p-4 text-sm text-[#133e2b] placeholder-gray-400 outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#c8f269] hover:bg-[#baee51] text-[#133e2b] font-extrabold text-sm sm:text-base py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Submit Inquiry & Reserve Free Demo</span>
                    <svg
                      className="w-4 h-4 text-[#133e2b] transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>

                  {/* Trust Badge Below Button */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-neutral-500 font-medium">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <span>Zero spam. Our senior mentors respond personally within 2 hours.</span>
                  </div>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}