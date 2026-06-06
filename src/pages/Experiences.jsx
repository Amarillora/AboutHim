import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Experiences.css";

const Experiences = () => {
  const experiences = [
    {
      title: "Desktop Support / IT Custodian Intern",
      company: "Open Access BPO Makati (On site)",
      period: "Nov 2025 - May 2026",
      points: [
        "Troubleshot hardware, software, and network-related issues for employees and agents",
        "Diagnosed and repaired defective desktops, laptops, and computer peripherals.",
        "Maintained and updated IT asset inventory and tracking records.",
        "Prepared gate passes and documentation for IT asset movement and deployment.",
        "Assisted in setting up workstations, including desktop preparation and device configuration.",
      ],
      tags: ["Desktop Support", "IT Asset Management", "Hardware Troubleshooting", "Network Support", "Inventory Management"],
    },
    {
      title: "Web and App Developer",
      company: "National University Dasmariñas (Student)",
      period: "Aug 2022 - Aug 2026",
      points: [
        "Designed and developed academic web and mobile applications to solve real-world problems.",
        "Worked in team-based projects to analyze requirements, design systems, and implement solutions.",
        "Created responsive user interfaces using HTML, CSS, JavaScript, React, and Flutter.",
        "Integrated databases and backend services using Firebase, Supabase, and PHP.",
        "Tested, debugged, and refined applications to ensure functionality, usability, and performance.",
      ],
      tags: ["React", "Flutter", "Bootstrap", "Firebase", "Supabase", "GitHub"],
    },
  ];

  return (
    <Motion.div
      className="experiences"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="experience-header">
        <h1 className="glow">Experience</h1>
        <p className="experience-subtitle">My experiences journey as an information technology student</p>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <Motion.div
            key={experience.title}
            className="experience-row"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.12 }}
            viewport={{ once: false, amount: 0.25 }}
          >
            <span className="experience-dot" />

            <Motion.article
              className="experience-card"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <div className="experience-card-head">
                <div>
                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>
                </div>
                <span className="experience-period">{experience.period}</span>
              </div>

              <ul className="experience-points">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Motion.article>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Experiences;
