import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Works from "./Works";

function MainHeroPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
}

export default MainHeroPage;
