import React from "react";
import { motion } from "framer-motion";
import "../css/Contact.css";

const Contact = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)" },
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>CONTACT INFORMATION</h2>

      <div className="contact-cards">
        {/* Email Card */}
        <motion.div
          className="contact-card"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <h3>EMAIL</h3>
          <p>raemilvinceamarillo@gmail.com</p>
        </motion.div>

        {/* Phone Card */}
        <motion.div
          className="contact-card"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <h3>PHONE</h3>
          <p>+63 919-815-5894</p>
        </motion.div>

        {/* Location Card */}
        <motion.div
          className="contact-card"
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <h3>ADDRESS</h3>
          <p>GMA Cavite, Philippines</p>
        </motion.div>

        {/* LinkedIn Card */}
       <motion.div
            className="contact-card"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <h3>LINKEDIN</h3>
            <motion.a
              href="https://www.linkedin.com/in/raemil-vince-amarillo-33117b397"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "underline", cursor: "pointer" }}
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px #00ffff",
                color: "#00ffff",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            >
              www.linkedin.com/in/raemil-vince-amarillo-33117b397
            </motion.a>
          </motion.div>

      </div>
    </motion.div>
  );
};

export default Contact;
