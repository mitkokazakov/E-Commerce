import React, { useEffect, useRef } from 'react'

import logoImage from '../images/logo.png';
import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {

    let sideMenu = useRef();
    let mensDropdown = useRef();

    const OnCLickBurgerMenu = () => {

        sideMenu.current.classList.remove('opacity-0');
        sideMenu.current.classList.add('opacity-100');
        sideMenu.current.classList.remove('-z-10');
        sideMenu.current.classList.remove('pointer-events-none');
        sideMenu.current.classList.add('z-10');
    }

    const OnClickCloseBtn = () => {

        sideMenu.current.classList.remove('opacity-100');
        sideMenu.current.classList.add('opacity-0');
        sideMenu.current.classList.remove('z-10');
        sideMenu.current.classList.add('-z-10');
        sideMenu.current.classList.add('pointer-events-none');
    }

    const OnClickMens = () => {

        if (mensDropdown.current.classList.contains('hidden')) {
            mensDropdown.current.classList.remove('hidden');
            mensDropdown.current.classList.add('flex');
            mensDropdown.current.classList.add('flex-col');
        }
        else {
            mensDropdown.current.classList.add('hidden');
            mensDropdown.current.classList.remove('flex');
            mensDropdown.current.classList.remove('flex-col');
        }
    }



    const HadleWhenClickOutsideTheMensMenu = (e) => {

        if (!mensDropdown.current.contains(e.target)) {
            mensDropdown.current.classList.add('hidden');
        }
        else {
            mensDropdown.current.classList.add('hidden');
        }
    }

    useEffect(() => {
        document.addEventListener("click", HadleWhenClickOutsideTheMensMenu, true);
    }, [])

    return (
        <div className='w-full h-[100px] top-0 bg-gray-200 opacity-90 shadow-2xl fixed flex justify-between items-center pl-10 z-20'>
            <Link to="/">
                <div className=' cursor-pointer'>
                    <img src={logoImage} alt="Logo Image" />
                </div>
            </Link>

            <ul className='flex justify-center items-center gap-20 max-md:gap-14 mr-40 max-sm:hidden max-lg:mr-10'>
                <li className='transition-all duration-200 tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 after:transition-all after:duration-200'>Home</li>

                <div className='relative'>

                    <li id="mens-btn" className='transition-all duration-200 tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 after:transition-all after:duration-200' onClick={OnClickMens}>Men</li>

                    <div ref={mensDropdown} className='absolute text-center rounded-2xl w-44 top-[100%] right-[50%] translate-x-[50%] hidden z-20 py-5 px-3 bg-slate-300 '>
                        <Link to="men/tshirts" className='font-bold tracking-wider mb-3 text-teal-500 cursor-pointer' state="T - Shirts">T - Shirts</Link>
                        <Link to="men/sweaters" className='font-bold tracking-wider mb-3 text-teal-500' state="Sweaters">Sweaters</Link>
                        <Link to="men" className='font-bold tracking-wider mb-3 text-teal-500' state="Jeans">Jeans</Link>
                        <Link to="men" className='font-bold tracking-wider mb-3 text-teal-500' state="Jackets">Jackets</Link>
                        <Outlet/>
                    </div>

                </div>

                <li className='transition-all duration-200 tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 after:transition-all after:duration-200'>Women</li>

                <li className='tracking-widest font-bold text-lg'>
                    <i className="fa-solid fa-cart-shopping text-xl cursor-pointer"></i>
                </li>
            </ul>

            <div className='hidden max-sm:flex max-sm:justify-center max-sm:items-center max-sm:gap-10'>

                <i className="fa-solid fa-cart-shopping text-xl cursor-pointer hidden max-sm:text-2xl max-sm:block max-sm:ml-16"></i>

                <i id='burger' className="fa-solid fa-bars max-sm:text-2xl max-sm:mr-5 max-sm:block cursor-pointer hidden" onClick={OnCLickBurgerMenu}></i>
            </div>

            <div ref={sideMenu} className='w-2/3 min-h-screen bg-gray-200 fixed right-0 top-0 opacity-0 -z-10 transition-all duration-500 pointer-events-none'>

                <ul className='flex flex-col justify-start items-start gap-10 px-10 py-10'>
                    <li id='closebtn' className='tracking-widest font-bold text-lg' onClick={OnClickCloseBtn}>
                        <i className="fa-solid fa-xmark text-2xl cursor-pointer"></i>
                    </li>

                    <li className='tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Home</li>

                    <li className='group tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Men

                        <div className='hidden gap-5 p-5 group-hover:flex group-hover:flex-col'>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>T - Shirts</li>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>Sweaters</li>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>Jeans</li>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>Jackets</li>
                        </div>

                    </li>

                    <li className='group tracking-widest font-bold text-lg cursor-pointer hover:text-teal-500 relative after:absolute after:w-1/2 after:h-[4px] hover:after:bg-teal-500 after:-bottom-1 after:left-0 '>Women

                        <div className='hidden gap-5 p-5 group-hover:flex group-hover:flex-col'>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>T - Shirts</li>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>Sweaters</li>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>Jeans</li>
                            <li className='font-bold tracking-wider mb-3 text-teal-500'>Jackets</li>
                        </div>


                    </li>

                </ul>
            </div>
        </div>
    )
}

