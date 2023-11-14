import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const MenNavigation = () => {
    return (

        <div className='bg-gray-200 flex flex-col mt-[100px]'>
            <div className="flex justify-center items-center gap-16 px-5 py-16">
                <Link to="/men/tshirts" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200'>T - Shirts</Link>
                <Link to="/men/sweaters" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200'>Sweaters</Link>
                <Link className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200'>Jeans</Link>
                <Link className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200'>Jackets</Link>
            </div>

            <Outlet />
        </div>

    )
}
