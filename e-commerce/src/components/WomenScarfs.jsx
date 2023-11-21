import React from 'react'

import image from '../images/scarf2.jpg';
import { SingleProduct } from './SingleProduct';

export const WomenScarfs = () => {
  return (

    <div className='bg-gray-200 flex flex-wrap justify-center items-center gap-5 px-8 py-10'>

            <SingleProduct imageSource={image} />
            <SingleProduct imageSource={image} />
            <SingleProduct imageSource={image} />
        </div>
  )
}
