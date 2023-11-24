import React from 'react'
import { SingleProduct } from './SingleProduct'

import image from '../images/product3.jpg';

export const MenSweaters = () => {
    return (
        <div className='bg-gray-200 flex flex-wrap justify-center items-center gap-5 px-8 py-10'>

            <SingleProduct key="11" imageSource={image} />
            <SingleProduct key="12" imageSource={image} />
            <SingleProduct key="13" imageSource={image} />
        </div>
    )
}
