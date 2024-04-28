import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCategories from '../hooks/useCategories';

const Subcategories = () => {

const navigate = useNavigate();
const {data:categories,isPending} = useCategories();

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
    <div className='w-[90%] mx-auto py-10 font-poppins'>
        <div className="flex flex-col items-start gap-2 mb-10">
        <h1 className="text-primary font-medium">Choose Categories</h1>
        <span className=" font-bold lg:text-3xl md:text-xl text-lg">
          Explore our art collection
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Art is something that can recharge your mind
        </p>
      </div>
      <div className='w-full grid grid-cols-6 row-auto items-center gap-10 my-10'>
        {
            categories.map(category => (
                <div key={category._id} className='flex flex-col items-center gap-2'>
            <div className='h-40 w-40 cursor-pointer overflow-hidden rounded-full border-2 border-primary'>
            <img onClick={()=>navigate(`/category/${category?.subcategory_name}`)} src={category?.image} alt="categories.jpg" className='w-full h-full object-cover  hover:scale-110 duration-500 hover:grayscale'/>
            </div>
            <h1 className='font-medium text-base text-center'>{category?.subcategory_name}</h1>
            <p className='text-primary text-sm font-medium'>{category?.art_count} Arts</p>
        </div>
            ))
        }
      </div>
    </div>
  )
}

export default Subcategories