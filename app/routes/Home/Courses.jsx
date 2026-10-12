import React from "react";
import { useNavigate } from "react-router";
import { overviewCourses } from "../Courses/coursesData.jsx";

export default function Courses({ heading, subheading, title, handleDetailView }) {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    if (handleDetailView) {
      handleDetailView(course);
    } else {
      navigate(`/courses?track=${course.id}#detailed-syllabus`);
    }
  };
  return (
    <section id="courses" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 my-8 flex flex-col">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#133e2b]">
            {heading ?? "CURATED ENGINEERING TRACKS"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#133e2b] font-headline leading-[1.15] tracking-tight mt-3">
            {subheading ?? "Engineered for depth, not superficial certificates."}
          </h2>
        </div>

        <div className="lg:col-span-5 flex items-end">
          <p className="text-base sm:text-lg text-neutral-600 font-body leading-relaxed">
            {title ?? "Every track is constructed around verifiable GitHub proof-of-work. Choose your specialization and master the mechanics."}
          </p>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {overviewCourses.map((course) => {
          return (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className="group relative p-6 sm:p-7 rounded-[2rem] border bg-white hover:bg-[#133e2b] text-neutral-900 border-neutral-200/80 hover:border-[#133e2b] shadow-xs hover:shadow-2xl transition-all duration-300 ease-out flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Top-Right Corner Accent Blob */}
              <div
                className={`absolute top-0 right-0 w-36 sm:w-44 h-32 sm:h-36 ${course.blobBg} group-hover:bg-[#1b4d36] rounded-tr-[2rem] rounded-bl-[4.5rem] transition-colors duration-300 pointer-events-none z-0`}
              />

              {/* Card Top Content */}
              <div className="relative z-10">
                {/* Badges Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  {/* Duration Badge */}
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#f2ece0] text-[#133e2b] group-hover:bg-white/10 group-hover:text-white transition-colors">
                    {course.duration}
                  </span>

                  {/* Special Tag Badge */}
                  {course.badgeType === "demo" ? (
                    <span className="bg-[#c8f269] text-[#133e2b] px-3.5 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#133e2b] inline-block" />
                      <span>{course.badge}</span>
                    </span>
                  ) : course.badgeType === "flagship" ? (
                    <span className="bg-[#133e2b] text-[#c8f269] group-hover:bg-[#c8f269] group-hover:text-[#133e2b] px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors">
                      {course.badge}
                    </span>
                  ) : (
                    <span className="bg-white/80 group-hover:bg-white/20 text-[#133e2b] group-hover:text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors shadow-2xs">
                      {course.badge}
                    </span>
                  )}
                </div>

                {/* Course Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-headline mt-4 mb-3 tracking-tight leading-snug text-[#133e2b] group-hover:text-[#c8f269] transition-colors">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-xs sm:text-sm font-body leading-relaxed mb-2 text-neutral-600 group-hover:text-neutral-200 transition-colors">
                  {course.description}
                </p>
              </div>

              {/* Card Bottom Area (Capstone + Footer) */}
              <div className="relative z-10 border-t pt-2 border-neutral-300 group-hover:border-white/10 transition-colors">
                {/* Capstone Project Label */}
                <span className="block text-[10px] sm:text-xs font-extrabold tracking-wider uppercase mb-2 text-neutral-500 group-hover:text-[#88b593] transition-colors">
                  CAPSTONE PROJECT
                </span>

                {/* Capstone Project Box */}
                <div className="p-3.5 rounded-2xl border bg-[#f5f2e9] border-[#e8e4d8] text-[#133e2b] group-hover:bg-[#1a4a35] group-hover:border-[#255b42] group-hover:text-white transition-all duration-300 flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-[#133e2b] flex items-center justify-center shrink-0 transition-colors">
                    {course.icon}
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-semibold leading-tight text-[#133e2b] group-hover:text-white transition-colors">
                    {course.capstoneProject}
                  </span>
                </div>

                {/* Footer Note & Action Button */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-medium text-neutral-600 group-hover:text-neutral-300 transition-colors">
                    {course.footerNote}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(course);
                    }}
                    className="bg-[#c8f269] hover:bg-[#bbf264] text-[#133e2b] px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-sm hover:scale-105 transition-all cursor-pointer shrink-0"
                  >
                    <span>Enquire Now</span>
                    <span className="font-extrabold text-sm">›</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}