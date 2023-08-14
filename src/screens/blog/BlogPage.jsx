import React from 'react'
import Layout from '../../layout/Layout'
import { HappyCustomersVibrants, HeroSecondary, OurVibrantBlogs } from '../../components'
import ContactUs from '../../components/contactUs/ContactUs'


const BlogPage = () => {
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
      <HeroSecondary title={'Blog'} />
      <div className='mt-5'>
        <OurVibrantBlogs data={data} />
      </div>
      <HappyCustomersVibrants />
      <ContactUs />
    </Layout>
  )
}

export default BlogPage