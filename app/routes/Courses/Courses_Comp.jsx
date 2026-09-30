import React, { useState } from "react";
import Hero from "./Hero";
import Courses from "../Home/Courses";
import CourseDetailedSection from "./CourseDetailedSection";
import DemoPassBanner from "./DemoPassBanner";
import CampusVisitAndTrial from "./CampusVisitAndTrial";

export default function Courses_Comp() {
    const [selectedCourseId, setSelectedCourseId] = useState("c-cpp-systems-mastery");

    // When a course card in the overview grid is clicked
    const handleDetailView = (course) => {
        if (course && course.id) {
            setSelectedCourseId(course.id);
        }
        // Smooth scroll down to the detailed syllabus section
        const syllabusEl = document.getElementById("detailed-syllabus");
        if (syllabusEl) {
            syllabusEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Scroll to demo registration form
    const handleClaimDemo = () => {
        const demoEl = document.getElementById("book-demo");
        if (demoEl) {
            demoEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="min-h-screen bg-tertiary-50">
            {/* 1. Hero Section with artisanal underline */}
            <Hero />

            {/* 2. Overview of Curated Engineering Tracks */}
            <Courses
                handleDetailView={handleDetailView}
                heading="Advanced Curriculum"
                subheading="Deep Dive: Core Engineering Disciplines"
                title="We train engineers who design, deploy, and maintain critical systems. Our tracks are built around terminal-first execution and production-grade artifacts."
            />

            {/* 3. Deep-Dive Detailed Syllabus Section (Matching Image 1) */}
            <CourseDetailedSection
                selectedCourseId={selectedCourseId}
                onSelectCourse={setSelectedCourseId}
                onClaimDemo={handleClaimDemo}
            />

            {/* 4. 3-Day Trial Callout Banner (Matching Image 2 Top) */}
            <DemoPassBanner onClaimDemo={handleClaimDemo} />

            {/* 5. Physical Headquarters & Trial Reservation Form (Matching Image 2 Bottom) */}
            <CampusVisitAndTrial />
        </main>
    );
}