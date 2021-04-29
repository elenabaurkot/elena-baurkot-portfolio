import React from "react";
import "./style.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="background flex contact-background" id="contact">
      <section id="contact-section">
        <div className="double-border">
          <h2>How to Reach Me</h2>
        </div>
        <br></br>
        <p>Elenabaurkot@gmail.com</p>
        <p>908.448.9598</p>
        <FaLinkedin className="icon" />
        <FaGithub className="icon" />
      </section>
    </div>
  );
}

export default Contact;
