import React from 'react'

import product1 from '../images/product1.jpg';
import { SingleProduct } from './SingleProduct';

export const FeaturedAndArrivals = ({title, descr}) => {
    return (
        <div className=' bg-slate-300 w-full pb-10'>

            <div className='text-center py-10'>
                <h1 className='font-bold text-4xl mb-5 tracking-widest font-mono'>{title}</h1>

                <p className=' text-slate-100 text-xl px-5 font-mono'>{descr}</p>
            </div>

            <div className=' flex flex-wrap justify-center items-center gap-5 px-8 pb-10'>

                <SingleProduct imageSource={product1} />                 
                <SingleProduct imageSource={product1} />                 
                <SingleProduct imageSource={product1} />                 
                <SingleProduct imageSource={product1} />

                

            </div>
        </div>
    )
}
