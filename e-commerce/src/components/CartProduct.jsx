import React from 'react'

import image from '../images/product5.jpg';

export const CartProduct = ({productId}) => {
  return (
    <div className='flex gap-2  px-4 py-4 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl relative'>

                    <div className=' w-1/2 h-44 relative md:max-w-xs md:h-auto sm:w-1/3'>
                        <img className='w-full h-full rounded-2xl' src={image} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div className='w-1/2 px-2 flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <h5 className='tracking-widest'>Adidas</h5>

                            <p className='text-lg tracking-widest font-medium'>Cartoon Astrounaut T-Shirt</p>

                            <p className='font-extrabold tracking-widest text-md md:absolute md:right-8 md:top-5 md:text-2xl'>$78</p>
                        </div>

                        <p>Size: S</p>

                        <input className='w-1/2 border-2 text-center py-1 border-teal-600 bg-transparent opacity-100 md:w-1/5' type="number" />

                        <p className='font-medium text-red-600 tracking-widest cursor-pointer'> <i className="fa-solid fa-trash-can text-red-600 mr-2"> </i>Remove</p>
                    </div>
                </div>
  )
}
