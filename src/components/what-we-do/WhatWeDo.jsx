import React, { useEffect, useState } from "react";
import "./whatwedo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
    const data = [
        {
            image: "/image/whatwedo1.png",
            heading: "SME Insurance",
            subHeading: "Protect Yourself and your family for the future.",
            path: '/what-we-do-at-vibrant/sme-insurance'
        },

        {
            image: "/image/whatwedo2.png",
            heading: "Individual Insurance",
            subHeading: "Protect Yourself and your family for the future.",
            path: '/what-we-do-at-vibrant/individual-insurance'
        },

        {
            image: "/image/whatwedo3.png",
            heading: "Corporate Insurance",
            subHeading: "Keep your company safe from major financial contingencies & losses",
            path: '/what-we-do-at-vibrant/corporate-insurance'
        },

        {
            image: "/image/whatwedo4.jpg",
            heading: "Insurance Audit",
            subHeading: "Determining risk before you get a protective cover.",
            path: '/what-we-do-at-vibrant/insurance-insurance'
        },

        {
            image: "/image/whatwedo1.png",
            heading: "SME Insurance",
            subHeading: "Protect Yourself and your family for the future.",
            path: '/what-we-do-at-vibrant/sme-insurance'
        },

        {
            image: "/image/whatwedo2.png",
            heading: "Individual Insurance",
            subHeading: "Protect Yourself and your family for the future.",
            path: '/what-we-do-at-vibrant/individual-insurance'
        },

        {
            image: "/image/whatwedo3.png",
            heading: "Corporate Insurance",
            subHeading: "Keep your company safe from major financial contingencies & losses",
            path: '/what-we-do-at-vibrant/corporate-insurance'
        },

        {
            image: "/image/whatwedo4.jpg",
            heading: "Insurance Audit",
            subHeading: "Determining risk before you get a protective cover.",
            path: '/what-we-do-at-vibrant/insurance-audit'
        },
    ];



    const [progress, setProgress] = useState(0);

    const handleProgress = (swiper) => {
        const { isEnd, progress } = swiper;
        if (isEnd) {
            setProgress(1);
        } else {
            setProgress(progress);
        }
    };

    const [slidesPerView, setSlidesPerView] = useState(3.5);
    const [slideGap, setSlideGap] = useState(30)

  useEffect(() => {
    const updateSlidesPerView = () => {
        if (window.innerWidth < 501) {
            setSlidesPerView(1);
            setSlideGap(20)
        }else if (window.innerWidth < 768) {
        setSlidesPerView(2);
        setSlideGap(15)
      }else if(window.innerWidth < 992) {
        setSlidesPerView(2.5);
      } else if (window.innerWidth < 1360){
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3.5);
      }
    };

    // Update the slidesPerView initially and add a listener for window resize events
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

    return (
        <div className="mb-5 container">
            <h1 className="text-center page-heading">What We Do At Vibrant</h1>
            <p className="text-center page-sub-heading">
                With Vibrant Insurance, insurance brokers in Ahmedabad, get educated
                about all forms of insurance covers ranging from individual insurances,
                business.
            </p>
            <Swiper
                spaceBetween={slideGap}
                modules={[Pagination]}
                slidesPerView={slidesPerView}
                onProgress={(swiper) => handleProgress(swiper)}
                className="pb-lg-5 pb-3 wwd-swipwer mt-0"
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="custom-progress-bar mx-auto mt-1">
                <div
                    className="custom-progress-fill"
                    style={{ width: `${progress * 100}%` }}
                ></div>
            </div>
        </div>
    );
};

const Card = ({ item }) => (
    <Link to={item.path} className="w-100 wwd-card text-decoration-none">
        <img className="w-100" src={item.image} alt="" />

        <div className="p-xl-4 p-md-3 p-2">
            <h2>{item.heading}</h2>
            <p>{item.subHeading}</p>
            <button className="mt-2">See More</button>
        </div>
    </Link>
);

export default WhatWeDo;
