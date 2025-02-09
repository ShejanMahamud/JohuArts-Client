import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosArrowRoundBack } from "react-icons/io";
import { TbPhotoOff } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MyArtCard from "../utils/MyArtCard";

const MyArts = () => {

  const [myArts, setMyArts] = useState([]);
  const [dataFetched, setDataFetched] = useState(true);
  const [updatedArts, setUpdatedArts] = useState(false)
  const {user} = useAuth();
const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:7284/arts?email=${user?.email}`)
    .then(res => {
      setTimeout(()=>{
        setDataFetched(false);
      },1000)
      setMyArts(res.data);
    })
  },[updatedArts])


  const handleCustomize = (e) => {
    fetch(`http://localhost:7284/arts?email=${user?.email}&customization=${e.target.value}`)
  .then(res => res.json())
  .then(data => {
    setMyArts(data)
  })
  }
  

  return (
    <>
    <Helmet>
      <title>My Arts | JohuArts</title>
        <link rel="canonical" href="https://johuarts.netlify.app/my_arts" />
      </Helmet>
      {dataFetched ? (
        <div className="flex items-center justify-center space-x-2 min-h-screen w-full">
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary bg-primary"></div>
        </div>
      ) : (
        <div className="w-full py-20 font-poppins">
          <div
        onClick={() => navigate("/")}
        className="flex items-center w-[90%] mx-auto mb-10 cursor-pointer"
      >
        <IoIosArrowRoundBack className="text-2xl"/>
        <span className=" text-base font-medium">
          Back to home
        </span>
      </div>
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
          {myArts.length === 0 ? (
            <div className="w-full flex items-center justify-center flex-col gap-5">
              <TbPhotoOff className="text-5xl text-primary" />
              <span className="font-bold text-3xl">No Arts Found!</span>
            </div>
          ) : (
            <div className="w-[90%] mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-stretch gap-10">
              {myArts.map((myArt) => (
                <MyArtCard key={myArt._id} myArt={myArt} updatedArts={updatedArts} setUpdatedArts={setUpdatedArts}/>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyArts;
