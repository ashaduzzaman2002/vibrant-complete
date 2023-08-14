import React from "react";
import Layout from "../../layout/Layout";
import "./home.css";
import { About, HappyCustomersVibrants, OurServices, OurVibrantBlogs } from "../../components";
import ContactUs from "../../components/contactUs/ContactUs";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import Faq from "../../components/faq/Faq";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Number from "../../components/downloadApp/Number";

const Home = () => {
  const data = [
    {
      image: '/image/ovb1.png',
      heading: 'How To Get The Most Our Of Your Health Insurance',
      subHeading: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
      date: 'October 20, 2020',
      comments: '01',
      path: '/blog/how-to-get-the-most-our-of-your-health-insurance'
    },

    {
      image: '/image/ovb2.png',
      heading: 'Pet Dog Insurance',
      subHeading: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
      date: 'October 20, 2020',
      comments: '01',
      path: '/blog/how-to-get-the-most-our-of-your-health-insurance'
    },

    {
      image: '/image/ovb3.png',
      heading: 'How To Choose The Best Car Insurance?',
      subHeading: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
      date: 'October 20, 2020',
      comments: '01',
      path: '/blog/how-to-get-the-most-our-of-your-health-insurance'
    },
  ]

  return (
    <Layout>
      {/* Landing page */}
      <div className="ladning position-relative">
        <div className="position-absolute left-0 h-100 d-flex flex-column justify-content-between pb-2">
          <div>
            <img className="half-circle" src="/image/doted-half-circle.svg" alt="doted-half-circle" />
          </div>

          <div>
            <img className="cirlce" src="/image/circle.svg" alt="cirle" />
          </div>
        </div>
        <div className="container h-100 pt-4 pb-5">
          <div className="row h-100">
            <div className="col-lg-6 col-12 h-100 d-flex flex-column justify-content-center landing-text-box">
              <h1>Insurance For The Better Family Life.</h1>
              <p>
                There are various types of insurance, each designed to cover
                different aspects of life and business. Some common types of
                insurance include:
              </p>

              <div className="d-flex align-items-center gap-lg-5 gap-lg-3 gap-2 mt-4">
                <button className="custom-btn">Get Started</button>

                <div>
                  <img className="play-icon" src="/image/play-icon.svg" alt="play-icon" />{" "}
                  <span className="ms-lg-2 md-0 ">Watch Video</span>
                </div>
              </div>
            </div>

            <div className="col-6 h-100 d-lg-flex d-none flex-column justify-content-between align-items-end">
              <div>
                <img src="/image/wave.svg" alt="wave" />
              </div>
              <div>
                <img src="/image/doted-squre.svg" alt="doted-squre" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <OurServices />
      <WhatWeDo />
      <HappyCustomersVibrants />
      <DownloadApp>
        <Number />
      </DownloadApp>
      <OurVibrantBlogs data={data} />
      <Faq />
      <ContactUs />
    </Layout>
  );
};

export default Home;
