import React, { useEffect, useState } from 'react'
import './ourServices.css'
import { Cyber, Fire, Health, Home, Motor, OSLeftArrow, OSRightArrow, Other, Pet, Travel } from '../../assets/SVG'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

const OurServices = () => {
  const data = [
    {
      icon: <Motor />,
      title: 'Motor',
      desc: 'Offers coverage for damages to vehicles and liability for injuries and property damage resulting from automobile accidents.'
    },

    {
      icon: <Health />,
      title: 'Health',
      desc: 'Provides coverage for medical expenses, hospitalization, and treatments. It helps individuals manage the high costs.'
    },

    {
      icon: <Fire />,
      title: 'Fire',
      desc: 'Offers income protection to individuals who become disabled and are unable to work.'
    },

    {
      icon: <Home />,
      title: 'Home',
      desc: 'Protects homeowners from financial losses due to damage to their property and belongings caused by.'
    },

    {
      icon: <Cyber />,
      title: 'Cyber',
      desc: 'Offers coverage for damages to vehicles and liability for injuries and property damage resulting from automobile accidents.'
    },

    {
      icon: <Pet />,
      title: 'Pet',
      desc: 'Pet owners pay a monthly or annual premium to the insurance company in exchange for coverage.'
    },

    {
      icon: <Travel />,
      title: 'Travel',
      desc: 'Provides coverage for unexpected events while traveling, such as trip cancellations, medical.'
    },

    {
      icon: <Other />,
      title: 'Other',
      desc: 'Protects homeowners from financial losses due to damage to their property and belongings caused by.'
    },


  ]

  const [swiper, setSwiper] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3.5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 560) {
        setSlidesPerView(1.7);
      }else if(window.innerWidth < 768) {
        setSlidesPerView(2.5);
      } else if (window.innerWidth < 992){
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

    <div className='mb-5 our-service'>
      <div className='container py-lg-5 py-3 '>
        <h1 className='text-center page-heading'>Our Services</h1>
        <p className='text-center page-sub-heading'>Insurance policies typically include terms, conditions, exclusions, and coverage limits that define the scope of protection provided by the insurer. </p>

        <div className='our-service-container d-none d-xl-grid'>
          {
            data.map((item, i) => (
              <Card key={i} item={item} />
            ))
          }
        </div>

        <div className='d-block d-xl-none'>
          <Swiper
            className="h-full"
            onSwiper={setSwiper}
            spaceBetween={15}
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

          <div className='d-flex gap-4 justify-content-center os-arrow'>
            <div onClick={handlePrev}>
              <OSLeftArrow />
            </div>

            <div onClick={handleNext}>
              <OSRightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const Card = ({ item }) => (
  <Link to={`/services/${item.title.toLowerCase()}`} className='our-service-card'>
    <div className='position-relative icon'>
      <div className='position-absolute' style={{top: '-1rem',left: '-1rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
          <circle cx="26" cy="26" r="26" fill="#E7F2FF" fill-opacity="0.45" />
        </svg>
      </div>

      <div className='icon icon1 position-relative'>

        {item.icon}</div>
    </div>


    <h2>{item.title}</h2>
    <p>{item.desc}</p>
  </Link>
)

export default OurServices
