import React, { useEffect, useState } from "react";
import './OurVibrantBlogs.css'
import { Calender, Comment } from '../../assets/SVG'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const OurVibrantBlogs = ({data}) => {
 


  const [progress, setProgress] = useState(0);

  const handleProgress = (swiper) => {
    const { isEnd, progress } = swiper;
    if (isEnd) {
      setProgress(1);
    } else {
      setProgress(progress);
    }
  };

  const [slidesPerView, setSlidesPerView] = useState(2);
  const [slideGap, setSlideGap] = useState(30)

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 450) {
        setSlidesPerView(1);
        setSlideGap(20)
      }
      else if (window.innerWidth < 501) {
        setSlidesPerView(1.6);
        setSlideGap(20)
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
        setSlideGap(15)
      } else {
        setSlidesPerView(2);
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

  return <div className="container mb-5">
    <h1 className='text-center page-heading'>Our Vibrant Blogs</h1>
    <p className='text-center page-sub-heading'>Our knowledge space, where Vibrants Insurance’s experts write about the ongoing trends and share their opinions on various topics from the industries.</p>

    <div className="ovb-container ovb-desktop">
      {
        data.map((item, i) => (
          <Card key={i} item={item} />
        ))
      }
    </div>

    <div className="ovb-mobile">
      <Swiper
        spaceBetween={slideGap}
        modules={[Pagination]}
        slidesPerView={slidesPerView}
        onProgress={(swiper) => handleProgress(swiper)}
        className="py-lg-5 py-3 wwd-swipwer"
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
  </div>;
};

const Card = ({ item }) => (
  <Link to={item.path} className="ovb-card position-relative text-decoration-none">
    <div className="image-outer">
      <img src={item.image} alt="image" />
    </div>

    <div className="text-box m-xl-4 m-lg-3 m-2 mt-3 d-flex flex-column justify-content-between">
      <h2>{item.heading}</h2>

      <h4>{item.subHeading}</h4>

      <div className="position-absolute card-footer">
        <hr />
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-lg-2 gap-1 align-items-center">
            <Calender /> <p className="mb-0">{item.date}</p>
          </div>

          <div className="d-flex gap-lg-2 gap-1 align-items-center">
            <Comment /> <p className="mb-0">Comments ({item.comments})</p>
          </div>
        </div>
      </div>

    </div>
  </Link>
)


export default OurVibrantBlogs;
