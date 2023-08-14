import React from "react";
import "./heroSecondary.css";

const HeroSecondary = ({ title }) => {
  return (
    <div className="hero-secondary position-relative">
      <div className="position-absolute left-0 h-100 d-flex flex-column justify-content-between pb-2">
        <div>
          <img
            className="half-circle"
            src="/image/doted-half-circle.svg"
            alt="doted-half-circle"
          />
        </div>
      </div>
      <div className="container h-100 pt-4 pb-5">
        <div className="row h-100">
          <div className="col-lg-6 col-7 h-100 d-flex flex-column justify-content-center landing-text-box">
          <div  style={{ display: "flex" }}>
              <h1 className="position-relative" style={{maxWidth: '428px'}}>{title}
              
              <svg
                className="ellipse"
                xmlns="http://www.w3.org/2000/svg"
                width="143"
                height="143"
                viewBox="0 0 143 143"
                fill="none"
              >
                <circle
                  opacity="0.1"
                  cx="71.5"
                  cy="71.5"
                  r="71.5"
                  fill="#015FC9"
                />
              </svg></h1>
              
            </div>
          </div>

          <div className="col-lg-6 col-5 h-100 hero-right d-flex flex-column justify-content-between align-items-end">
            <div>
              <img className="d-none d-lg-block" src="/image/wave.svg" alt="wave" />
            </div>
            <div>
              <img className="doted" src="/image/doted-squre.svg" alt="doted-squre" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecondary;
