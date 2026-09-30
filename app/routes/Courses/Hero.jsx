export default function Hero() {
    return (
        <section className="relative px-6 sm:px-12 md:px-20 pt-10 sm:pt-14 pb-16 max-w-7xl mx-auto">
            {/* Top Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Column: Headline, Hook & CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300/70 bg-white/80 backdrop-blur-sm shadow-xs w-fit mb-6 sm:mb-8">
                        <span className="w-2 h-2 rounded-full bg-secondary-500"></span>
                        <span className="text-xs sm:text-sm font-medium text-primary">
                            Winter Apprenticeship Cohort Now Open
                        </span>
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-200/60 text-neutral-600">
                            15 Seats Max
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold text-primary tracking-tight leading-[1.08] font-headline">
                        Engineering is
                        <br />
                        an
                        <br />
                        <span className="relative inline-block">
                            <span className="relative z-10">apprenticeship,</span>
                            <svg
                                className="absolute -bottom-1.5 sm:-bottom-2.5 lg:-bottom-3 left-0 w-[102%] h-3 sm:h-4 lg:h-5 text-secondary-500 pointer-events-none -z-0"
                                viewBox="0 0 280 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M3 13.5C70 4.5 190 3.5 277 10"
                                    stroke="currentColor"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <br />
                        not a lecture.
                    </h1>

                    {/* Subtitle / Description */}
                    <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-md">
                        Skip generic slideshows and simulated sandboxes. Join an intensive terminal-first atelier
                        where fellows ship resilient production architectures alongside veteran Staff and Principal mentors.
                    </p>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-800 active:scale-[0.98] transition-all duration-200 shadow-sm group cursor-pointer">
                            <span>Explore Tracks</span>
                            <svg
                                className="w-4 h-4 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                        <button className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary-400 text-primary font-semibold text-sm hover:bg-secondary-300 active:scale-[0.98] transition-all duration-200 shadow-sm cursor-pointer">
                            <span>Book Free Demo</span>
                        </button>
                    </div>

                    {/* Trust Indicators / Highlights */}
                    <div className="mt-10 flex items-center gap-4">
                        {/* Overlapping Avatar Stack */}
                        <div className="flex -space-x-3 items-center shrink-0">
                            <div className="w-10 h-10 rounded-full font-bold text-[10px] tracking-wide border-2 border-white shadow-xs flex items-center justify-center aspect-square bg-primary-600 text-secondary-400">
                                PRES
                            </div>
                            <div className="w-10 h-10 rounded-full font-bold text-[10px] tracking-wide border-2 border-white shadow-xs flex items-center justify-center aspect-square bg-tertiary-800 text-tertiary-200">
                                SUPR
                            </div>
                            <div className="w-10 h-10 rounded-full font-bold text-[10px] tracking-wide border-2 border-white shadow-xs flex items-center justify-center aspect-square bg-secondary-500 text-primary-950">
                                LEAD
                            </div>
                        </div>

                        {/* Description beside Avatars */}
                        <div className="flex flex-col">
                            <p className="font-headline font-bold text-xs sm:text-sm text-primary leading-tight">
                                1:4 Staff-to-Fellow Ratio
                            </p>
                            <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-snug">
                                Direct daily code reviews &amp; architecture whiteboarding
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual Showcase */}
                <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex items-center justify-center">
                    {/* Organic Sandy Background Blob */}
                    <div className="absolute -inset-4 sm:-inset-6 bg-[#F1E8DA] rounded-[60px] sm:rounded-[80px] -z-10 transform rotate-1 scale-105" />

                    {/* Stadium / Capsule Shaped Photo Container */}
                    <div className="relative w-full max-w-[420px] aspect-[10/13] rounded-t-[180px] rounded-b-[180px] overflow-hidden shadow-2xl bg-red/60">
                        <div className="relative w-full max-w-[420px] aspect-[10/13] rounded-t-[180px] rounded-b-[180px] overflow-hidden shadow-2xl border-4 border-white/60">
                            <img
                                src="/fellows-collaboration.jpg"
                                alt="TekZen Apprentices collaborating in the campus lab"
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Floating Chip on the Image: Indore Campus Lab */}
                            <div className="absolute bottom-12 right-6 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium text-neutral-800 flex items-center gap-2 shadow-md border border-white/70 z-100">
                                <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
                                <span>Indore Campus Lab</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge (Top-Right): "0 SLIDES EVER" */}
                    <div className="absolute -top-4 -right-2 sm:-right-4 bg-secondary-300 text-primary px-4 py-3 rounded-2xl shadow-lg border border-secondary-400/40 rotate-12 flex flex-col items-center justify-center z-20">
                        <span className="font-headline font-extrabold text-3xl leading-none text-primary">0</span>
                        <span className="text-[10px] font-bold tracking-wider uppercase mt-0.5 text-primary">SLIDES EVER</span>
                    </div>

                    {/* Floating Card (Bottom-Left): "Git PR Review Cadence" */}
                    <div className="absolute -bottom-8 -left-2 sm:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-neutral-200/80 flex items-start gap-3.5 max-w-[260px] z-20">
                        <div className="w-10 h-10 rounded-full bg-primary text-secondary-400 flex items-center justify-center shrink-0">
                            {/* Git branching icon */}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="6" cy="6" r="2.5" />
                                <circle cx="6" cy="18" r="2.5" />
                                <circle cx="18" cy="10" r="2.5" />
                                <path d="M6 8.5v7" />
                                <path d="M6 12a4 4 0 0 1 4-4h4" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-headline font-bold text-xs sm:text-sm text-primary leading-tight">
                                Git PR Review Cadence
                            </p>
                            <p className="text-[11px] text-neutral-500 mt-1 leading-normal">
                                Every commit audited before merges into mainline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Feature Highlights Bar */}
            <div className="mt-20 sm:mt-24 pt-10 pb-4 border-t border-neutral-300/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Item 1 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200/80 flex items-center justify-center shrink-0 text-primary">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="4" width="18" height="16" rx="3" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 9l3 3-3 3m5 0h4" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-headline font-bold text-sm text-primary">
                                Terminal–First (0 Slides)
                            </h4>
                            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                Theory is deduced live in the shell, vim buffers, and compiler diagnostics.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200/80 flex items-center justify-center shrink-0 text-primary">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                <circle cx="12" cy="13" r="2" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-headline font-bold text-sm text-primary">
                                Public GitHub Repos
                            </h4>
                            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                Build an unshakable proof-of-work portfolio with clean commits and documentation.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200/80 flex items-center justify-center shrink-0 text-primary">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-headline font-bold text-sm text-primary">
                                Daily PR Audits
                            </h4>
                            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                Senior Staff Architects dismantle and refactor your pull requests line-by-line.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-neutral-200/80 flex items-center justify-center shrink-0 text-primary">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-headline font-bold text-sm text-primary">
                                15 Devs Strict Cap
                            </h4>
                            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                                Uncompromising cohort intimacy. Every fellow receives customized architecture mentoring.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}