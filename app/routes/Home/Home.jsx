import { Link } from "react-router";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Stats from "./Stats";
import Courses from "./Courses";
import Different from "./Different";
import Pedagogy from "./Pedagogy";
import TrialDemo from "./TrialDemo";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
export function Home() {
    return (
        <>
            <section className="w-full min-h-[90vh] lg:h-[90vh] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-0 px-4 sm:px-8 md:px-12 py-10 lg:py-0 overflow-x-hidden">
                <div className="left-sec-img w-full lg:w-[50%] flex justify-center items-center relative py-6 sm:py-10 my-4 lg:my-0">
                    <div className="absolute w-[100%] h-[100%] sm:w-[90%] sm:h-[90%] bg-[#c8f269]/15 rounded-full blur-3xl -z-10 pointer-events-none" />

                    <div className="relative w-[70%] max-w-[300px] sm:max-w-none sm:w-[50%] md:w-[55%] aspect-[4/5]">

                        <div className="rounded-img w-full h-full bg-[#eaeae4] border-4 border-white shadow-[0_20px_45px_rgba(0,0,0,0.12)] rounded-[4rem_4rem_50%_50%] overflow-hidden relative z-10">
                            <img
                                src="/students.png"
                                alt="TekZen Engineering Fellows collaborating in the campus lab"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        <div className="absolute -top-4 -right-3 sm:-top-16 sm:-right-8 lg:-top-22 lg:-right-10 rounded-[60%/60%] bg-white p-1.5 sm:p-1 shadow-xl z-5 rotate-25">
                            <div className="bg-[#ebd9c1] w-18 h-24 sm:w-20 sm:h-28 lg:w-22 lg:h-30 rounded-[60%/60%] flex flex-col items-center justify-center text-center">
                                <span className="text-sm sm:text-base lg:text-lg font-extrabold text-[#133e2b] leading-none">100%</span>
                                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-[#133e2b] mt-1 whitespace-nowrap">Code First</span>
                            </div>
                        </div>

                        <div className="absolute top-1/2 -right-4 sm:-right-7 -translate-y-1/2 bg-[#133e2b] text-[#c8f269] px-3 py-3.5 sm:px-4 sm:py-5 rounded-full flex flex-col items-center justify-center text-center shadow-2xl z-20 border border-[#1b4a35]">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-[#133e2b] border border-[#c8f269]/40 flex items-center justify-center text-[#c8f269] mb-1">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </div>
                            <span className="text-[9px] sm:text-xs font-bold leading-tight text-[#c8f269]">Zero<br />Slides</span>
                        </div>

                        <div className="absolute -bottom-5 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-1.5 sm:p-1 rounded-[2rem] shadow-2xl -rotate-15 z-20">
                            <div className="bg-[#c8f269] text-[#133e2b] px-3.5 py-2.5 sm:px-5 sm:py-3.5 rounded-[1.5rem] flex flex-col items-start">
                                <div className="flex items-center gap-1.5 text-[8px] sm:text-[10px] font-extrabold tracking-wider uppercase opacity-90">
                                    <span className="w-3 h-3 rounded-full bg-[#133e2b] flex items-center justify-center text-[8px] text-[#c8f269] font-bold">✓</span>
                                    <span>INDORE COHORT</span>
                                </div>
                                <span className="text-xs sm:text-base font-extrabold text-[#133e2b] mt-0.5 sm:mt-1 leading-tight">15 Devs Max</span>
                                <span className="text-[9px] sm:text-xs font-semibold text-[#133e2b]/80 mt-0.5">Zero Lecture Halls</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right-sec-text w-full lg:w-[50%] flex justify-start items-start flex-col">
                    <button className="inline-flex items-center gap-2 bg-[#c8f269] text-[#133e2b] px-3 py-1.5 sm:px-2 sm:py-1 rounded-full text-[10px] font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-[#b8e855]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#133e2b] shrink-0" />
                        <span>ADMISSIONS OPEN</span>
                        <span className="text-[10px]">•</span>
                        <span>INDORE &amp; HYBRID</span>
                    </button>
                    {/* Heading */}
                    <h1 className="heading text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-[#133e2b] leading-[1.15] sm:leading-[1.1] tracking-tight mt-4 sm:mt-5">
                        Engineer Your<br />
                        Career in<br />
                        <span className="relative inline-block isolate">
                            <span className="relative z-10 text-black">Production,</span>
                            <span className="absolute left-0 bottom-[-6px] sm:bottom-[-10px] w-full h-2.5 sm:h-3.5 bg-[#c8f269] rounded-full z-0 -rotate-1 sm:-rotate-[1.5deg] origin-left" />
                        </span><br />
                        Not on Paper
                    </h1>

                    {/* Subheading */}
                    <p className="subheading text-base sm:text-lg font-bold text-[#133e2b] mt-4 sm:mt-6">
                        Indore's premier engineering incubator &amp; training institute.
                    </p>

                    {/* Detail */}
                    <p className="detail text-sm sm:text-base text-neutral-600 leading-relaxed mt-2.5 sm:mt-3 max-w-xl">
                        Gain practical skills in C/C++, Full Stack, Data Science &amp; AI/ML with live hands-on client projects, production pull requests, and direct placement assistance.
                    </p>
                    <div className="more-buttons flex flex-wrap sm:flex-row items-center mt-6 sm:mt-10 gap-3 sm:gap-6">
                        <Link to="/courses#book-demo" className="inline-flex items-center gap-2 bg-[#c8f269] text-[#133e2b] px-4 py-2.5 sm:px-4 sm:py-2 rounded-full text-[12px] font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-[#b8e855]">
                            <span>Book Free Demo</span>
                            <ArrowRightIcon className="w-4 h-4" strokeWidth={2.5} />
                        </Link>
                        <Link to="/courses" className="inline-flex items-center gap-2 bg-tertiary-300 text-[#133e2b] px-4 py-2.5 sm:px-4 sm:py-2 rounded-full text-[12px] font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                            Explore Courses
                        </Link>
                    </div>

                    {/* Mentor Info Section */}
                    <div className="w-full mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-neutral-300/60 flex items-center gap-3 sm:gap-4">
                        {/* Overlapping Badges */}
                        <div className="flex items-center -space-x-3 shrink-0">
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#c8f269] text-[#133e2b] flex items-center justify-center font-bold text-xs ring-2 ring-tertiary-50 shadow-xs">
                                C++
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e7dac3] text-[#133e2b] flex items-center justify-center font-bold text-xs ring-2 ring-tertiary-50 shadow-xs">
                                FS
                            </div>
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#133e2b] text-[#c8f269] flex items-center justify-center font-bold text-xs ring-2 ring-tertiary-50 shadow-xs">
                                AI
                            </div>
                        </div>

                        {/* Mentor Description */}
                        <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-snug max-w-md">
                            Mentored by Principal Engineers from top tier product ecosystems in Indore &amp; Bangalore.
                        </p>
                    </div>
                </div>
            </section>
            <Stats />
            <Courses />
            <Different/>
            <Pedagogy/>
            <TrialDemo/>
            <Testimonial/>
            <FAQ/>
        </>
    )
}
export default Home;