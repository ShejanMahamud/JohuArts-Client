import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtCard from '../utils/ArtCard';

const ArtsByCategories = () => {

const {data} = useLoaderData();

  return (
    <div className='w-[90%] mx-auto py-20 font-poppins'>
        <div className="flex flex-col items-start gap-2 mb-10">
        <h1 className="text-primary font-medium">Choose Categories</h1>
        <span className="text-gray-800 font-bold lg:text-3xl md:text-xl text-lg">
          Explore our art collection
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Art is something that can recharge your mind
        </p>
      </div>
      <div className='w-full grid grid-cols-2 row-auto items-center gap-10 my-20'>
        {
            data.map(art => <ArtCard key={art._id} art={art}/>)
        }
      </div>
    </div>
  )
}

export default ArtsByCategories