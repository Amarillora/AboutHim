import React from "react";
import { motion } from "framer-motion";
import "../css/About.css";
import MepoImage from "../assets/images/Mepo.jpg";
import CrimpImage from "../assets/images/Crimp.jpg";

const About = () => {
  const projects = [
    { name: "CAVITE:VR – Virtual Reality Landmarks Exploration", link: "https://cavite-vr.onrender.com" },
    { name: "ElectZone – Online Voting System for School Elections", link: "https://yourprojectlink5.com" },
  ];

  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "250px",
          width: "100%",
        }}
      >
        <br /><br />
  

        {/* -------- ABOUT BLOCK 1 -------- */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.img
        src={MepoImage}
        alt="Profile"
        className="profile-img"
        whileHover={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

          <div className="text">
            <h1 className="glow">Raemil Vince</h1>
            <br /><br />
            <p>
              Raemil Vincent Amarillo, 21, is a fourth-year Bachelor of Science in Information Technology
              major in Mobile and Web Applications (BSIT-MWA) student at National University
              Dasmariñas, with a strong foundation in both front-end and back-end development.
            </p>
          </div>
        </motion.div>
        <br /><br />
        {/* -------- ABOUT BLOCK 2 -------- */}
        <motion.div
          className="about-content1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="text">
            <h1 className="glow">THINGS I LIKE TO DO </h1>
            <br /><br />
            <p>
              With my complete set of crimping tools, I can handle crimping network cables. 
              I am also knowledgeable in computer networking, which includes configuring client/server systems, installing software, 
              and setting up and troubleshooting hardware and peripherals.
            </p>
          </div>

          <motion.img
            src={CrimpImage}
            alt="Profile"
            className="profile-img1"
            whileHover={{ rotate: 360 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        </motion.div>
        <br /><br />
        <br /><br />
        {/* -------- PROJECTS SECTION -------- */}
        <div className="about-projects">
          <h1 className="glow">PROJECTS</h1>
          <br /><br />

          <motion.div
            className="projects-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <ul>
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1, // slight stagger per item
                  }}
                  viewport={{ once: false }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
