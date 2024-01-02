import React from 'react'
import { SingleProduct } from './SingleProduct'

import { useEffect, useState } from 'react';
import { requestAPI } from '../requests';
import { Link } from 'react-router-dom';

export const MenProducts = () => {

  const [data, setData] = useState();

  useEffect(() => {

    let fetchData = async () => {
      let result = await requestAPI.get(`/products?populate[category]=Category&filters[MaleFemale][$eq]=Male&filters[category][CategoryName][$eq]=T-Shirts`);

      setData(result.data.data);
    }


    fetchData();


  }, [])

  return (
    <div className='bg-gray-200 flex flex-wrap justify-center items-start gap-5 px-8 py-10'>


      {
        data && (data.map(p => {
          return <Link className=' w-full md:w-2/5 lg:w-[23%]' key={p.attributes.ProductId} to={`productDetails/${p.attributes.ProductId}`} state={p?.attributes.category.data.attributes.CategoryName}>
            <SingleProduct key={p.attributes.ProductId} price={p.attributes.Price} productId={p.attributes.ProductId} title={p.attributes.Title} />
          </Link>
        }))
      }
    </div>
  )
}
