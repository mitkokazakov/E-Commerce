import React from 'react'

import image from '../images/scarf2.jpg';
import { SingleProduct } from './SingleProduct';

export const WomenScarfs = () => {
  return (

    <div className='bg-gray-200 flex flex-wrap justify-center items-center gap-5 px-8 py-10'>

            <SingleProduct key="14" imageSource={image} />
            <SingleProduct key="15" imageSource={image} />
            <SingleProduct key="16" imageSource={image} />
        </div>
  )
}
