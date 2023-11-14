import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const MenNavigation = () => {

    let location = useLocation();

    console.log(location.state);

    return (

        <div className='bg-gray-200 flex flex-col mt-[100px]'>
            <div className="flex justify-center items-center gap-16 px-5 py-16">
                <Link to="/men/tshirts" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="T - Shirts">T - Shirts</Link>
                <Link to="/men/sweaters" className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Sweaters">Sweaters</Link>
                <Link className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Jeans">Jeans</Link>
                <Link className=' text-xl font-bold text-teal-600 tracking-widest hover:scale-105 duration-200' state="Jackets">Jackets</Link>
            </div>

            <div>
                <p className='font-bold tracking-widest text-2xl text-teal-400 text-center'>Men's - {location.state}</p>
            </div>
            <Outlet />
        </div>

    )
}
