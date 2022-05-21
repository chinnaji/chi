import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStacks from "./TechStacks";

function MainHeroPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <TechStacks />
      <Projects />
      <Contact />
    </main>
  );
}

export default MainHeroPage;
