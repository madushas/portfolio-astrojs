"use client";

import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import TechStack from "./TechStack";
import TopArticles from "./TopArticles";
import ContactMe from "./ContactMe";
import React, { Suspense } from "react";
import ExperienceSection from "./Experince";

// Dynamic import for heavy components
const Spotlight = React.lazy(() => import("../ui/animated-background"));

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
        <Spotlight />
      </Suspense>
      <Hero id="home" />
      <Services id="services" />
      <TechStack id="techstack" />
      <About id="about" />
      <ExperienceSection id="experience" />
      <Projects id="projects" />
      <TopArticles id="toparticles" />
      <ContactMe id="contact" />
    </>
  );
}
