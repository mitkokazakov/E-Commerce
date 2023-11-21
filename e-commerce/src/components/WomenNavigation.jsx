import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const WomenNavigation = () => {

    let location = useLocation();

    

  return (
    <div className='bg-gray-200 flex flex-col mt-[100px]'>
            <div className="flex flex-col justify-center items-center gap-5 px-5 py-8 sm:flex-row sm:gap-16 sm:py-16">
                <Link to="/women/tshirts" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="T - Shirts">T - Shirts</Link>
                <Link to="/women/sweaters" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Sweaters">Sweaters</Link>
                <Link to="/women/hats" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Hats">Hats</Link>
                <Link to="/women/scarfs" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Scarfs">Scarfs</Link>
            </div>

            <div>
                <p className='font-bold tracking-widest text-2xl text-teal-400 pl-12 text-left'>Women's / {location.state}</p>
            </div>
            <Outlet />
        </div>
  )
}
