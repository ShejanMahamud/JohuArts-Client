import React from "react";
import useArts from "../hooks/useArts";
import MyArtCard from "../utils/MyArtCard";

const MyArts = () => {

const {isLoading,myArts,refetch} = useArts();

  return (
    <div className="w-full py-20 font-poppins">
      <div className="flex items-center justify-between gap-2 w-[90%] mx-auto ">
        <div className="flex flex-col items-start gap-2 mb-20">
        <h1 className="text-primary font-medium">My Arts & Crafts</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Explore your arts & crafts
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Your arts always top notch.
        </p>
        </div>
        <select className="select select-bordered w-48">
  <option disabled selected>Sort By - Customization</option>
  <option>Yes</option>
  <option>No</option>
</select>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-3 row-auto items-center gap-10">
        {
          myArts.map(myArt => <MyArtCard myArt={myArt}/>)
        }
      </div>
    </div>
  );
};

export default MyArts;
