import React, { useEffect, useState } from 'react'

import image from '../images/product5.jpg';
import { CartProduct } from './CartProduct';

import { requestAPI } from '../requests';

export const ShoppingCart = ({cart}) => {

    
    

    return (
        <div className='flex flex-col py-6 bg-slate-100 px-3 gap-4 md:px-20 sm:px-8 mt-[100px]'>
            <h1 className='text-center text-2xl font-bold tracking-widest mb-10'>My Cart</h1>

            <div className='flex flex-col gap-10 '>

                {cart && cart.map(p => {
                    
                    return <CartProduct key={p} productId={p}/>
                })}


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
