import React from 'react'
import './downloadApp.css'
import { HandShake, Plicies, Smile, TopInsurers } from '../../assets/SVG'

const DownloadApp = ({children}) => {

    const data = [
        {
            icon: <Smile />,
            heading: '5,000',
            subHeading: 'Happy Clients'
        },

        {
            icon: <Plicies />,
            heading: '15000+',
            subHeading: 'Policies'
        },

        {
            icon: <HandShake />,
            heading: '10000+',
            subHeading: 'Claims Settled'
        },

        {
            icon: <TopInsurers />,
            heading: '10+',
            subHeading: 'Top Insurers'
        },
    ]

    

    return (
        <div className='mb-5'>
            <div className='dapp-top'>
                <div className="container">
                    <div className='row px-0 py-xl-5 py-4'>
                        {
                            data.map((item, i) => (
                                <Card key={i} item={item} />
                            ))
                        }
                    </div>
                </div>

            </div>
            {children}
        </div>
    )
}


const Card = ({ item }) => (
    <div className='dapp-card col-xl-3 col-6 my-3'>
        <div className='icon'>
            {item.icon}
        </div>
        <div>
            <h2 className='mb-0'>{item.heading}</h2>
            <p className='mb-0'>{item.subHeading}</p>
        </div>
    </div>
)

export default DownloadApp