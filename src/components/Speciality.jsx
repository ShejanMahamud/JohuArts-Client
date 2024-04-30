import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { PiFrameCornersLight, PiMoneyLight, PiTelegramLogoLight } from "react-icons/pi";
const Speciality = () => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
}, []); 

  return (
    <div className='grid items-center lg:grid-cols-3 grid-cols-1 gap-10 row-auto w-[90%] mx-auto my-20 font-poppins lg:justify-items-center' data-aos="fade-up">
        <div className='flex items-center gap-5'>
        <PiTelegramLogoLight className='text-6xl text-primary'/>
        <div className='flex flex-col items-start'>
            <h1 className='font-medium lg:text-xl text-base mb-2'>Free Shipping</h1>
            <p className='text-xs'>We always care about our customer</p>
        </div>
        </div>
        <div className='flex items-center gap-5'>
        <PiFrameCornersLight className='text-6xl text-primary'/>
        <div className='flex flex-col items-start'>
            <h1 className='font-medium lg:text-xl text-base mb-2'>Free Frame</h1>
            <p className='text-xs '>We offer free frame on every paint</p>
        </div>
        </div>
        <div className='flex items-center gap-5'>
        <PiMoneyLight  className='text-6xl text-primary'/>
        <div className='flex flex-col items-start'>
            <h1 className='font-medium lg:text-xl text-base mb-2'>Money Back Guarantee</h1>
            <p className='text-xs '>We never compromise with customers</p>
        </div>
        </div>
    </div>
  )
}

export default Speciality