import React from 'react'
import { SingleProduct } from './SingleProduct'

import image from '../images/product3.jpg';

export const MenTshirts = () => {
  return (
    <div className='bg-gray-200 flex flex-wrap justify-center items-center gap-5 px-8 py-10'>

        <SingleProduct key="1" productId = '1' imageSource={image} />
        <SingleProduct key="2" productId = '2' imageSource={image} />
        <SingleProduct key="3" productId = '3' imageSource={image} />
        <SingleProduct key="4" imageSource={image} />
        <SingleProduct key="5" imageSource={image} />
        <SingleProduct key="6" imageSource={image} />
        <SingleProduct key="7" imageSource={image} />
        <SingleProduct key="8" imageSource={image} />
        <SingleProduct key="9" imageSource={image} />
        <SingleProduct key="10" imageSource={image} />
    </div>
  )
}
