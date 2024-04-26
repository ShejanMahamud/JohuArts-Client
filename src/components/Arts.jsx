import React, { useContext } from 'react';
import { DataContext } from '../pages/Home';
import ArtCard from '../utils/ArtCard';

const Arts = () => {

const arts = useContext(DataContext)

  return (
    <div className="w-full py-20 font-poppins">
    <div className="flex items-center justify-between gap-2 w-[90%] mx-auto ">
      <div className="flex flex-col items-start gap-2 mb-20">
      <h1 className="text-primary font-medium">Arts & Crafts Collection</h1>
      <span className=" font-bold lg:text-3xl md:text-xl text-lg">
        Explore aesthetic arts & crafts
      </span>
      <p className="text-[#737D8C] w-[60%] text-sm">
        Our arts always tells a story.
      </p>
      </div>
    </div>
    <div className="w-[90%] mx-auto grid grid-cols-2 row-auto items-stretch gap-20">
      {
        arts.map(art => <ArtCard art={art}/>)
      }
    </div>
  </div>
  )
}

export default Arts