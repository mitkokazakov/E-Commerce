import React from 'react'

import product1 from '../images/product1.jpg';

export const Featured = () => {
    return (
        <div className=' bg-slate-300 w-full'>

            <div className='text-center py-10'>
                <h1 className='font-bold text-4xl mb-5'>Featured Products</h1>

                <p className=' text-slate-100 text-xl px-5'>Summer Collection New Modern Design</p>
            </div>

            <div className=' flex flex-col gap-5 px-8'>

                <div className='border-slate-200 rounded-xl bg-gradient-to-b from-white to-slate-300 flex flex-col gap-5 px-5 py-5'>

                    <div className='w-full relative'>
                        <img className='w-full h-full rounded-xl' src={product1} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-slate-400 opacity-10 absolute rounded-xl'></div>
                    </div>

                    <div>

                        <p>Adidas</p>

                        <h3>Cartoon Astronaut T-shirts</h3>

                        <div className='flex justify-between items-center'>
                            <p>$78</p>

                            <div>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
