import React from 'react';
import { TbPhotoOff } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import useArts from '../hooks/useArts';
import ArtCard from '../utils/ArtCard';

const Arts = () => {

const {data:arts,isPending} = useArts();

const navigate = useNavigate();

if (isPending) {
  return (
    <div className="flex items-center justify-center space-x-2 min-h-screen w-full">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
    </div>
  );
}

  return (
    <div className="w-full py-10 font-poppins bg-[url('https://i.ibb.co/mHyFJ0C/shape-2.png')] bg-no-repeat">
    <div className="flex items-center justify-between gap-2 w-[90%] mx-auto mb-5">
      <div className="flex flex-col items-start gap-2 my-10">
      <h1 className="text-primary font-medium">Arts & Crafts Collection</h1>
      <span className=" font-bold lg:text-3xl md:text-xl text-lg">
        Explore aesthetic arts & crafts
      </span>
      <p className="text-[#737D8C] w-[60%] text-sm">
        Our arts always tells a story.
      </p>
      </div>
      <button onClick={()=>{
        setTimeout(()=>{
          navigate('/all_arts')
        },1000);
        window.scroll(0,0)
      }} className='border border-primary text-primary rounded-full px-4 py-2 text-sm hover:bg-primary duration-500 hover:text-white'>See All</button>
    </div>
    <div className="w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 row-auto items-stretch gap-10">
      {
        arts.length !== 0 ? 
        arts.slice(0,6).map(art => <ArtCard key={art._id} art={art}/>)
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

export default Arts