import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h2 className="logo">✨ MY PORTFOLIO</h2>
    <ul className="nav-links">
      <li><NavLink to="/" end>ABOUT</NavLink></li>
      <li><NavLink to="/education">EDUCATION</NavLink></li>
      <li><NavLink to="/skills">SKILLS</NavLink></li>
      <li><NavLink to="/contact">CONTACT</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
