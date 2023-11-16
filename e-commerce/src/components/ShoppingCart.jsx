import React from 'react'

import image from '../images/product5.jpg';

export const ShoppingCart = () => {
    return (
        <div className='flex flex-col py-6 bg-slate-300'>
            <h1 className='text-center text-2xl font-bold tracking-widest mb-10'>My Cart</h1>

            <div className='flex flex-col gap-10 px-3'>

                <div className='flex gap-2 max-w-44 px-4 py-4 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl'>

                    <div className='w-full relative'>
                        <img className='w-full h-full rounded-2xl' src={image} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div className='px-2 flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <h5 className='tracking-widest'>Adidas</h5>

                            <p className='text-lg tracking-widest font-medium'>Cartoon Astrounaut T-Shirt</p>

                            <p className='font-extrabold tracking-widest text-md'>$78</p>
                        </div>

                        <p>Size: S</p>

                        <input className='w-1/2 border-2 text-center py-1 border-teal-600 bg-transparent' type="number" />

                        <p className='font-medium text-red-600 tracking-widest'>Remove</p>
                    </div>
                </div>

                <div className='flex gap-2 max-w-44 px-4 py-4 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl'>

                    <div className='w-full relative'>
                        <img className='w-full h-full rounded-2xl' src={image} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div className='px-2 flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <h5 className='tracking-widest'>Adidas</h5>

                            <p className='text-lg tracking-widest font-medium'>Cartoon Astrounaut T-Shirt</p>

                            <p className='font-extrabold tracking-widest text-md'>$78</p>
                        </div>

                        <p>Size: S</p>

                        <input className='w-1/2 border-2 text-center py-1 border-teal-600 bg-transparent' type="number" />

                        <p className='font-medium text-red-600 tracking-widest'>Remove</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
