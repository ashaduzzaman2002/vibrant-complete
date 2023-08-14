import React, { useEffect, useState } from 'react'
import './happyCustomersVibrants.css'
import { LeftArrow, RightArrow, Star } from '../../assets/SVG'
import { Swiper, SwiperSlide } from 'swiper/react'

const HappyCustomersVibrants = () => {
  const data = [
    {
      image: '/image/customer1.png',
      title: 'CA Prateek Tosniwal',
      job: 'CA Tosniwal & Co.',
      desc: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
    },

    {
      image: '/image/customer2.png',
      title: 'Do. Snehal Naik',
      job: 'Synergy Dental Care',
      desc: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
    },

    {
      image: '/image/customer3.png',
      title: 'Niket Mehta',
      job: 'Mehta Wealth Portfolio Management',
      desc: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
    },

    {
      image: '/image/customer1.png',
      title: 'CA Prateek Tosniwal',
      job: 'CA Tosniwal & Co.',
      desc: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
    },

    {
      image: '/image/customer2.png',
      title: 'Do. Snehal Naik',
      job: 'Synergy Dental Care',
      desc: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
    },

    {
      image: '/image/customer3.png',
      title: 'Niket Mehta',
      job: 'Mehta Wealth Portfolio Management',
      desc: 'Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.'
    },
  ]

  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 560) {
        setSlidesPerView(1.35);
      } else if (window.innerWidth < 992) {
        setSlidesPerView(2);
      }else if (window.innerWidth < 1200) {
        setSlidesPerView(2.5);
      } else {
        setSlidesPerView(3);
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
    <div className='container mb-5'>
      <h1 className='text-center page-heading'>Happy Customers Of Vibrant</h1>
      <p className='text-center page-sub-heading' style={{ maxWidthwidth: 659 }}>Our customers share their thoughts and views on the insurance services availed by them, from us.</p>

      <div>
        <Swiper
          className=""
          onSwiper={setSwiper}
          spaceBetween={30}
          slidesPerView={slidesPerView}
        >
          {
            data.map((item, i) => (
              <SwiperSlide key={i}>
                <Card item={item} />
              </SwiperSlide>
            ))
          }

        </Swiper>

        <div className='mt-4 d-flex justify-content-center gap-4'>
          <div onClick={handlePrev}>
            <LeftArrow />
          </div>
          <div onClick={handleNext}>
            <RightArrow />
          </div>
        </div>
      </div>

    </div>
  )
}


const Card = ({ item }) => (
  <div className='happy-customer-card h-100' style={{ paddingTop: 1 }}>
    <div>
      <img src={item.image} alt="customer" />
    </div>

    <div className='happy-customer-card-text'>
      <h3>{item.title}</h3>

      <h4>{item.job}</h4>

      <hr />

      <h5>{item.desc}</h5>
      <p className='mb-0'>Quality Services</p>

      <div className='customer-rating d-flex gap-1 mt-1'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  </div>
)

export default HappyCustomersVibrants
