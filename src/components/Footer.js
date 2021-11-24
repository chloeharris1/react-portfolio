import React from "react";
import "../styles/Footer.css";

import GitHub from "../images/GitHub-Mark-64px.png";
import LinkedIn from "../images/LI-In-Bug.png";
import Email from "../images/email_icon.png";
import Pinterest from "../images/pinterest_icon.png";

function Footer() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      {/* <h3>Contact Me</h3> */}
      <div className="main-footer">
        <div className="contact-links">
          <a href="mailto: chloe.a.harris17@gmail.com" target="blank">
            <img src={Email} />
          </a>
          <a href="https://github.com/chloeharris1/" target="blank">
            <img src={GitHub} />
          </a>
          <a href="https://www.linkedin.com/in/chloe-harris-51982322/">
            <img className="LinkedLogo" src={LinkedIn} />
          </a>
          <a
            href="https://www.pinterest.com/ChloeAnne17/_saved/"
            target="blank"
          >
            <img src={Pinterest} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
