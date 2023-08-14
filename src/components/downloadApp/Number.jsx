import React from "react";
import { CheckBox } from "../../assets/SVG";

const Number = () => {
  const list = [
    "Top-Rated Insurance Firms",
    "Top-Rated Insurance Firms",
    "Top Insurers Ranked",
  ];
  return (
    <div className="dapp-bottom container row mx-auto">
      <div className="col-6 d-flex pb-lg-5 pb-4 ps-lg-5 ps-3 dapp-bottom-card">
        <div className="text-box mt-auto">
          <h2>Download The App</h2>
          <p>Insurance Just a Tap Away!</p>

          <ul className="about-list ps-0 mb-lg-3 mb-0">
            {list.map((item, i) => (
              <li key={i}>
                <CheckBox />

                <span className="ps-2">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-lg-5 mt-4 dapp-images d-flex gap-lg-4 gap-3">
            <img src="/image/app-store.png" alt="app-store" />
            <img src="/image/google-play.png" alt="google-play" />
          </div>
        </div>
      </div>

      <div className="col-6 pt-lg-5 pt-4 d-flex images pe-xl-5 ms-auto mt-auto dapp-bottom-card">
        <img src="/image/phone-group.png" alt="phone" />
      </div>
    </div>
  );
};

export default Number;
