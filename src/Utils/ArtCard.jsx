import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa6";
import { IoCheckmarkSharp, IoTimeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const ArtCard = ({art}) => {

const navigate = useNavigate();

const {image,item_name, subcategory_name,short_description,rating,customization,processing_time,stock_status,_id} = art;

  useEffect(() => {
    Aos.init();
    Aos.refresh();
}, []);

  return (
    <div className="w-full border border-gray-400 border-opacity-50 rounded-md px-5 py-5 flex flex-row gap-10 items-center justify-between relative group font-poppins" data-aos="fade-up">
    <div id="frame" className="w-full overflow-hidden h-[300px]">
        <img
          src={image}
          alt="Drawing"
          loading='lazy'
          className="border-t-2 border-b border-l-2 border-r border-gray-400 w-full object-cover group-hover:scale-110 duration-500 h-full"
        />
    </div>
    <div className="w-full mt-5 flex flex-col justify-between">
      <h1 className="font-semibold text-xl">{item_name}</h1>
      <span className="text-xs mb-3">{subcategory_name}</span>
      <p className="text-sm mt-3 mb-5">{short_description}</p>
      <div className="flex items-center gap-x-5 gap-y-3 flex-wrap">
          {/* <span><span className="font-medium">Customize</span>: Yes</span>
          <span><span className="font-medium">Rating</span>: 4.6</span>
          <span><span className="font-medium">Stock</span>: In Stock</span> */}
          <div className='flex items-center gap-2' data-tooltip-id="customize" data-tooltip-content='Customization'>
            <FaPaintRoller className='text-lg text-primary'/> <span className='text-base'>{customization}</span>
          </div>
          <div className='flex items-center gap-2' data-tooltip-id="stock" data-tooltip-content='Stock'>
            <IoCheckmarkSharp className='text-lg  text-primary'/> <span className='text-base'>{stock_status}</span>
          </div>
          <div className='flex items-center gap-2' data-tooltip-id="time" data-tooltip-content='Processing Time'>
            <IoTimeOutline className='text-lg  text-primary'/> <span className='text-base'>{processing_time}</span>
          </div>
          <div className='flex items-center gap-2' data-tooltip-id="rating" data-tooltip-content='Rating'>
            <FaStar className='text-lg  text-primary'/> <span className='text-base'>{rating}</span>
          </div>
      </div>
      <div className="w-full flex items-center justify-between mt-5">
        {/* <span className="uppercase text-primary font-bold text-lg">
          450 TAKA
        </span> */}
        <button onClick={()=>{
            navigate(`/art/${_id}`)
        }} className='w-full bg-primary text-white font-bold px-4 py-2 rounded-md uppercase hover:bg-transparent border border-primary hover:text-primary duration-300'>View Details</button>
      </div>
    </div>
    <Tooltip id='customize'/>
    <Tooltip id='stock'/>
    <Tooltip id='rating'/>
    <Tooltip id='time'/>
  </div>
  )
}

export default ArtCard