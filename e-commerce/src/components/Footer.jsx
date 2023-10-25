import React from 'react'

import logo from '../images/logo.png';
import appStore from '../images/app.jpg';
import googlePlay from '../images/play.jpg';
import payment from '../images/pay.png';

export const Footer = () => {
    return (

        <div className=' relative px-5 py-16 bg-gradient-to-b from-slate-100 to-slate-200  lg:flex lg:flex-nowrap lg:gap-20 lg:justify-center lg:items-start'>

            <div className=' lg:w-1/3'>
                <div className='mb-5'>
                    <img src={logo} alt="" />
                </div>

                <p className='font-bold tracking-widest mb-5'>Contact</p>

                <div className='flex flex-col gap-3 mb-10'>
                    <p className='text-slate-500 tracking-widest'><span className='font-bold tracking-widest text-black'>Address:</span> 562 Wellington Road, Street 32, San Francisco</p>

                    <p className='text-slate-500 tracking-widest'><span className='font-bold tracking-widest text-black'>Phone:</span> +001 34 55 4332 / (+359) 895 61 58 76</p>

                    <p className='text-slate-500 tracking-widest'><span className='font-bold tracking-widest text-black'>Hours:</span> 10 : 00 - 18 : 00, Mon - Sat</p>
                </div>

                <div className='mb-10'>
                    <p className='font-bold tracking-widest mb-5'> Follow Us</p>

                    <div className='flex gap-10'>
                        <i className="fa-brands fa-instagram text-2xl"></i>
                        <i className="fa-brands fa-twitter text-2xl"></i>
                        <i className="fa-brands fa-facebook text-2xl"></i>
                        <i className="fa-brands fa-youtube text-2xl"></i>
                    </div>
                </div>

            </div>



            <div className='flex gap-10 mb-10 lg:w-1/3'>
                <div>
                    <p className='font-bold tracking-widest mb-4'>About</p>

                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-500 tracking-widest'>About Us</p>
                        <p className='text-slate-500 tracking-widest'>Delivery Information</p>
                        <p className='text-slate-500 tracking-widest'>Privacy Policy</p>
                        <p className='text-slate-500 tracking-widest'>Terms & Conditions</p>
                        <p className='text-slate-500 tracking-widest'>Contact Us</p>
                    </div>
                </div>

                <div>
                    <p className='font-bold tracking-widest mb-4'>My Account</p>

                    <div className='flex flex-col gap-2'>
                        <p className='text-slate-500 tracking-widest'>Sign In</p>
                        <p className='text-slate-500 tracking-widest'>View Cart</p>
                        <p className='text-slate-500 tracking-widest'>My Orders</p>
                        <p className='text-slate-500 tracking-widest'>Help</p>
                    </div>
                </div>
            </div>

            <div className='mb-10 lg:w-1/3'>
                <p className='font-bold tracking-widest mb-4'>Install App</p>

                <p className='text-slate-500 tracking-widest mb-4'>From App Store or Google Play</p>

                <div className='flex flex-col gap-8 mb-5'>
                    <img className=' border-teal-500 border-2 rounded-xl w-3/5 sm:w-1/4 md:w-1/4 lg:w-3/5' src={appStore} alt="" />
                    <img className=' border-teal-500 border-2 rounded-xl w-3/5 sm:w-1/4 md:w-1/4 lg:w-3/5' src={googlePlay} alt="" />
                </div>

                <p className='text-slate-500 tracking-widest mb-4'>Secured Payments</p>

                <img className='w-3/4' src={payment} alt="" />
            </div>

            <p className='text-slate-500 tracking-widest lg:absolute lg:bottom-5 lg:left-[50%] lg:-translate-x-2/4'>&copy; 2023. Tech Etc2 - Thermal Power Plant 2</p>
        </div>
    )
}
