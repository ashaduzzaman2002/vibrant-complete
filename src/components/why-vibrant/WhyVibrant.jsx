import React, { useEffect, useState } from "react";
import "./why-vibrant.css";
import { BestDeal, Client, UpdateReqularly } from "../../assets/SVG";
import { Swiper, SwiperSlide } from "swiper/react";

const WhyVibrant = () => {
  const data = [
    {
      icon: <Client />,
      title: "Represents Clients",
      para: "We represent the client, not the insurer. Our expertise, knowledge of the market and negotiating skills with insurers are the best in the industry. We help you in evaluating the terms and services as set by your insurer.",
    },

    {
      icon: <UpdateReqularly />,
      title: "Updates Regularly",
      para: "We are constantly aware of the daily changes in the insurance market. We are accountable to clients in every aspect of the process. We are amongst the most stable insurance broker firms in India.",
    },

    {
      icon: <BestDeal />,
      title: "Best Deals Only",
      para: "We have a proven track record of getting the best deals in the toughest markets. Our professional expertise ranges to assisting in speedy & fair settlement of claims. The experience of our team ranges to higher bargaining power – that leads to significant cost saving for the client.",
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [slideGap, setSlideGap] = useState(30);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 501) {
        setSlidesPerView(1.25);
        setSlideGap(15);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.5);
        setSlideGap(15);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
        setSlideGap(20);
      } else if (window.innerWidth < 1200) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(3);
      }
    };

    // Update the slidesPerView initially and add a listener for window resize events
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);
  return (
    <div className="container mb-5">
      <h1 className="text-center page-heading">Why Vibrant</h1>
      <p className="text-center page-sub-heading">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown .
      </p>

      <div>
        <Swiper className="py-3" slidesPerView={slidesPerView} spaceBetween={slideGap}>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Card = ({ item: { icon, title, para } }) => (
  <div className="why-vibrant-card">
    <div className="d-flex align-items-center gap-md-3 gap-2 mb-md-3 mb-2">
      {icon}
      <h3 className="mb-0">{title}</h3>
    </div>

    <p>{para}</p>
  </div>
);

export default WhyVibrant;
