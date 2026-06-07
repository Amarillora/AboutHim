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
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <h2>SKILLS</h2>

      <div className="skills-stack">
        {skillGroups.map((group, groupIndex) => (
          <Motion.div
            key={group.label}
            className="skill-group"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: groupIndex * 0.04 }}
            viewport={{ once: true, amount: 0.18 }}
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
                    <Icon name={item.name} />
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

// Small inline icon component to avoid adding new deps and keep SVGs lightweight.
function Icon({ name }) {
  const key = String(name).toLowerCase();

  if (key.includes("data") || key.includes("mysql") || key.includes("post") || key.includes("mongo") || key.includes("supabase") || key.includes("firebase") || key.includes("prisma")) {
    // database cylinder
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#08121d" strokeWidth="1.6" fill="#08121d" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#08121d" strokeWidth="1.6" fill="#08121d" />
      </svg>
    );
  }

  if (key.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM9 17.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 14.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#08121d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 5v6.5L9 17" stroke="#08121d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (key.includes("figma") || key.includes("design") || key.includes("ui")) {
    // simple pen tool
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21l3-1 11-11 1-3-3 1L4 20z" stroke="#08121d" strokeWidth="1.6" fill="#08121d" />
      </svg>
    );
  }

  if (key.includes("node") || key.includes("express") || key.includes("laravel") || key.includes("php") || key.includes("java")) {
    // server stack
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="5" rx="1" stroke="#08121d" strokeWidth="1.6" fill="#08121d" />
        <rect x="3" y="12" width="18" height="5" rx="1" stroke="#08121d" strokeWidth="1.6" fill="#08121d" />
      </svg>
    );
  }

  // default code / bracket icon
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 7L4 12l4.5 5" stroke="#08121d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 7L20 12l-4.5 5" stroke="#08121d" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
