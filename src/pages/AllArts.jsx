import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import useArts from '../hooks/useArts';

const AllArts = () => {

const {data,isPending} = useArts();
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
    <div className="w-full py-20 font-poppins bg-[url('https://i.postimg.cc/66FBrVVq/add-bg.png')] bg-no-repeat bg-cover bg-center">
      <div
        onClick={() => navigate("/")}
        className="flex items-center w-[90%] mx-auto mb-10 cursor-pointer"
      >
        <IoIosArrowRoundBack className="text-2xl"/>
        <span className=" text-base font-medium">
          Back to home
        </span>
      </div>
        <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">All Arts & Crafts</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Explore all the arts & crafts
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          We always try to provide the best art.
        </p>
      </div>
      <div className="w-[90%] mx-auto my-20">
  <table className="lg:table md:table lg:flex md:flex items-center justify-center hidden">
    <thead>
      <tr>
        <th>Art Details</th>
        <th>User Details</th>
        <th>Art Rating</th>
        <th>Art Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
{
  data.map(art => (
    <tr>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={art?.image} alt="art.png" />
          </div>
        </div>
        <div>
          <div className="font-bold">{art?.item_name}</div>
          <div className="text-sm opacity-50">{art?.subcategory_name}</div>
        </div>
      </div>
    </td>
    <td>
      {art?.user_name}
      <br/>
      <span className="badge badge-ghost badge-sm">{art?.user_email}</span>
    </td>
    <td>{art?.rating}</td>
    <td>{art?.price}</td>
    <th>
      <button onClick={()=>{
        navigate(`/art/${art?._id}`)
      }} className="bg-primary text-white font-medium uppercase text-xs px-2 py-1 rounded">details</button>
    </th>
  </tr>
  ))
}
    </tbody>  
  </table>
  <div className="overflow-x-auto lg:hidden">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      <th>Art Name</th>
        <th>Art Rating</th>
        <th>Art Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        data.map(art => (
        <tr>
        <td>{art?.item_name}</td>
        <td>{art?.rating}</td>
        <td>{art?.price}</td>
        <td><button onClick={()=>{
        navigate(`/art/${art?._id}`)
      }} className="bg-primary text-white font-medium uppercase text-xs px-2 py-1 rounded">details</button></td>
      </tr>
        ))
      }
      
    </tbody>
  </table>
</div>
</div>
    </div>
  )
}

export default AllArts