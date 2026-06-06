import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Projects.css";
import CaviteVRImage from "../assets/images/CaviteVR.png";
import ElectZoneImage from "../assets/images/ElectZone.png";
import KarinDiryaImage from "../assets/images/KarinDirya.png";
import CheckInnImage from "../assets/images/CheckInn.png";
import SeatAndStoryImage from "../assets/images/Seats.png";

const Projects = () => {
  const projects = [
    {
      title: "CAVITE:VR - Virtual Reality Landmarks Exploration",
      description: "Immersive virtual tour experience for showcasing Cavite landmarks.",
      tags: ["React", "3D VR", "Web and Mobile App"],
      link: "https://cavite-vr.onrender.com",
      accent: "linear-gradient(135deg, rgba(74, 20, 140, 0.95), rgba(11, 11, 28, 0.98))",
      previewLabel: "Featured",
      previewImage: CaviteVRImage,
    },
    {
      title: "ElectZone - Online Voting System for School Elections",
      description: "School election platform with secure voting and clear result tracking.",
      tags: ["React", "Supabase", "Web App"],
      link: "https://elect-zone-five.vercel.app/",
      accent: "linear-gradient(135deg, rgba(78, 158, 158, 0.95), rgba(10, 14, 28, 0.98))",
      previewLabel: "Featured",
      previewImage: ElectZoneImage,
    },
    {
      title: "KarinDirya - Basic Restaurant Management System",
      description: "Restaurant operations dashboard with inventory and workflow handling.",
      tags: ["React", "Supabase", "Dashboard", "Restaurant"],
      link: "https://karin-dirya.vercel.app/",
      accent: "linear-gradient(135deg, rgba(226, 150, 35, 0.95), rgba(12, 15, 14, 0.98))",
      previewLabel: "Featured",
      previewImage: KarinDiryaImage,
    },
    {
      title: "Check-Inn - Condominium Management Application",
      description: "Condominium management app for tenant, unit, and service coordination.",
      tags: ["Flutter", "Firebase", "Mobile App"],
      link: "https://github.com/delgadjp/Raven-Nest/releases/tag/v.0.0.2-beta",
      accent: "linear-gradient(135deg, rgba(56, 126, 216, 0.95), rgba(12, 11, 10, 0.98))",
      previewLabel: "Featured",
      previewImage: CheckInnImage,
    },
    {
      title: "Seat and Story - Wedding Seating Arrangement",
      description: "Elegant guest seating planner for weddings, helping guests find their assigned tables with style.",
      tags: ["React", "UI Design", "Sitting Arrangement"],
      link: "#projects",
      accent: "linear-gradient(135deg, rgba(10, 40, 20, 0.95), rgba(2, 90, 69, 0.98))",
      previewLabel: "New",
      previewImage: SeatAndStoryImage,
    },
  ];

  return (
    <Motion.div
      className="projects-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="projects-header">
        <h1 className="glow">Featured Projects</h1>
        <p className="projects-subtitle">A showcase of my creative work and technical expertise</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ background: project.accent }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.09 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="project-preview">
              <span className="project-badge">{project.previewLabel}</span>
              <img className="project-preview-image" src={project.previewImage} alt={`${project.title} preview`} />
              <div className="project-preview-art" />
            </div>

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-link-row">
                <span>View Project</span>
              </div>
            </div>
          </Motion.a>
        ))}
      </div>
    </Motion.div>
  );
};

export default Projects;
