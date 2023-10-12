import React from 'react'

import logoImage from '../images/logo.png';

export const NavBar = () => {
    return (
        <div className='w-full h-[100px] bg-gray-200 flex justify-between items-center pl-10 pr-5'>
            <div className=' cursor-pointer'>
                <img src={logoImage} alt="Logo Image" />
            </div>

            <ul className='flex justify-center items-center gap-20 max-md:gap-14 mr-40 max-sm:hidden max-lg:mr-10'>
                <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Home</li>
                <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Men</li>
                <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Women</li>
                <li className='tracking-widest font-bold text-lg'>
                    <i class="fa-solid fa-cart-shopping text-xl cursor-pointer"></i>
                </li>
            </ul>
            <i class="fa-solid fa-bars max-sm:text-2xl max-sm:block cursor-pointer hidden"></i>
        </div>
    )
}

