import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Banner = () => {
  return (
    <div className="w-full font-dmsans relative z-10">
      <Swiper
        navigation={true}
        modules={[Navigation,Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/qYYxBD4/slider3.webp')] bg-cover bg-no-repeat bg-right w-full lg:h-[600px]  md:h-[600px] h-[700px] flex  flex-col justify-center lg:px-20 px-10 pt-10 items-start">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-black lg:w-[40%] md:w-[60%] w-[90%] my-5 font-clickerScript">WaterColor Paint Collections</h1>
            <p className="text-black opacity-80 lg:w-[40%] md:w-[40%] w-[90%] mb-10 lg:text-base md:text-base font-poppins text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur inventore quaerat hic ab magnam consectetur qui, perferendis officiis deserunt natus.</p>
            <button className="bg-primary px-4 py-3 text-base font-poppins text-white font-medium uppercase rounded">Explore Arts</button>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/SxwVzKJ/slider2-ed88e0f0-9323-45d5-bb44-fb1a02930634.webp')] bg-cover bg-no-repeat bg-center w-full lg:h-[600px]  md:h-[600px] h-[700px] flex  flex-col justify-center lg:px-20 px-10 pt-10 items-start">
            <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-black lg:w-[40%] md:w-[60%] w-[90%] my-5 font-clickerScript">Oil Painting Art Collections</h1>
            <p className="text-black opacity-80 lg:w-[40%] md:w-[40%] w-[90%] mb-10 lg:text-base md:text-base font-poppins text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur inventore quaerat hic ab magnam consectetur qui, perferendis officiis deserunt natus.</p>
            <button className="bg-primary px-4 py-3 text-base font-poppins text-white font-medium uppercase rounded">Explore Arts</button>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/rx0S9rn/slider4.webp')] bg-cover bg-no-repeat bg-center w-full lg:h-[600px]  md:h-[600px] h-[700px] flex flex-col justify-center lg:px-20 px-10 pt-10 items-start">
          <h1 className="lg:text-6xl md:text-4xl text-4xl font-bold text-black lg:w-[40%] md:w-[60%] w-[90%] my-5 font-clickerScript">Charcoal Sketching Collections</h1>
            <p className="text-black opacity-80 lg:w-[40%] md:w-[40%] w-[90%] mb-10 lg:text-base md:text-base font-poppins text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur inventore quaerat hic ab magnam consectetur qui, perferendis officiis deserunt natus.</p>
            <button className="bg-primary px-4 py-3 text-base font-poppins text-white font-medium uppercase rounded">Explore Arts</button>
          </div>

        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;