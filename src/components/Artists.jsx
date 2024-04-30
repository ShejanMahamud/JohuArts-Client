import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Artists = () => {

const [users, setUsers] = useState([])

useEffect(()=>{
    fetch('https://johuarts-backend.vercel.app/users')
    .then(res => res.json())
    .then(data => {
        setUsers(data)
    })
},[])

  return (
<div className='w-full my-20 font-poppins'>
<div className="flex items-center justify-between gap-2 w-[90%] mx-auto mb-5">
      <div className="flex flex-col items-start gap-2 my-10">
      <h1 className="text-primary font-medium">Featured Artist's</h1>
      <span className=" font-bold lg:text-3xl md:text-xl text-lg">
        Explore our talented artist
      </span>
      <p className="text-[#737D8C] w-[60%] text-sm">
        Their arts always tells a story.
      </p>
      </div>
    </div>
<div className="w-full lg:bg-[url('https://i.ibb.co/RN4VWCh/team-section.webp')] md:bg-[url('https://i.ibb.co/RN4VWCh/team-section.webp')] bg-no-repeat bg-cover bg-bottom grid lg:grid-cols-[20%_80%] grid-cols-1 row-auto items-center lg:pt-10 pt-5">
        <img src="https://i.ibb.co/Q9fKPYL/man-2.webp" loading='lazy' alt="" className='hidden lg:inline-block'/>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
  
                  className="mySwiper w-full"
                >
                   <div className='w-full grid grid-cols-5 row-auto items-center px-10 gap-5'> 
                    {
                users && users.map(user => (
                    <SwiperSlide> <div className='flex flex-col items-center text-center'>
                <img src={user?.user_photo || 'https://i.ibb.co/Lxvz266/user-1.png'}  loading='lazy' alt="" className='w-40 mb-3 rounded-full'/>
                <h1 className='font-medium text-lg mb-3 text-gray-800'>{user?.user_name}</h1>
                <p className='text-xs text-gray-600'>{user?.artist_type}</p>
            </div></SwiperSlide>

                
                ))
            }
            </div>
            </Swiper>
    </div>
</div>
  )
}

export default Artists