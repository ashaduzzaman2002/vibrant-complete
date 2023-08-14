import React from "react";
import "./about.css";
import { CheckBox } from "../../assets/SVG";

const About = () => {
  const list = [
    "Top-Rated Insurance Firms",
    "Top-Rated Insurance Firms",
    "Top Insurers Ranked",
  ];
  return (
    <div className="container mt-5 mb-5 about-component">
      <div className="about-container">
        <div className="position-relative">
          <img
            className="w-100"
            src="/image/about-image.png"
            alt="about-image"
          />

          <div className="about-experience d-flex align-items-center justify-content-center">
            <h2 className="mb-0">25+</h2>
            <p className="ms-2 mb-0">Years Experience on insurance</p>
          </div>
        </div>

        <div className="">
          <h2 className="about-heading">About Us</h2>
          <h2 className="about-desc1">
            Safety & Security For Your Business And Life, By The Most Trusted
            Insurance Experts.
          </h2>
          <h5 className="about-desc2">
            Insurance policies typically include terms, conditions, exclusions,
            and coverage limits that define the scope of protection provided by
            the insurer.
          </h5>

          <div className="row mt-xl-3 mt-2 mx-0">
            <div className="col-md-7 col-8 ps-0">
              <ul className="about-list ps-0">
                {list.map((item, i) => (
                  <li key={i}>
                    <CheckBox />
                    <span className="ps-2">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3">
                <button className="custom-btn">Know Us</button>
              </div>
            </div>

            <div className="col-md-5 col-4 ms-auto about-award d-flex flex-column align-items-center justify-content-center">
              <h2 className="mb-lg-3 mb-1">100 +</h2>
              <h3 className="text-center">Get International Award</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
