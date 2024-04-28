import React from 'react';
import useArts from '../hooks/useArts';
import ArtCard from '../utils/ArtCard';

const Arts = () => {

const {data: arts,isPending} = useArts();

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
    <div className="w-full py-10 font-poppins">
    <div className="flex items-center justify-between gap-2 w-[90%] mx-auto ">
      <div className="flex flex-col items-start gap-2 my-10">
      <h1 className="text-primary font-medium">Arts & Crafts Collection</h1>
      <span className=" font-bold lg:text-3xl md:text-xl text-lg">
        Explore aesthetic arts & crafts
      </span>
      <p className="text-[#737D8C] w-[60%] text-sm">
        Our arts always tells a story.
      </p>
      </div>
    </div>
    <div className="w-[90%] mx-auto grid grid-cols-2 row-auto items-stretch gap-10">
      {
        arts.map(art => <ArtCard art={art}/>)
      }
    </div>
  </div>
  )
}

export default Arts