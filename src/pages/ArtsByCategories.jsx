import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbPhotoOff } from "react-icons/tb";
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import ArtCard from '../utils/ArtCard';

const ArtsByCategories = () => {

const {data} = useLoaderData();
const navigate = useNavigate();
const {subcategory_name} = useParams();


  return (
    <div className="w-[90%] mx-auto py-20 font-poppins">
      <div
        onClick={() => navigate("/")}
        className="flex items-center w-full mx-auto mb-10 cursor-pointer"
      >
        <IoIosArrowRoundBack className="text-2xl"/>
        <span className=" text-base font-medium">
          Back to home
        </span>
      </div>
        <div className="flex flex-col items-start gap-2 mb-10">
        <h1 className="text-primary font-medium">{subcategory_name}</h1>
        <span className="text-gray-800 font-bold lg:text-3xl md:text-xl text-lg">
          Explore our art collection
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Art is something that can recharge your mind
        </p>
      </div>
      <div className='w-full grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-10 my-20'>
        {
            data.length !== 0 ? data.map(art => <ArtCard key={art._id} art={art}/>)
            : 
            <div className="w-full flex items-center justify-center flex-col gap-5 col-span-2">
              <TbPhotoOff className="text-5xl text-primary" />
              <span className="font-bold text-3xl">No Arts Found!</span>
            </div>
        }
      </div>
    </div>
  )
}

export default ArtsByCategories