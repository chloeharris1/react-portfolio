import React from "react";
import "../styles/Navbar.css";

import Resume from "../assets/Resume.pdf";

function Navbar() {
  return (
    <div className="container-fluid mb-5">
      <div className="initials">Chloe Harris</div>
      <div className="navlinks">
        <a href="#">About Me</a>
        <a href="#">Work</a>
        <a href="#contact-me">Contact</a>
        <a href={Resume} target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
