import React from 'react'
import { SingleProduct } from './SingleProduct'

import image from '../images/product3.jpg';

import { useEffect,useState } from 'react';
import { requestAPI } from '../requests';

export const MenTshirts = () => {

  const [data,setData] = useState();

    useEffect( ()=> {

      let fetchData = async () =>{
        let result = await requestAPI.get("/products?populate=*");

        setData(result.data.data);
      }


      fetchData();

      
    },[])

    console.log(data);

  return (
    <div className='bg-gray-200 flex flex-wrap justify-center items-start gap-5 px-8 py-10'>

        {/* <SingleProduct key="1" productId = '1' imageSource={image} />
        <SingleProduct key="2" productId = '2' imageSource={image} />
        <SingleProduct key="3" productId = '3' imageSource={image} />
        <SingleProduct key="4" imageSource={image} />
        <SingleProduct key="5" imageSource={image} />
        <SingleProduct key="6" imageSource={image} />
        <SingleProduct key="7" imageSource={image} />
        <SingleProduct key="8" imageSource={image} />
        <SingleProduct key="9" imageSource={image} />
        <SingleProduct key="10" imageSource={image} /> */}

        {
          data && (data.map(p => {
            return <SingleProduct key={p.attributes.ProductId} price={p.attributes.Price} productId={p.attributes.ProductId} title={p.attributes.Title} imageSource={image}/>
          }))
        }
    </div>
  )
}
