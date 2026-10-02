import React from "react";

export default function Journey() {
    return (
        <section className="relative w-full bg-[#fbfaf5] min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">

            {/* Outer Yellow Ambient Glows */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#e3f888]/45 rounded-full blur-[110px] pointer-events-none z-0"></div>
            <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#e6fb7a]/30 rounded-full blur-[120px] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Top Header Badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 bg-[#c8f269] px-4 py-1.5 rounded-full shadow-2xs">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#133e2b]"></span>
                        <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#133e2b] uppercase">
                            VERIFIED CAREER TRANSFORMATION INDEX &bull; INDORE ATELIER
                        </span>
                        <svg className="w-4 h-4 text-[#133e2b] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                </div>

                {/* Main Display Headline */}
                <div className="relative text-center max-w-4xl mx-auto mb-6 sm:mb-8">

                    {/* Dedicated Yellow Blur Spotlight directly behind the text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] h-[220px] sm:h-[320px] bg-[#e6f1ae] opacity-75 blur-[85px] rounded-full pointer-events-none -z-10"></div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#133e2b] tracking-tight leading-[1.15]">
                        From Terminal Zero to <br />
                        <span className="relative inline-block">
                            <span className="font-serif italic font-normal text-[#133e2b]">
                                Tier-1 Engineering
                            </span>
                            {/* Green Brush/Underline Decoration */}
                            <svg
                                className="absolute left-0 -bottom-2 w-full h-3 text-[#c8f269] -z-10"
                                viewBox="0 0 300 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M5 15C80 5 220 5 295 12"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>{" "}
                        <span className="font-extrabold text-[#133e2b]">Benches.</span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-normal">
                        We don't teach rote syntax or sell credential certificates. Tekzen fellows craft distributed memory engines, profile kernel cache lines, and step directly into high-leverage engineering teams. Every single outcome below is backed by public Git commits and audited offer letters.
                    </p>
                </div>

                {/* Action Buttons & Status Row */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 sm:mb-16">
                    {/* Primary CTA */}
                    <button className="bg-[#133e2b] hover:bg-[#1c523b] text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full shadow-xs hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer group">
                        <span>Explore Verified Stories</span>
                        <svg className="w-4 h-4 text-white transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </button>

                    {/* Secondary Action */}
                    <button className="bg-white hover:bg-gray-50 border border-gray-200 text-[#133e2b] font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 shadow-2xs cursor-pointer">
                        <svg className="w-4 h-4 text-[#133e2b]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
                        </svg>
                        <span>Inspect GitHub Proofs</span>
                    </button>

                    {/* Live Tracker Badge */}
                    <div className="bg-[#f4f3ec] border border-[#e5e3d8] px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#133e2b] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#52b788] animate-pulse"></span>
                        <span>Live Placement Index &bull; <strong>68 Fellows Tracked</strong></span>
                    </div>
                </div>

                {/* 3 Outcome Highlight Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-16 sm:mb-20">

                    {/* Card 1: Aditya Sharma */}
                    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                RECENT OFFER
                            </span>
                            <span className="text-xs font-extrabold text-white bg-[#133e2b] px-3 py-1 rounded-full">
                                ₹18.0 LPA
                            </span>
                        </div>

                        <div className="flex items-center gap-3.5 pt-1">
                            <img
                                src="/aditya_sharma.jpg"
                                alt="Aditya Sharma"
                                className="w-11 h-11 rounded-full object-cover shrink-0 border border-gray-200"
                            />
                            <div>
                                <div className="flex items-center gap-1">
                                    <h4 className="text-sm font-bold text-[#133e2b]">Aditya Sharma</h4>
                                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                                    Mechanical Eng &rarr; Systems Engineer @ ScaleLabs
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Production Audit Defense */}
                    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                LIVE DEFENSE
                            </span>
                            <span className="text-xs font-bold text-[#133e2b] bg-[#c8f269] px-3 py-1 rounded-full border border-[#b8e259]">
                                100% Verified
                            </span>
                        </div>

                        <div className="flex items-center gap-3.5 pt-1">
                            <div className="w-11 h-11 rounded-full bg-[#133e2b] text-[#c8f269] flex items-center justify-center font-mono font-bold text-xs shrink-0">
                                =x
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-[#133e2b]">Production Audit Defense</h4>
                                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                                    0 mock tests. Code defended against Valgrind memory profiling & load tests.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Karan Patel */}
                    <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm relative flex flex-col justify-between space-y-4 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-extrabold text-gray-400 bg-gray-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                GLOBAL REMOTE
                            </span>
                            <span className="text-xs font-extrabold text-white bg-[#133e2b] px-3 py-1 rounded-full">
                                $45,000 / yr
                            </span>
                        </div>

                        <div className="flex items-center gap-3.5 pt-1">
                            <div className="w-11 h-11 rounded-full bg-[#c8f269] text-[#133e2b] flex items-center justify-center font-bold text-sm shrink-0">
                                KP
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <h4 className="text-sm font-bold text-[#133e2b]">Karan Patel</h4>
                                    <span className="text-xs">🌍</span>
                                </div>
                                <p className="text-[11px] text-gray-500 font-medium leading-snug">
                                    Tier-3 College &rarr; Platform Eng @ FinTech Core UK
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Key Metrics Banner */}
                <div className="bg-[#133e2b] rounded-[2.25rem] sm:rounded-[2.75rem] p-7 sm:p-10 text-white max-w-6xl mx-auto shadow-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-emerald-800/60">

                        {/* Metric 1 */}
                        <div className="lg:pr-6">
                            <p className="text-[11px] font-extrabold text-[#c8f269] uppercase tracking-wider mb-2">
                                AVERAGE STARTING PACKAGE
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                                    ₹14.8
                                </span>
                                <span className="text-base font-bold text-[#c8f269]">LPA</span>
                            </div>
                            <p className="text-xs text-gray-300 mt-2 font-normal leading-relaxed">
                                Peak compensation: ₹26.5 LPA (ScaleLabs Core)
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="pt-6 sm:pt-0 lg:pl-6 lg:pr-6">
                            <p className="text-[11px] font-extrabold text-[#c8f269] uppercase tracking-wider mb-2">
                                90-DAY PLACEMENT VELOCITY
                            </p>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                                94.2%
                            </div>
                            <p className="text-xs text-gray-300 mt-2 font-normal leading-relaxed">
                                Direct offer acceptance post capstone defense
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="pt-6 lg:pt-0 lg:pl-6 lg:pr-6">
                            <p className="text-[11px] font-extrabold text-[#c8f269] uppercase tracking-wider mb-2">
                                ENTERPRISE PRS MERGED
                            </p>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                                180+
                            </div>
                            <p className="text-xs text-gray-300 mt-2 font-normal leading-relaxed">
                                In upstream open-source and internal infrastructure
                            </p>
                        </div>

                        {/* Metric 4 */}
                        <div className="pt-6 lg:pt-0 lg:pl-6">
                            <p className="text-[11px] font-extrabold text-[#c8f269] uppercase tracking-wider mb-2">
                                MENTORSHIP DENSITY
                            </p>
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                                1:4 Ratio
                            </div>
                            <p className="text-xs text-gray-300 mt-2 font-normal leading-relaxed">
                                Principal Architect to apprentice fellow pods
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
