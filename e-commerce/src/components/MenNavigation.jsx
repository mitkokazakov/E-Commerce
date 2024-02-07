import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const MenNavigation = () => {

    let location = useLocation();


    return (

        <div className='bg-gray-200 flex flex-col mt-[100px]'>
            <div className="flex flex-col justify-center items-center gap-5 px-5 py-8 sm:flex-row sm:gap-16 sm:py-16">
                <Link to="/men/tshirts" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="T - Shirts">T - Shirts</Link>
                <Link to="/men/sweaters" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Sweaters">Sweaters</Link>
                <Link className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Jeans">Jeans</Link>
                <Link className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Jackets">Jackets</Link>
            </div>

            <div>
                <p className='font-bold tracking-widest text-2xl text-teal-400 pl-12 text-left'>Men's / {location.state}</p>
            </div>
            <Outlet />
        </div>


    )
}
