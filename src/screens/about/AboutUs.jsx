import React from 'react'
import Layout from '../../layout/Layout'
import { About, HeroSecondary } from '../../components'
import ContactUs from '../../components/contactUs/ContactUs'
import Faq from "../../components/faq/Faq";
import DownloadApp from "../../components/downloadApp/DownloadApp";
import WhyVibrant from '../../components/why-vibrant/WhyVibrant';
import WhatWeDo from '../../components/what-we-do/WhatWeDo';
import WeAreVibrant from '../../components/we-are-vibrant/WeAreVibrant';
import MissionVision from '../../components/mission-vision/MissionVision';

const AboutUs = () => {
  return (
    <Layout>
        <HeroSecondary title={'About Us'} />
        <About />
        <MissionVision />
        <WeAreVibrant />
        <WhatWeDo />
        <WhyVibrant />
        <Faq />
        <ContactUs />
    </Layout>
  )
}

export default AboutUs