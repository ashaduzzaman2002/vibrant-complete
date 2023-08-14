import React from 'react'
import Layout from '../../layout/Layout'
import { HappyCustomersVibrants, HeroSecondary, OurServices, OurVibrantBlogs } from '../../components'
import ContactUs from '../../components/contactUs/ContactUs'
import Faq from '../../components/faq/Faq'
import DownloadApp from "../../components/downloadApp/DownloadApp";

const ServicePage = () => {
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
        <HeroSecondary title={'Services'} />
        <div className='mt-4'>

        <OurServices /> 
        </div>
        <HappyCustomersVibrants />
        <DownloadApp />
        <OurVibrantBlogs data={data} />
        <ContactUs />
        <Faq />
    </Layout>
  )
}

export default ServicePage