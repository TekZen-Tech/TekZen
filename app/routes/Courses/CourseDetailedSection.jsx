import React, { useState } from "react";
import { coursesSyllabusData } from "./coursesData.jsx";

export { coursesSyllabusData };

export default function CourseDetailedSection({
  selectedCourseId = "c-cpp-systems-mastery",
  onSelectCourse,
  onClaimDemo,
}) {
  const [activeCourseId, setActiveCourseId] = useState(selectedCourseId);

  // Sync if parent updates selectedCourseId
  React.useEffect(() => {
    if (selectedCourseId && coursesSyllabusData[selectedCourseId]) {
      setActiveCourseId(selectedCourseId);
    }
  }, [selectedCourseId]);

  const courseData =
    coursesSyllabusData[activeCourseId] ||
    coursesSyllabusData["c-cpp-systems-mastery"];

  const handleTrackChange = (courseId) => {
    setActiveCourseId(courseId);
    if (onSelectCourse) {
      onSelectCourse(courseId);
    }
  };

  const handleClaimClick = () => {
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
    <section
      id="detailed-syllabus"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-6"
    >
      {/* Outer Card Container with clean rounded aesthetic matching Image 1 */}
      <div className="bg-[#FAF8F5] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-14 border border-neutral-200/80 shadow-sm">
        
        {/* Track Selector Tabs so users can toggle tracks */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-neutral-300/60 scrollbar-none">
          <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider shrink-0 mr-2">
            SELECT TRACK:
          </span>
          {Object.keys(coursesSyllabusData).map((id) => {
            const item = coursesSyllabusData[id];
            const isActive = activeCourseId === id;
            return (
              <button
                key={id}
                onClick={() => handleTrackChange(id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#133e2b] text-[#c8f269] shadow-sm"
                    : "bg-white text-neutral-600 hover:text-[#133e2b] hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-3xl">
            {/* Top Badge matching Image 1 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#133e2b] text-[#c8f269] text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase">
              <svg
                className="w-3.5 h-3.5 text-[#c8f269]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <rect x="9" y="9" width="6" height="6" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
              <span>{courseData.badge}</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#133e2b] font-headline tracking-tight leading-[1.1] mt-4">
              {courseData.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-600 font-body leading-relaxed mt-3 max-w-2xl">
              {courseData.subtitle}
            </p>
          </div>

          {/* Action CTAs matching Image 1 */}
          <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2">
            <button
              onClick={handleClaimClick}
              className="bg-[#c8f269] hover:bg-[#bcf056] text-[#133e2b] font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              {courseData.demoButtonText}
            </button>
            {courseData.pdfUrl ? (
              <a
                href={courseData.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-neutral-50 text-[#133e2b] font-bold border border-neutral-300 px-6 py-3 rounded-full text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#133e2b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>{courseData.pdfButtonText}</span>
              </a>
            ) : (
              <button
                onClick={() => alert(`Syllabus brochure for ${courseData.title} is being updated. Please contact the Indore campus.`)}
                className="bg-white hover:bg-neutral-50 text-[#133e2b] font-bold border border-neutral-300 px-6 py-3 rounded-full text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4 text-[#133e2b]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>{courseData.pdfButtonText}</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Grid: Left Timeline Cards & Right Code Sandbox Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-10 sm:mt-12 items-start">
          
          {/* Left Column: Syllabus Week Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {courseData.modules.map((mod, idx) => {
              if (mod.isCapstone) {
                // Special Capstone Card with distinct green border matching Image 1
                return (
                  <div
                    key={idx}
                    className="rounded-2xl p-5 sm:p-6 bg-white border-2 border-[#133e2b] shadow-sm flex flex-col transition-all duration-200"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="bg-[#133e2b] text-[#c8f269] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        {mod.weeks}
                      </span>
                      <span className="text-[11px] font-bold text-[#133e2b] uppercase tracking-wider">
                        {mod.category}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#133e2b] font-headline mt-3">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                      {mod.description}
                    </p>
                  </div>
                );
              }

              // Standard Week Card
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-5 sm:p-6 bg-white border border-neutral-200/90 shadow-xs flex flex-col transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="bg-[#c8f269] text-[#133e2b] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      {mod.weeks}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      {mod.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#133e2b] font-headline mt-3">
                    {mod.title}
                  </h3>

                  {mod.points && mod.points.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {mod.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-[#133e2b] font-bold shrink-0 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Code Terminal Window & Candidate Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Dark Terminal Window matching Image 1 */}
            <div className="bg-[#0b1c13] text-[#c8f269] rounded-3xl p-5 sm:p-6 shadow-2xl border border-[#1b4a35] flex flex-col">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#1b4a35]/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                </div>
                <span className="text-neutral-400 font-mono text-[11px] tracking-tight">
                  {courseData.codeFileName}
                </span>
                <span className="text-neutral-500 hover:text-white cursor-pointer transition">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>

              {/* Code Content */}
              <pre className="mt-4 font-mono text-[11px] sm:text-xs leading-relaxed text-[#c8f269]/90 overflow-x-auto selection:bg-[#c8f269] selection:text-[#133e2b]">
                <code>{courseData.codeSnippet}</code>
              </pre>

              {/* Terminal Footer Status matching Image 1 */}
              <div className="mt-6 pt-3 border-t border-[#1b4a35] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#8cb58f]">
                <span>{courseData.terminalFooter.left}</span>
                <span>{courseData.terminalFooter.right}</span>
              </div>
            </div>

            {/* Ideal Candidate Profile Card matching Image 1 */}
            <div className="bg-[#faeede] rounded-3xl p-6 border border-[#eedfc9] flex items-start gap-4 shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#133e2b] text-[#c8f269] flex items-center justify-center shrink-0 shadow-xs">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="font-headline font-bold text-sm text-[#133e2b]">
                  Ideal Candidate Profile
                </h4>
                <p className="text-xs sm:text-sm text-[#4a3f33] mt-1 leading-relaxed">
                  {courseData.idealCandidate}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
