import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../pages/Home';

const Subcategories = () => {

const navigate = useNavigate();
const {categories} = useContext(DataContext)

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
      <div className='w-full grid grid-cols-6 row-auto items-center gap-10 my-20'>
        {
            categories.map(category => (
                <div key={category._id} className='flex flex-col items-center gap-2'>
            <img onClick={()=>navigate(`/category/${category?.subcategory_name}`)} src={category?.image} alt="categories.jpg" className='w-40 h-40 object-cover rounded-full border-2 border-primary cursor-pointer'/>
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