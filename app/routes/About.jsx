import React from "react";
import AboutHero from "./About/AboutHero";
import AboutPrinciples from "./About/AboutPrinciples";
import AboutLeadership from "./About/AboutLeadership";
import AboutFlightPath from "./About/AboutFlightPath";
import AboutCampusLab from "./About/AboutCampusLab";
import AboutCtaBanner from "./About/AboutCtaBanner";

export default function About() {
  return (
    <main className="min-h-screen bg-tertiary-50">
      {/* 1. The Manifesto & Creed Hero Section (Image 1) */}
      <AboutHero />

      {/* 2. Institutional Principles (Image 2) */}
      <AboutPrinciples />

      {/* 3. Leadership & Active Staff Mentors (Image 3) */}
      <AboutLeadership />

      {/* 4. The Fellowship Flight Path 4-Phase Progression (Image 4) */}
      <AboutFlightPath />

      {/* 5. Physical Facility & Indore Engineering Lab (Image 5 Top) */}
      <AboutCampusLab />

      {/* 6. High-Impact Call to Action Banner (Image 5 Bottom) */}
      <AboutCtaBanner />
    </main>
  );
}