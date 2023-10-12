import React, { useRef } from 'react'

import logoImage from '../images/logo.png';

export const NavBar = () => {

    let sideMenu = useRef();

    const OnCLickBurgerMenu = () =>{

        sideMenu.current.classList.add('max-sm:flex');
    }

    const OnClickCloseBtn = () =>{

        sideMenu.current.classList.remove('max-sm:flex');
    }

    return (
        <div className='w-full h-[100px] bg-gray-200 flex justify-between items-center pl-10 '>
            <div className=' cursor-pointer'>
                <img src={logoImage} alt="Logo Image" />
            </div>

            <ul className='flex justify-center items-center gap-20 max-md:gap-14 mr-40 max-sm:hidden max-lg:mr-10'>
                <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Home</li>
                <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Men</li>
                <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Women</li>
                <li className='tracking-widest font-bold text-lg'>
                    <i className="fa-solid fa-cart-shopping text-xl cursor-pointer"></i>
                </li>
            </ul>

            <div className='hidden max-sm:flex max-sm:justify-center max-sm:items-center max-sm:gap-10'>

                <i className="fa-solid fa-cart-shopping text-xl cursor-pointer hidden max-sm:text-2xl max-sm:block max-sm:ml-16"></i>

                <i id='burger' className="fa-solid fa-bars max-sm:text-2xl max-sm:mr-5 max-sm:block cursor-pointer hidden" onClick={OnCLickBurgerMenu}></i>
            </div>

            <div ref={sideMenu} className='w-2/3 min-h-screen bg-gray-200 fixed z-10 right-0 top-0 hidden '>

                <ul className='flex flex-col justify-start items-start gap-10 px-10 py-10'>
                    <li id='closebtn' className='tracking-widest font-bold text-lg' onClick={OnClickCloseBtn}>
                        <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
                    </li>
                    <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Home</li>
                    <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Men</li>
                    <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Women</li>
                </ul>

            </div>
        </div>
    )
}

