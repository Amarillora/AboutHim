import React from "react";
import Navbar from "./pages/Navbar";
import StarBackground from "./pages/StarBackground";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main className="portfolio-page">
        <section id="about-me" className="portfolio-section">
          <About />
        </section>

        <section id="experiences" className="portfolio-section">
          <Experiences />
        </section>

        <section id="tools" className="portfolio-section">
          <Skills />
        </section>

        <section id="education" className="portfolio-section">
          <Education />
        </section>

        <section id="projects" className="portfolio-section">
          <Projects />
        </section>

        <section id="contact" className="portfolio-section">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
