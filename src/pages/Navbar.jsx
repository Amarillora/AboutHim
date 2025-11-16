import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((o) => !o);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">✨ MY PORTFOLIO</h2>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            EDUCATION
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
