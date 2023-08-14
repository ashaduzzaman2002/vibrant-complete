import React from "react";
import "./mission-vision.css";
import { Mission, Vision } from "../../assets/SVG";

const MissionVision = () => {
  return (
    <div className="container mb-5 mission-vission">
      <div className="row">
        <div className="col-lg-6 col-12 d-flex gap-lg-4 gap-3">
          <div className="mission-vision-icon">
            <Mission />
          </div>

          <div>
            <h3 className="mb-lg-4 mb-2">Our Mission</h3>

            <p>
              To become a reliable and trusted insurance solutions provider to
              all our esteemed customers. Backed by strong business ethics and
              technical expertise, we offer smart, effective and profitable
              solutions for both individuals and businesses alike. We use our
              experience to personally counsel and offer actionable advice that
              is simple, unbiased and adds value to their quality of life.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex gap-lg-4 mt-4 mt-lg-0 gap-3">
          <div className="mission-vision-icon">
            <Vision />
          </div>

          <div>
            <h3 className="mb-lg-4 mb-2">Our Mission</h3>

            <p>
            We strive to ensure total customer satisfaction at all times. Building customer trust and working towards their interest is the primary aim across all our dealings. We suggest customized insurance solutions for each client based on their requirements and objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
