import React from "react";
import { motion } from "framer-motion";
import "../css/Skills.css";

const Skills = () => {
  const skills = [
    {
title: "COMPUTER NETWORKING",
  desc: "Experienced in configuring network systems, managing routing, and ensuring stable connectivity. Knowledgeable in network diagnostics, security practices, and foundational protocols."
},
{
  title: "HARDWARE & SOFTWARE TROUBLESHOOTING",
  desc: "Skilled in diagnosing and resolving hardware failures across desktops and laptops. Adept at addressing software-related issues, system errors, performance problems, and OS configurations."
},
{
  title: "REACT",
  desc: "Specialized in building scalable and interactive user interfaces using modern React practices. Proficient in component architecture, state management, and responsive, animation-driven UI design."
},
{
  title: "FLUTTER",
  desc: "Experienced in developing cross-platform mobile applications with clean and efficient UI structures. Capable of integrating backend services and ensuring smooth, consistent app performance."
},
{
  title: "FIREBASE",
  desc: "Proficient in implementing authentication, real-time databases, and cloud storage through Firebase services. Focused on creating secure, scalable, and cloud-optimized application workflows."
},
{
  title: "SUPABASE",
  desc: "Knowledgeable in building backend APIs and managing PostgreSQL databases through Supabase. Experienced in structured data modeling, authentication flows, and efficient API integration."
}

  ];

  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>SKILLS</h2>
      <br />
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <span className="skill-title">{skill.title}</span>
            <p className="skill-description">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
