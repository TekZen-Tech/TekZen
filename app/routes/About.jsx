import React from "react";
import AboutHero from "./About/AboutHero";
import AboutMissionVision from "./About/AboutMissionVision";
import AboutPrinciples from "./About/AboutPrinciples";
import AboutFlightPath from "./About/AboutFlightPath";
import AboutLeadership from "./About/AboutLeadership";
import AboutCampusLab from "./About/AboutCampusLab";
import AboutCtaBanner from "./About/AboutCtaBanner";

export default function About() {
  return (
    <main className="min-h-screen bg-tertiary-50">
      {/* 1. Hero Section: Simplifying Tech Excellence */}
      <AboutHero />

      {/* 2. Mission & Vision */}
      <AboutMissionVision />

      {/* 3. Why Choose Tekzen Technologies? (6 Pillars) */}
      <AboutPrinciples />

      {/* 4. Our Learning Approach: Learn → Practice → Build → Grow */}
      <AboutFlightPath />

      {/* 5. Expert Guidance & Personalized Mentorship */}
      <AboutLeadership />

      {/* 6. Physical Facility & Indore Campus Labs */}
      <AboutCampusLab />

      {/* 7. Action Banner */}
      <AboutCtaBanner />
    </main>
  );
}