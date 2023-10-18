import React from 'react'

import feature1 from '../images/features1.png';
import feature2 from '../images/features2.png';
import feature3 from '../images/features3.png';
import feature4 from '../images/features4.png';
import feature5 from '../images/features5.png';
import feature6 from '../images/features6.png';

export const Services = () => {
  return (
    <div className='px-1 py-5 bg-gradient-to-b from-white to-slate-300 w-full flex flex-wrap justify-center items-center gap-5'>
        
        <div className='p-3 flex flex-col justify-center items-center gap-3 bg-transparent border-2 border-slate-200 rounded-md w-2/5 h-[170px]'>
            <img className='w-[90px] h-[90px]' src={feature1} alt="" />

            <p className='text-teal-600 font-bold text-sm py-1 px-3 bg-pink-200 rounded-md'>Free Shipping</p>
        </div>

        <div className='p-3 flex flex-col justify-center items-center gap-3 bg-transparent border-2 border-slate-200 rounded-md w-2/5 h-[170px]'>
            <img className='w-[90px] h-[90px]' src={feature2} alt="" />

            <p className='text-teal-600 font-bold text-sm py-1 px-3 bg-pink-200 rounded-md'>Online Order</p>
        </div>

        <div className='p-3 flex flex-col justify-center items-center gap-3 bg-transparent border-2 border-slate-200 rounded-md w-2/5 h-[170px]'>
            <img className='w-[90px] h-[90px]' src={feature3} alt="" />

            <p className='text-teal-600 font-bold text-sm py-1 px-3 bg-pink-200 rounded-md'>Save Money</p>
        </div>

        <div className='p-3 flex flex-col justify-center items-center gap-3 bg-transparent border-2 border-slate-200 rounded-md w-2/5 h-[170px]'>
            <img className='w-[90px] h-[90px]' src={feature4} alt="" />

            <p className='text-teal-600 font-bold text-sm py-1 px-3 bg-pink-200 rounded-md'>Promotions</p>
        </div>

        <div className='p-3 flex flex-col justify-center items-center gap-3 bg-transparent border-2 border-slate-200 rounded-md w-2/5 h-[170px]'>
            <img className='w-[90px] h-[90px]' src={feature5} alt="" />

            <p className='text-teal-600 font-bold text-sm py-1 px-3 bg-pink-200 rounded-md'>Happy Sell</p>
        </div>

        <div className='p-3 flex flex-col justify-center items-center gap-3 bg-transparent border-2 border-slate-200 rounded-md w-2/5 h-[170px]'>
            <img className='w-[90px] h-[90px]' src={feature6} alt="" />

            <p className='text-teal-600 font-bold text-sm py-1 px-3 bg-pink-200 rounded-md'>F24/7 Support</p>
        </div>
    </div>
  )
}
