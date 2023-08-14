import React from "react";
import "./footer.css";

const Footer = () => {
  const LocationList = [
    {
      city: "Ahmadabad(Head Office)",
      location:
        "412, Paragon, Next To Axis Bank Off C.G.Road, Law Garden, Ellisbridge, Ahmadabad, Gujarat 380006",
    },

    {
      city: "Surat",
      location:
        "4, Valentino Complex Behind Khatodara Police station Khatodara, Surat-395002",
    },

    {
      city: "Mumbai",
      location:
        "19-Sai Satnam CHS, Plot No.19 Sector-25, Nr.Seawoods Station(E)Mumbai-400706",
    },

    {
      city: "Mumbai",
      location:
        "Office No.210 Banarsi Heritage Mindspace, Malad West Mumbai-40064",
    },
  ];

  return (
    <footer className="position-relative">
      <div className="spiral position-absolute h-100">
        <img className="h-100 w-100 w-lg-auto" src="/image/spiral.svg" alt="" />
      </div>
      <div className="container pt-3 pt-lg-5 pb-3 position-relative">
        <div className="row">
          <div className="col-lg-4">
            <div className="brand">
              <img src="/image/logo.svg" alt="logo" />
            </div>

            <p className="mt-4 footer-desc">
              Vibrant Insurance is an insurance broking services company,
              offering insurance coverages from over 20 of the top insurers in
              the country, to individuals, businesses and corporates for all
              forms of contingencies.
            </p>
            <div className="d-flex gap-md-4 gap-2 mt-4 footer-icon">
              <img src="/image/facebook.svg" alt="" />
              <img src="/image/insta.svg" alt="" />
              <img src="/image/linkedin.svg" alt="" />
              <img src="/image/email.svg" alt="" />
              <img src="/image/phone.svg" alt="" />
            </div>
          </div>

          <div className="border-top pt-4 mt-4 pb-3 row d-lg-none gap-4 gap-lg-0">
            {LocationList.map((item, i) => (
              <Location key={i} data={item} />
            ))}
          </div>

          <div className="border-top mb-4 d-lg-none"></div>
          <div className="col-lg-4 col-6 d-flex flex-column align-items-center ps-3 ps-lg-5">
            <ul className="d-flex flex-column gap-3  justify-content-start">
              <p className="mb-0 mb-lg-2">Our Products</p>
              <li>Commercial General Liability</li>
              <li>Contractor All Risk</li>
              <li>CPM</li>
              <li>Cyber insurance</li>
              <li>D&O Liability</li>
              <li>Employee Compensation</li>
              <li>Erection All Risk</li>
              <li>Fidelity Insurance</li>
              <li>Fire Insurance</li>
              <li>Group Health Insurance</li>
            </ul>
          </div>

          <div className="col-lg-4 col-6 d-flex flex-column align-items-center">
            <ul className="d-flex flex-column gap-3">
              <p className="mb-0 mb-lg-2">Our Products</p>
              <li>Health Insurance</li>
              <li>Home Insurance</li>
              <li>Industrial All Risk</li>
              <li>Loss of Profit</li>
              <li>Marine Insurance</li>
              <li>Motor Insurance</li>
              <li>Product Liability Insurance</li>
              <li>Professional Indemnity</li>
              <li>Trade Credit</li>
              <li>Travel Insurance</li>
            </ul>
          </div>
        </div>

        <div className="border-top pt-3 pb-3 row d-none d-lg-flex">
          {LocationList.map((item, i) => (
            <Location key={i} data={item} />
          ))}
        </div>

        <div className="border-top d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-0 justify-content-between pt-3">
          <p className="mb-0">© 2023 Vibrant Insurance.</p>
          <p className="mb-0 text-center">
            <span  className="ps-2 ps-lg-3">Licence No: 569 </span>
            <span  className="ps-2 ps-lg-3">Validity:29/06/2022 to 28/06/2025</span>
             <span className="ps-2 ps-lg-3">IRDA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const Location = ({ data: { city, location } }) => (
  <div className="col-lg-3 col-12 d-flex align-items-start gap-2 footer-location">
    <img className="footer-icon" src="/image/location.svg" alt="" />

    <div className="ms-1 ms-lg-0">
      <p className="mb-1">{city}</p>
      <p className="mb-2">{location}</p>
    </div>
  </div>
);

export default Footer;
