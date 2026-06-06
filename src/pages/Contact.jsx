import React from "react";
import { motion as Motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import "../css/Contact.css";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "raemilvinceamarillo@gmail.com",
      href: "mailto:raemilvinceamarillo@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/raemil-vince-amarillo-33117b397",
      href: "https://www.linkedin.com/in/raemil-vince-amarillo-33117b397",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/Amarillora",
      href: "https://github.com/Amarillora",
      icon: Github,
    },
  ];

  const footerLinks = [
    {
      label: "GitHub",
      href: "https://github.com/Amarillora",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/raemil-vince-amarillo-33117b397",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:raemilvinceamarillo@gmail.com",
      icon: Mail,
    },
  ];

  const ContactRow = ({ item }) => {
    const RowIcon = item.icon;

    return (
      <a className="contact-row" href={item.href} target={item.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        <span className="contact-row-icon">
          <RowIcon size={20} strokeWidth={2.2} />
        </span>
        <span className="contact-row-text">
          <strong>{item.label}</strong>
          <span>{item.value}</span>
        </span>
      </a>
    );
  };

  return (
    <Motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-panel">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-list">
          {contactLinks.map((item, index) => (
            <Motion.div
              key={item.label}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <ContactRow item={item} />
            </Motion.div>
          ))}
        </div>
      </div>

      <footer className="contact-footer">
        <div className="contact-footer-icons">
          {footerLinks.map((item) => (
            <Motion.a
              key={item.label}
              className="footer-icon-link"
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
              whileHover={{ y: -2, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <item.icon size={16} strokeWidth={2.2} />
            </Motion.a>
          ))}
        </div>
        <small className="contact-footer-note">© 2026 Raemil Vince Amarillo</small>
      </footer>
    </Motion.div>
  );
};

export default Contact;
