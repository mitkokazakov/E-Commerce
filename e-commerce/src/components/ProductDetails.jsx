import React from 'react'

import image from '../images/product3.jpg';

export const ProductDetails = () => {
    return (
        <div className='flex flex-col gap-5 px-4 py-6 md:flex-row md:gap-6'>

            <div className='flex flex-col gap-2'>

                <div className='w-full relative'>
                    <img className='w-full h-full' src={image} alt="" />
                    <div className='w-full h-full absolute top-0 bg-slate-400 opacity-10 z-10'></div>
                </div>

                <div className='w-full flex justify-center items-center gap-3'>
                    <div className='w-1/3 relative'>
                        <img className='w-full h-full' src={image} alt="" />
                        <div className='w-full h-full absolute top-0 bg-slate-400 opacity-20 z-10'></div>
                    </div>

                    <div className='w-1/3 relative'>
                        <img className='w-full h-full' src={image} alt="" />
                        <div className='w-full h-full absolute top-0 bg-slate-400 opacity-20 z-10'></div>
                    </div>

                    <div className='w-1/3 relative'>
                        <img className='w-full h-full' src={image} alt="" />
                        <div className='w-full h-full absolute top-0 bg-slate-400 opacity-20 z-10'></div>
                    </div>

                    <div className='w-1/3 relative'>
                        <img className='w-full h-full' src={image} alt="" />
                        <div className='w-full h-full absolute top-0 bg-slate-400 opacity-20 z-10'></div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-5'>
                <p className='font-bold tracking-widest'>Home / T-Shirts</p>

                <h1 className='text-xl font-bold tracking-widest'>Cartoon Astronaut T-Shirt</h1>

                <h1 className='text-2xl font-extrabold tracking-widest'>$ 139.00</h1>

                <div className='flex flex-col gap-5'>
                    <select className='border-[1px] border-teal-500 text-center py-2 px-4 w-2/5'>
                        <option className='text-center' value="0">Select Size</option>
                        <option value="0">Small</option>
                        <option value="0">Medium</option>
                        <option value="0">Large</option>
                        <option value="0">Extra Large</option>
                    </select>

                    <div className='flex gap-5'>
                        <input className='border-[1px] border-teal-500 text-center py-2 px-4 w-1/6 md:w-1/4 lg:w-1/6' type="number" name="" id="" />

                        <button className='bg-teal-600 text-white tracking-widest font-bold px-3 py-2 rounded-m '>Add to Cart</button>
                    </div>
                </div>

                <div>
                    <h3 className='font-bold text-xl tracking-widest mb-5'>Product Details</h3>

                    <p className='font-light text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque velit numquam dolor, nulla quisquam quam, omnis dolorum non earum tenetur quia deleniti repellendus dolorem debitis veniam consequuntur iure optio nesciunt. Sed quibusdam eaque, ratione dignissimos adipisci aspernatur maxime. Expedita, qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque velit numquam dolor, nulla quisquam quam, omnis dolorum non earum tenetur quia deleniti repellendus dolorem debitis veniam consequuntur iure optio nesciunt. Sed quibusdam eaque, ratione dignissimos adipisci aspernatur maxime. Expedita, qui.</p>
                </div>
            </div>
        </div>
    )
}
