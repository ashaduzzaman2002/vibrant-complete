import React, { useState } from "react";
import "./what-we-do-page.css";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import { HeroSecondary } from "../../components";
import { NextArrow, PrevArrow } from "../../assets/SVG";
import { Swiper, SwiperSlide } from "swiper/react";

const WhatWeDoPage = () => {
  const { id } = useParams();
  const data = [
    {
      image: "/image/whatwedobg.png",
    },

    {
      image: "/image/whatwedob.png",
    },
  ];

  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <Layout>
      <HeroSecondary title={"What We Do At Vibrant"} />
      <div className="my-5">
        <div className="container">
          <h1 className="text-center page-heading">What We Do At Vibrant</h1>
          <p className="text-center page-sub-heading">
            With Vibrant Insurance, insurance brokers in Ahmedabad, get educated
            about all forms of insurance covers ranging from individual
            insurances, business.
          </p>
        </div>

        <div className="what-we-do position-relative">
          <div
            className="container position-relative h-100"
            style={{ zIndex: "10" }}
          >
            <h3 className="d-lg-none text-center what-we-do-heading mb-2">SME Insurance</h3>
            <p className="mb-2 d-lg-none text-center what-we-do-subheading">
              Protect Yourself and your family for the future.
            </p>
            <div className="row h-100">
              <div className="col-lg-6 what-we-do-image d-none d-lg-block">
                <Swiper
                  onSwiper={setSwiper}
                  spaceBetween={30}
                  slidesPerView={1}
                  className="what-we-do-image-inner"
                >
                  {data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <img src="/image/whatwedobg.png" alt="what-we-do image" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="what-we-do-btn d-none d-lg-block">
                  <button onClick={handlePrev}>
                    <PrevArrow />
                  </button>
                  <button onClick={handleNext}>
                    <NextArrow />
                  </button>
                </div>
              </div>

              <div className="my-3 d-lg-none">
                <img className="w-100" src="/image/whatwedobg.png" alt="what-we-do image" style={{borderRadius: '15px'}} />
              </div>
              <div className="col-lg-6 d-flex flex-column what-we-do-text justify-content-center h-100 ps-lg-4 ">
                <h3 className="d-none d-lg-block">SME Insurance</h3>
                <p className="mb-2 d-none d-lg-block">
                  Protect Yourself and your family for the future.
                </p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a aliquam ante, blandit interdum magna. Vestibulum
                  orci nisi, feugiat id lorem sit amet, aliquam viverra velit.
                  Donec eget diam sapien. Phasellus molestie tempor erat, in
                  pulvinar sapien ornare vel. Nullam vel velit condimentum,
                  tincidunt turpis quis, convallis nibh. In hac habitasse platea
                  dictumst. Pellentesque fermentum odio id ultricies maximus.
                  Aliquam posuere dui eros, non bibendum sapien aliquam non.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Fusce magna neque,
                  porttitor vitae fermentum vel, feugiat et turpis. In maximus
                  posuere elit, ut cursus ante finibus at. Suspendisse nec
                  luctus neque, in
                </p>
              </div>
            </div>
          </div>

          <div
            className="row h-100 position-absolute top-0 right-0 p-0 d-none d-lg-block"
            style={{ width: "100.8%" }}
          >
            <div className="col-6 h-100 what-we-do-bg p-0"></div>
            <div className="col-6 h-100"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhatWeDoPage;
