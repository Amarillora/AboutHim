import React from "react";
import { motion } from "framer-motion";
import "../css/Education.css";

const Education = () => {
  const items = [
    {
      title:
        "Bachelor of Science in Information Technology (Mobile & Web Applications)",
      school: "National University – Dasmariñas | 2022 – 2025",
      grades: [
        "1st Year — Dean’s List. GWA: 3.25",
        "2nd Year — Dean’s List. GWA: 3.50. (with High Honors)",
        "3rd Year — Dean’s List. GWA: 3.25",
        "4th Year — Ongoing",
      ],
    },
    {
      title: "Senior High School (STEM Strand)",
      school: "Philippine Christian School | 2020 – 2022",
      grades: [
        "Grade 11. Grade: 80% Average",
        "Grade 12. Grade: 85% Average",
      ],
    },
  ];

  return (
    <motion.div
      className="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="edu-title">EDUCATION</h2>

      <div className="edu-list">
        {items.map((item, i) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
