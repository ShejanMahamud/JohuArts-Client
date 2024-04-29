import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const ReviewCard = ({image,title,description,name,profession}) => {

  useEffect(() => {
    Aos.init();
    Aos.refresh();
}, []);

  return (
    <div className='w-full px-8 py-5  shadow-xl rounded-lg *:mb-3 flex flex-col justify-between my-10 font-poppins' data-aos="fade-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34" viewBox="0 0 42 34" fill="none">
  <path d="M0 34V22.625C0 18.375 0.752239 14.4583 2.25672 10.875C3.76119 7.29167 6.31045 3.66667 9.90448 0L16.4239 5.125C14.3343 7.20834 12.7463 9.16667 11.6597 11C10.5731 12.8333 9.86269 14.7083 9.52836 16.625H17.5522V34H0ZM24.4478 34V22.625C24.4478 18.375 25.2 14.4583 26.7045 10.875C28.209 7.29167 30.7582 3.66667 34.3522 0L40.8716 5.125C38.7821 7.20834 37.194 9.16667 36.1075 11C35.0209 12.8333 34.3104 14.7083 33.9761 16.625H42V34H24.4478Z" fill="#F5F5F5"/>
</svg>
<h1 className=' font-bold text-lg'>{title}</h1>
<p className='text-[#737D8C] leading-[24px] text-sm'>{description}</p>
<div className='flex items-center gap-3'>
    <img src={image} alt="" className='w-10 rounded-full h-10 border-2 border-primary'/>
    <div className='flex flex-col items-start'>
        <h1 className=' font-bold text-base'>{name}</h1>
        <p className='text-[#737D8C] text-sm'>{profession}</p>
    </div>
</div>
            </div>
  )
}

export default ReviewCard