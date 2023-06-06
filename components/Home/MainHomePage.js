import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStacks from "./TechStacks";

function MainHeroPage() {
  return (
    <main className="overflow-x-hidden h-full">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <TechStacks />
      {/* <Contact /> */}
    </main>
  );
}

export default MainHeroPage;
