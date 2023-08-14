import React from 'react'
import { HeroSecondary } from '../../components'
import Layout from '../../layout/Layout'
import Faq from '../../components/faq/Faq'

const FaqPage = () => {
  return (
    <Layout>
      <HeroSecondary title={'Faq'} />
      <div className='mt-5'>
        <Faq />
      </div>
       
    </Layout>
  )
}

export default FaqPage