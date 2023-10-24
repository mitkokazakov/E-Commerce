import React from 'react'

import product1 from '../images/product1.jpg';

export const FeaturedAndArrivals = ({title, descr}) => {
    return (
        <div className=' bg-slate-300 w-full pb-10'>

            <div className='text-center py-10'>
                <h1 className='font-bold text-4xl mb-5 tracking-widest'>{title}</h1>

                <p className=' text-slate-100 text-xl px-5'>{descr}</p>
            </div>

            <div className=' flex flex-wrap justify-center items-center gap-5 px-8 pb-10'>

                <div className='border-slate-200 border-2 rounded-2xl shadow-xl bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col gap-5 px-5 py-5 w-full md:w-2/5 lg:w-[23%] hover:scale-105 transition-all duration-500'>

                    <div className='w-full relative shadow-md rounded-2xl cursor-pointer'>
                        <img className='w-full h-full rounded-2xl' src={product1} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div>

                        <p className='tracking-[2px] text-gray-500 font-bold'>Adidas</p>

                        <h3  className='tracking-[2px] text-black font-bold cursor-pointer'>Cartoon Astronaut T-shirts</h3>

                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-teal-600 font-bold tracking-widest'>$78</p>

                            <div className=' rounded-full p-2 bg-teal-100 cursor-pointer'>
                                <i className="fa-solid fa-cart-shopping text-xl text-teal-600"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border-slate-200 border-2 rounded-2xl shadow-xl bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col gap-5 px-5 py-5 w-full md:w-2/5 lg:w-[23%] hover:scale-105 transition-all duration-500'>

                    <div className='w-full relative shadow-md rounded-2xl cursor-pointer'>
                        <img className='w-full h-full rounded-2xl' src={product1} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div>

                        <p className='tracking-[2px] text-gray-500 font-bold'>Adidas</p>

                        <h3  className='tracking-[2px] text-black font-bold cursor-pointer'>Cartoon Astronaut T-shirts</h3>

                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-teal-600 font-bold tracking-widest'>$78</p>

                            <div className=' rounded-full p-2 bg-teal-100 cursor-pointer'>
                                <i className="fa-solid fa-cart-shopping text-xl text-teal-600"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border-slate-200 border-2 rounded-2xl shadow-xl bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col gap-5 px-5 py-5 w-full md:w-2/5 lg:w-[23%] hover:scale-105 transition-all duration-500'>

                    <div className='w-full relative shadow-md rounded-2xl cursor-pointer'>
                        <img className='w-full h-full rounded-2xl' src={product1} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div>

                        <p className='tracking-[2px] text-gray-500 font-bold'>Adidas</p>

                        <h3  className='tracking-[2px] text-black font-bold cursor-pointer'>Cartoon Astronaut T-shirts</h3>

                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-teal-600 font-bold tracking-widest'>$78</p>

                            <div className=' rounded-full p-2 bg-teal-100 cursor-pointer'>
                                <i className="fa-solid fa-cart-shopping text-xl text-teal-600"></i>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='border-slate-200 border-2 rounded-2xl shadow-xl bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col gap-5 px-5 py-5 w-full md:w-2/5 lg:w-[23%] hover:scale-105 transition-all duration-500'>

                    <div className='w-full relative shadow-md rounded-2xl cursor-pointer'>
                        <img className='w-full h-full rounded-2xl' src={product1} alt="" />

                        <div className='w-full h-full z-10 top-0 bg-gradient-to-b from-slate-200 to-slate-400 opacity-10 absolute rounded-2xl'></div>
                    </div>

                    <div>

                        <p className='tracking-[2px] text-gray-500 font-bold'>Adidas</p>

                        <h3  className='tracking-[2px] text-black font-bold cursor-pointer'>Cartoon Astronaut T-shirts</h3>

                        <div className='flex justify-between items-center mt-5'>
                            <p className='text-teal-600 font-bold tracking-widest'>$78</p>

                            <div className=' rounded-full p-2 bg-teal-100 cursor-pointer'>
                                <i className="fa-solid fa-cart-shopping text-xl text-teal-600"></i>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
