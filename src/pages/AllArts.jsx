import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AllArts = () => {

const {data} = useLoaderData();
const navigate = useNavigate();

  return (
    <div className='w-full py-20 font-poppins'>
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
  <table className="table flex items-center justify-center">
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
</div>
    </div>
  )
}

export default AllArts