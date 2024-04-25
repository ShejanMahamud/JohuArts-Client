import React from 'react';
import { PiFrameCornersLight, PiMoneyLight, PiTelegramLogoLight } from "react-icons/pi";

const Speciality = () => {
  return (
    <div className='grid items-center grid-cols-3 row-auto w-[90%] mx-auto my-20 font-poppins justify-items-center'>
        <div className='flex items-center gap-3'>
        <PiTelegramLogoLight className='text-6xl text-primary'/>
        <div className='flex flex-col items-start'>
            <h1 className='font-medium text-xl mb-2'>Free Shipping</h1>
            <p className='text-sm text-gray-700'>We always care about our customer</p>
        </div>
        </div>
        <div className='flex items-center gap-3'>
        <PiFrameCornersLight className='text-6xl text-primary'/>
        <div className='flex flex-col items-start'>
            <h1 className='font-medium text-xl mb-2'>Free Frame</h1>
            <p className='text-sm text-gray-700'>We offer free frame on every paint</p>
        </div>
        </div>
        <div className='flex items-center gap-3'>
        <PiMoneyLight  className='text-6xl text-primary'/>
        <div className='flex flex-col items-start'>
            <h1 className='font-medium text-xl mb-2'>Money Back Guarantee</h1>
            <p className='text-sm text-gray-700'>We never compromise with customers</p>
        </div>
        </div>
    </div>
  )
}

export default Speciality