import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((o) => !o);
  const closeMenu = () => setOpen(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    closeMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">✨My Portfolio✨</div>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        type="button"
        aria-label="Toggle portfolio navigation"
        aria-expanded={open}
        aria-controls="portfolio-menu"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="portfolio-menu" className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <button type="button" onClick={() => scrollToSection("about-me")}>About Me</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection("experiences")}>Experiences</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection("tools")}>Skills</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection("education")}>Education</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection("projects")}>Projects</button>
        </li>
        <li>
          <button type="button" onClick={() => scrollToSection("contact")}>Contact</button>
        </li>
      </ul>
    </nav>
  ); 
};

export default Navbar;
