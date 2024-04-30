import Aos from 'aos';
import "aos/dist/aos.css";
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

useEffect(() => {
  Aos.init();
  Aos.refresh();
}, []);

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
<div className="w-full" data-aos="fade-up">
        
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
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
  
                  className="mySwiper w-full"
                >
                   <div className='w-full grid grid-cols-5 row-auto items-center px-10 gap-5'> 
                    {
                users && users.map(user => (
                    <SwiperSlide key={user.user_name}> <div className='flex flex-col items-center text-center'>
                <img src={user?.user_photo || 'https://i.ibb.co/Lxvz266/user-1.png'}  loading='lazy' alt="" className='w-40 mb-3 rounded-full'/>
                <h1 className='font-medium text-lg mb-3'>{user?.user_name}</h1>
                <p className='text-xs'>{user?.artist_type}</p>
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