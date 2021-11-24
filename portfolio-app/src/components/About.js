import React from "react";
import "../styles/About.css";

import ProfilePic from "../images/chloe_cp.jpg";

function About() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <h1 className="about mt-5 mb-3">About Me</h1>
        <div className="row">
          <div className="col-4">
            <img className="responsive" id="profilepic" src={ProfilePic} />
          </div>
          <div className="col-8">
            <p className="bio">
              I am a Full-Stack Web Development student making the transition
              from the apparel industry to a professional Web Development
              career. I have an extensive background of 10 years in production
              and operations within the Fashion industry, working for
              specialized designers such as Halston to corporation driven lines
              like Tommy Bahama. I enjoyed working in the fashion industry, but
              ultimately have been drawn to coding ever since I was exposed to
              it. Like the pieces of a lego, putting code together just strikes
              a balance in my life that I now want to pursue. I have experience
              with HTML, CSS, Javascript, jQuery, Node, MySQL, Git, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
