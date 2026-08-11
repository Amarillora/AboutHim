import React from "react";
import { motion as Motion } from "framer-motion";
import "../css/Education.css";

const Education = () => {
  const items = [
    {
      title:
        "Bachelor of Science in Information Technology (Mobile & Web Applications)",
      school: "National University – Dasmariñas | 2022 – 2026",
      Cummulative General Weighted Average: [
        "CGWA: 3.18",
      ],
    },
    {
      title: "Senior High School (STEM Strand)",
      school: "Philippine Christian University | 2020 – 2022",
      grades: [
        "Grade 11. Grade: 80% Average",
        "Grade 12. Grade: 85% Average",
      ],
    },
  ];

  return (
    <Motion.div
      className="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="edu-title">EDUCATION</h2>

      <div className="edu-list">
        {items.map((item, i) => (
          <Motion.div
            key={i}
            className="edu-card"
            initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 + 0.2, type: "spring", stiffness: 120 }}
          >
            <h3 className="edu-heading">{item.title}</h3>
            <p className="edu-school">{item.school}</p>

            <ul className="grade-list">
              {item.grades.map((g, index) => (
                <li key={index}>{g}</li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </div>
    </Motion.div>
  );
};

export default Education;
