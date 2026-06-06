import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/About.css";
import MepoImage from "../assets/images/Mepo.jpg";

const About = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("experiences");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Motion.section
      className="about"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="about-content">
        <div className="hero-copy">
          <p className="hero-label">Hello, I&apos;m</p>
          <h1 className="hero-name">Raemil Amarillo</h1>
          <p className="hero-role">Information Technology Student</p>
          <p className="hero-description">
            BS Information Technology student with knowledge in software development, networking, database management, and information security.
            Completed a 700-hour internship at Open Access BPO, providing technical support and assisting in IT asset management.
            Developed strong technical, problem-solving, teamwork, and communication skills through hands-on experience in a professional IT environment.

          </p>

          <button className="hero-action" type="button" onClick={scrollToNextSection}>
            Scroll Down
          </button>
        </div>

        <Motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="hero-frame" />
          <Motion.img
            src={MepoImage}
            alt="Profile"
            className="profile-img"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
          />
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default About;
