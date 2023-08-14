import React from 'react'
import './contactus.css'

const ContactUs = () => {
    return (
        <>
            <h1 className='text-center page-heading'>Still Have More Questions?</h1>
            <p className='text-center page-sub-heading' style={{ maxWidth: 659 }}>Ask away... We are happy to assist you!</p>
            <div className='contactus-container mb-5'>

                <div className='contactus-top'>
                </div>
                <div className='contactus-bottom'>
                    <form action="">
                        <div>
                            <input className='w-100' type="text" placeholder='Name' />
                        </div>

                        <div className='mt-md-4 mt-3  gap-md-4 gap-3 d-flex flex-md-row flex-column'>
                            <input className='w-100' type="text" placeholder='Phone' />
                            <input className='w-100' type="text" placeholder='Email' />
                        </div>
                        <div className='mt-md-4 mt-3'>
                            <textarea className='w-100' type="text" placeholder='Name' />
                        </div>

                        <div className='mt-xl-5 captcha'>
                            <input type="checkbox" style={{ marginTop: '2px' }} />
                            <p className='mb-0 ms-1 not-robot'>I’m not a robot</p>

                            <div className='ms-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                    <path d="M26 13V3.29047L23.6894 5.60112C21.3424 2.2168 17.4304 0 13 0L9.95312 3.47252L13 6.94505C15.5266 6.94505 17.6913 8.49271 18.5989 10.6915L16.2905 13H26Z" fill="#16A5D9" />
                                    <path d="M3.29047 0L5.60112 2.31065C2.2168 4.65761 0 8.56959 0 13L3.47252 15.2852L6.94505 13C6.94505 10.4734 8.49271 8.30868 10.6916 7.40106L13 9.70953V0H3.29047Z" fill="#4AD0FF" />
                                    <path d="M7.40106 15.3085L9.70953 13H0V22.7095L2.31065 20.3989C4.65761 23.7832 8.56959 26 13 26V19.055C10.4734 19.055 8.30868 17.5073 7.40106 15.3085Z" fill="#D0CDCD" />
                                </svg>
                                <h4 className='mb-0'>reCAPTCHA</h4>
                                <p className='mb-0'>Privacy Terms</p>
                            </div>
                        </div>

                        <button type='button' className='mt-xl-4 mt-md-3 mt-0'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs