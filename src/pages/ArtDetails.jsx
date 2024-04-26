import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ArtDetails = () => {

const navigate = useNavigate();

const {data} = useLoaderData();

const {image,item_name, subcategory_name,short_description,rating,customization,processing_time,stock_status} = data;

  return (
    <div className='w-full py-20 font-poppins'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-2 w-[80%] mx-auto mb-10 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25" stroke="#331A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className='text-[#331A15] text-base font-medium'>Back to home</span>
      </div>
        <div className='w-[80%] mx-auto grid grid-cols-[70%_30%] row-auto items-start gap-20 justify-items-center'>
            <img src={image} alt="art.jpg" className='w-full object-cover rounded-lg'/>
            <div className='w-full'>
                <h1 className='text-xl font-bold'>{item_name}</h1>
            </div>
        </div>
    </div>
  )
}

export default ArtDetails