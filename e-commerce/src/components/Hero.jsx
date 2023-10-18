import React from 'react'

import heroImage from '../images/hero4.png';

export const Hero = () => {

    const myComponentStyle = {
        backgroundImage : `url(${heroImage})`
     }

    return (
        <div style={myComponentStyle} className="relative mt-[100px] min-h-[500px] bg-center bg-cover md:bg-[50%_30%] md:min-h-[700px]">
            <div className=' absolute left-5 top-[50%] translate-y-[-50%] md:left-10'>

                <h3 className=' text-lg font-bold mb-3 md:text-2xl'>Trade-in-offer</h3>

                <h2 className='text-3xl font-bold mb-3 md:text-4xl'>Super value deals</h2>

                <h1 className='text-[36px] text-teal-500 font-bold mb-5 md:text-6xl'>On all products</h1>

                <p className='font-bold text-gray-400 md:text-2xl'>Save more with coupons & up to 70% off!</p>
            </div>

            {/* <img className=' object-contain' src={heroImage} alt="" /> */}

            
            
        </div>
    )
}
