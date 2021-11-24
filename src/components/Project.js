import React from "react";
import "../App.css";
import "../styles/Project.css";

import ManateeImage from "../images/manatee.png";
import WdScheduler from "../images/wdscheduler.png";
import Pwgenerator from "../images/pwgenerator2.png";
import CountryHoliday from "../images/country-holiday-home.png";
import FitnessTracker from "../images/fitnessTracker.png";
import Budget from "../images/budget.png";

function Project() {
  return (
    <div className="section d-flex justify-content-center">
      <div className="work-wrapper">
        <h1 className="work mb-5">Work</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                id="img"
                src={ManateeImage}
                class="card-img-top"
                alt="manatee"
              />
              <div className="card-body text-center">
                <a href="https://manatee-clicker.herokuapp.com/">
                  <h5 className="card-title">Manatee Clicker Game</h5>
                </a>
                <p className="card-text">JavaScript/MySQL/Handlebars</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                id="img"
                src={CountryHoliday}
                className="card-img-top"
                alt="holiday"
              />
              <div className="card-body text-center">
                <a
                  href="https://lemelisk27.github.io/country-holiday/"
                  id="project1"
                >
                  <h5 className="card-title">Regional Holiday Calendar</h5>
                </a>
                <p className="card-text">
                  HTML/JavaScript/jQuery/Materialize CSS
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                id="img"
                src={FitnessTracker}
                className="card-img-top"
                alt="fitness"
              />
              <div className="card-body text-center">
                <a href="https://serene-lowlands-72835.herokuapp.com/">
                  <h5 class="card-title">Fitness Tracker</h5>
                </a>
                <p className="card-text">MongoDB/Express/HTML/CSS</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                id="img"
                src={WdScheduler}
                className="card-img-top"
                alt="workday"
              />
              <div className="card-body">
                <a href="https://chloeharris1.github.io/workdayscheduler/">
                  <h5 className="card-title">Work Day Scheduler</h5>
                </a>
                <p className="card-text">HTML/CSS/JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                id="img"
                src={Budget}
                className="card-img-top"
                alt="budget"
              />
              <div className="card-body">
                <a href="https://aqueous-forest-36580.herokuapp.com/">
                  <h5 className="card-title">PWA Budget Tracker</h5>
                </a>
                <p className="card-text">HTML/JavaScript/CSS</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                id="img"
                src={Pwgenerator}
                className="card-img-top"
                alt="password"
              />
              <div className="card-body">
                <a href="https://chloeharris1.github.io/passwordgenerator/">
                  <h5 className="card-title">Password Generator</h5>
                </a>
                <p className="card-text">HTML/JavaScript/CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
