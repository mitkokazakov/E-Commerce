import React from 'react'

import banner from '../images/banner.jpg';

export const Discount = () => {

    const myComponentStyle = {
        backgroundImage: `url(${banner})`
    }

    return (

        <div style={myComponentStyle} className=' w-full min-h-[200px] py-16 px-5 flex justify-center items-center'>

            <div className='text-white flex flex-col gap-5 justify-center items-center'>

                <h4 className='font-bold tracking-widest'>Repair Services</h4>

                <h1 className='text-2xl font-bold text-center tracking-widest font-mono'>Up to <span className=' text-red-600 font-bold text-2xl'>70% Off</span> - All T-Shirts & Accessories</h1>

                <button className='bg-white py-3 px-8 text-black font-bold rounded-md hover:bg-teal-700 hover:text-white'>Explore More</button>

            </div>

        </div>

    )
}
