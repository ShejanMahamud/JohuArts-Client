import React, { useEffect, useState } from "react";
import { TbPhotoOff } from "react-icons/tb";
import useAuth from "../hooks/useAuth";
import MyArtCard from "../utils/MyArtCard";

const MyArts = () => {

  const [myArts, setMyArts] = useState([]);
  const [customize, setCustomize] = useState(null);
  const [dataFetched, setDataFetched] = useState(false)
  const {user} = useAuth();

  useEffect(()=>{
    setDataFetched(true);
    fetch(`https://johuarts-backend.vercel.app/arts/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setTimeout(()=>{
        setDataFetched(false);
      },1000)
      setMyArts(data);
    })
  },[user])

useEffect(()=>{
  fetch(`https://johuarts-backend.vercel.app/customization/${customize}`)
  .then(res => res.json())
  .then(data => {
    if(data.length >0){
      setMyArts(data)
    }else{
      return <div className="flex items-center justify-center space-x-2 min-h-screen w-full">
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
      <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
    </div>
    }
  })
},[customize])

  const handleCustomize = (e) => {
    setCustomize(e.target.value)
  }
  

  return (
    <>
      {dataFetched ? (
        <div className="flex items-center justify-center space-x-2 min-h-screen w-full">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
        </div>
      ) : (
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
            <select
              onChange={handleCustomize}
              className="select select-bordered w-48"
            >
              <option selected disabled>
                Sort By - Customization
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          {dataFetched && myArts.length === 0 ? (
            <div className="w-full flex items-center justify-center flex-col gap-5">
              <TbPhotoOff className="text-5xl text-primary" />
              <span className="font-bold text-3xl">No Arts Found!</span>
            </div>
          ) : (
            <div className="w-[90%] mx-auto grid grid-cols-2 row-auto items-stretch gap-10">
              {myArts.map((myArt) => (
                <MyArtCard key={myArt._id} myArt={myArt} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyArts;
