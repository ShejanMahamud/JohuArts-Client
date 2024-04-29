import React from 'react';
import { useNavigate } from 'react-router-dom';

const Frames = () => {

const navigate = useNavigate();

  return (
    <div className="bg-[url('bg-image.webp')] bg-no-repeat bg-center bg-cover pt-20 font-poppins mb-20">
        <div className='w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 row-auto items-center lg:gap-20 gap-10'>
            <img src="man.webp" alt="" className='w-full h-full object-cover lg:order-1 order-2'/>
            <div className='w-full flex flex-col items-start gap-10 lg:order-2 order-1'>
                <h1 className='text-4xl font-medium'><span className='bg-primary text-white'>Discover Artist's</span> Ideal Artwork</h1>
                <p className='w-[90%]'>Experience the artistry of our talented creators across various mediums and styles. Elevate your space with art that speaks to you. Browse our collection and find the perfect artwork for your home or workspace.</p>
                <button onClick={()=>{
            navigate(`/all_arts`)
        }} className=' bg-primary text-white font-bold px-4 py-2 rounded-md uppercase hover:bg-transparent border border-primary hover:text-primary duration-300'>Shop Arts</button>
            </div>
        </div>
    </div>
  )
}

export default Frames