import React from 'react'

import image from '../images/product5.jpg';

export const ShoppingCart = () => {
    return (
        <div className='flex flex-col py-6 bg-slate-100 px-3 gap-4 md:px-20 sm:px-8 mt-[100px]'>
            <h1 className='text-center text-2xl font-bold tracking-widest mb-10'>My Cart</h1>

            <div className='flex flex-col gap-10 '>

                <div className='flex gap-2  px-4 py-4 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl relative'>

                    <div className=' w-full h-44 relative md:max-w-xs md:h-auto sm:w-1/3'>
                        <img className='w-full h-full rounded-2xl' src={image} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div className='px-2 flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <h5 className='tracking-widest'>Adidas</h5>

                            <p className='text-lg tracking-widest font-medium'>Cartoon Astrounaut T-Shirt</p>

                            <p className='font-extrabold tracking-widest text-md md:absolute md:right-8 md:top-5 md:text-2xl'>$78</p>
                        </div>

                        <p>Size: S</p>

                        <input className='w-1/2 border-2 text-center py-1 border-teal-600 bg-transparent opacity-100' type="number" />

                        <p className='font-medium text-red-600 tracking-widest cursor-pointer'> <i className="fa-solid fa-trash-can text-red-600 mr-2"> </i>Remove</p>
                    </div>
                </div>

                <div className='flex gap-2  px-4 py-4 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl relative'>

                    <div className=' w-full h-44 relative md:max-w-xs md:h-auto sm:w-1/3'>
                        <img className='w-full h-full rounded-2xl' src={image} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div className='px-2 flex flex-col gap-3'>
                        <div className='flex flex-col gap-3'>
                            <h5 className='tracking-widest'>Adidas</h5>

                            <p className='text-lg tracking-widest font-medium'>Cartoon Astrounaut T-Shirt</p>

                            <p className='font-extrabold tracking-widest text-md md:absolute md:right-8 md:top-5 md:text-2xl'>$78</p>
                        </div>

                        <p>Size: S</p>

                        <input className='w-1/2 border-2 text-center py-1 border-teal-600 bg-transparent opacity-100' type="number" />

                        <p className='font-medium text-red-600 tracking-widest cursor-pointer'> <i className="fa-solid fa-trash-can text-red-600 mr-2"> </i>Remove</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-10 bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl px-5 py-6 md:flex-row md:justify-between'>

                <div className='flex flex-col gap-4 md:w-1/3 '>
                    <h1 className='font-bold tracking-widest'>Apply coupon</h1>

                    <div className='flex gap-5 md:flex-row md:justify-between'>
                        <input className='border-2 border-teal-500 rounded-lg bg-transparent md:w-full' type="text" />
                        <button className='bg-teal-600 text-white font-bold py-2 px-3 tracking-widest rounded-lg'>Apply</button>
                    </div>
                </div>

                <div className='flex flex-col border-[1px] border-slate-300 p-3 md:w-1/2'>

                    <h1 className='font-bold tracking-widest mb-3'>Cart Totals</h1>

                    <table className=' border-[1px] border-slate-300 p-3'>
                        <tr className='border-[1px] border-slate-300'>
                            <td className='p-3'>Cart Subtotal</td>
                            <td>$ 334</td>
                        </tr>

                        <tr className='border-[1px] border-slate-300'>
                            <td className='p-3'>Shipping</td>
                            <td>Free</td>
                        </tr>

                        <tr className='border-[1px] border-slate-300'>
                            <td className='p-3 font-extrabold tracking-widest'>Total</td>
                            <td className='font-extrabold tracking-widest'>$ 334</td>
                        </tr>
                    </table>

                    <button className='bg-teal-600 text-white font-bold py-2 px-3 tracking-widest rounded-lg mt-3'>Proceed to checkout</button>

                </div>

            </div>

        </div>
    )
}
