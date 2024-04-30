import Aos from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { HiBolt } from "react-icons/hi2";
import { LuLassoSelect } from "react-icons/lu";
import { TbTransactionDollar } from "react-icons/tb";

const WhyUs = () => {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

  return (
    <div className=" w-full my-20 py-10 font-poppins">
       <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
          <h1 className="text-primary font-medium">Why Us?</h1>
          <span className="font-bold lg:text-3xl md:text-xl text-lg">
          Giving you peace of mind
          </span>
          <p className="text-[#737D8C] w-[60%] text-sm">
            Choosing us will give you peace of mind
          </p>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 grid-rows-6 gap-10 lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-3">
  {/* 1st card */}
  <div className="flex flex-col gap-3 items-center text-center shadow-xl px-8 py-8 rounded-xl   hover:shadow-sm" data-aos="fade-up">
    <div className="h-16 w-16 bg-[#9848FF] flex items-center justify-center rounded-xl shadow-voilet-shadow">
    <LuLassoSelect className='text-white text-3xl'/>
    </div>
    <h1 className="font-semibold text-lg">Quality Assurance</h1>
    <p className=" text-xs">
    Explore a curated selection of top-tier artwork, ensuring excellence in every piece.
    </p>
  </div>
  {/* 2nd card */}
  <div className="flex flex-col gap-3 items-center text-center border border-gray-200 border-opacity-5 px-8 py-8 rounded-xl shadow-md hover:shadow-xl hover:border-none" data-aos="fade-up">
    <div className="h-16 w-16 bg-[#A7CE4A] flex items-center justify-center rounded-xl shadow-light-green">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M14.9596 27H21.0403C21.2384 25.1976 22.1581 23.7097 23.6514 22.0839C23.8195 21.9009 24.8982 20.7846 25.0261 20.6252C26.2977 19.0396 27 17.0775 27 15C27 10.0294 22.9706 6 18 6C13.0294 6 9 10.0294 9 15C9 17.0765 9.70161 19.0375 10.9719 20.6226C11.1001 20.7825 12.1812 21.9018 12.3473 22.0827C13.8415 23.7096 14.7615 25.1976 14.9596 27ZM21 30H15V31.5H21V30ZM8.63093 22.4988C6.98468 20.4445 6 17.8372 6 15C6 8.37258 11.3726 3 18 3C24.6275 3 30 8.37258 30 15C30 17.8387 29.0142 20.4473 27.3665 22.5021C26.436 23.6622 24 25.5 24 27.75V31.5C24 33.1569 22.6569 34.5 21 34.5H15C13.3431 34.5 12 33.1569 12 31.5V27.75C12 25.5 9.56187 23.6604 8.63093 22.4988ZM19.5 15.0072H23.25L16.5 24.0072V18.0072H12.75L19.5 9V15.0072Z"
          fill="white"
        />
      </svg>
    </div>
    <h1 className="font-semibold text-lg">Diverse Collection</h1>
    <p className=" text-xs">
    From traditional paintings to contemporary sculptures, find the perfect artwork to match your style and taste.
    </p>
  </div>
  {/* 3rd card */}
  <div className="flex flex-col gap-3 items-center text-center border border-gray-200 border-opacity-5 px-8 py-8 rounded-xl shadow-md hover:shadow-xl hover:border-none" data-aos="fade-up">
    <div className="h-16 w-16 bg-[#4D93DF] flex items-center justify-center rounded-xl shadow-light-blue">
      <TbTransactionDollar className='text-white text-3xl'/>
    </div>
    <h1 className="font-semibold text-lg">Trustworthy Transactions</h1>
    <p className="text-xs">
    Shop and sell with confidence through our secure platform, backed by transparent processes and reliable support.
    </p>
  </div>
  {/* 4th card */}
  <div className="flex flex-col gap-3 items-center text-center border border-gray-200 border-opacity-5 px-8 py-8 rounded-xl shadow-md hover:shadow-xl hover:border-none" data-aos="fade-up">
    <div className="h-16 w-16 bg-[#FF60A8] flex items-center justify-center rounded-xl shadow-light-pink">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M25.4006 13.4474C24.639 7.55343 19.6012 3 13.5 3C6.87258 3 1.5 8.37258 1.5 15C1.5 17.8386 2.48561 20.4469 4.13325 22.5016C5.34527 24.0131 6.00049 25.6878 6.00037 27.4592L6 33H19.5L19.5015 28.5H22.5C24.1569 28.5 25.5 27.1569 25.5 25.5V21.1065L28.4389 19.8475C28.9537 19.6271 28.9986 19.1051 28.7763 18.7556L25.4006 13.4474ZM4.5 15C4.5 10.0294 8.52944 6 13.5 6C18.0364 6 21.8498 9.37712 22.4251 13.8318L22.5108 14.4939L24.8246 18.1322L22.5 19.1278V25.5H16.5026L16.501 30H9.0002L9.00037 27.4594C9.00054 25.0008 8.11448 22.671 6.47367 20.6248C5.20227 19.0394 4.5 17.0773 4.5 15ZM31.7302 27.1536L29.2339 25.4894C30.6654 23.3463 31.5 20.7707 31.5 18.0002C31.5 15.2295 30.6654 12.6538 29.2339 10.5108L31.7302 8.84656C33.48 11.4658 34.5 14.6138 34.5 18.0002C34.5 21.3864 33.48 24.5343 31.7302 27.1536Z"
          fill="white"
        />
      </svg>
    </div>
    <h1 className="font-semibold text-lg">Artist Support</h1>
    <p className="text-xs">
    Empower talented artists worldwide by purchasing their creations and contributing to the thriving art community.
    </p>
  </div>
  {/* 5th card */}
  <div className="flex flex-col gap-3 items-center text-center border border-gray-200 border-opacity-5 px-8 py-8 rounded-xl shadow-md hover:shadow-xl hover:border-none" data-aos="fade-up">
    <div className="h-16 w-16 bg-[#F66742] flex items-center justify-center rounded-xl shadow-light-orange">
      <HiBolt className='text-white text-3xl'/>
    </div>
    <h1 className="font-semibold text-lg">Personalized Service</h1>
    <p className="text-xs">
    Receive tailored assistance and guidance to make your art-buying journey seamless and enjoyable.
    </p>
  </div>
  {/* 6th card */}
  <div className="flex flex-col gap-3 items-center text-center border border-gray-200 border-opacity-5 px-8 py-8 rounded-xl shadow-md hover:shadow-xl hover:border-none" data-aos="fade-up">
    <div className="h-16 w-16 bg-[#FFCF59] flex items-center justify-center rounded-xl shadow-light-yellow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M4.7417 6.70386C8.37762 3.06793 14.1707 2.90398 18.0012 6.21199C21.8292 2.90398 27.6224 3.06793 31.2582 6.70386C34.8876 10.3333 35.0574 16.1121 31.7677 19.9428L20.1213 31.6293C19.0029 32.7477 17.2213 32.7986 16.0428 31.7819L15.8787 31.6293L4.23212 19.9428C0.942423 16.1121 1.11228 10.3333 4.7417 6.70386ZM6.86301 8.82517C4.30229 11.3859 4.22913 15.4922 6.64353 18.1413L6.86301 18.3711L18 29.508L25.9539 21.552L20.6516 16.2498L19.0606 17.8408C17.3033 19.5981 14.454 19.5981 12.6966 17.8408C10.9393 16.0835 10.9393 13.2342 12.6966 11.4768L15.8484 8.32308C13.2794 6.26643 9.55614 6.36063 7.0929 8.60568L6.86301 8.82517ZM19.5909 13.0678C20.1767 12.482 21.1264 12.482 21.7122 13.0678L28.0752 19.4307L29.1369 18.3711C31.7729 15.7352 31.7729 11.4612 29.1369 8.82517C26.5761 6.26445 22.4698 6.19128 19.8209 8.60568L19.5909 8.82517L14.818 13.5981C14.274 14.1421 14.2352 14.9999 14.7014 15.5886L14.818 15.7194C15.3619 16.2634 16.2196 16.3023 16.8084 15.8359L16.9394 15.7194L19.5909 13.0678Z"
          fill="white"
        />
      </svg>
    </div>
    <h1 className="font-semibold text-lg">Engaging Community</h1>
    <p className="text-xs">
    Join a vibrant community of art enthusiasts, participate in exclusive events, and stay connected with the latest trends.
    </p>
  </div>
</div>

    </div>
  )
}

export default WhyUs