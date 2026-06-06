import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Skills.css";

const Skills = () => {
  const skillGroups = [
    {
      label: "FRONTEND",
      items: [
        { name: "JavaScript", short: "JS", accent: "#f7df1e" },
        { name: "TypeScript", short: "TS", accent: "#3178c6" },
        { name: "React", short: "R", accent: "#61dafb" },
        { name: "Next.js", short: "N", accent: "#ffffff" },
        { name: "Tailwind CSS", short: "TW", accent: "#38bdf8" },
        { name: "Bootstrap", short: "B", accent: "#7c3aed" },
      ],
    },
    {
      label: "BACKEND",
      items: [
        { name: "Node.js", short: "N", accent: "#68a063" },
        { name: "Laravel", short: "L", accent: "#e0234e" },
        { name: "PHP", short: "PHP", accent: "#f4f4f4" },
        { name: "Java", short: "J", accent: "#2bc033" },
      ],
    },
    {
      label: "DATABASE",
      items: [
        { name: "MySQL", short: "MY", accent: "#00758f" },
        { name: "PostgreSQL", short: "PG", accent: "#336791" },
        { name: "Supabase", short: "SB", accent: "#10aa50" },
        { name: "Firebase", short: "FB", accent: "#ffffff" },
      ],
    },
    {
      label: "TOOLS",
      items: [
        { name: "Git", short: "GT", accent: "#f05133" },
        { name: "VsCode", short: "VS", accent: "#2496ed" },
        { name: "Figma", short: "FG", accent: "#ff9900" },
      ],
    },
  ];

  return (
    <Motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>SKILLS</h2>

      <div className="skills-stack">
        {skillGroups.map((group, groupIndex) => (
          <Motion.div
            key={group.label}
            className="skill-group"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: groupIndex * 0.08 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="skill-group-label">{group.label}</div>

            <div className="skill-icons-grid">
              {group.items.map((item) => (
                <Motion.div
                  key={item.name}
                  className="skill-item"
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 220, damping: 18 }}
                >
                  <span className="skill-icon" style={{ background: item.accent }}>
                    {item.short}
                  </span>
                  <span className="skill-name">{item.name}</span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Skills;
