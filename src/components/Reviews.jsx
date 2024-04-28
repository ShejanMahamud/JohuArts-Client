import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from './../utils/ReviewCard';

const Reviews = () => {
  return (
    <div className="w-full my-20 py-10 font-poppins">
      <div className="flex flex-col items-start gap-2 w-[90%] mx-auto mb-10">
        <h1 className="text-primary font-medium">Customer Testimonials</h1>
        <span className="text-gray-800 font-bold lg:text-3xl md:text-xl text-lg">
          Hear what our customers have to say
        </span>
        <p className="text-[#737D8C] w-[60%] text-sm">
          Discover why our customers love our arts and crafts service.
        </p>
      </div>
      <div className="w-[90%] mx-auto">
        <Swiper
        className="reviewSwiper"
          modules={[Navigation]}
          spaceBetween={30}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <ReviewCard
              title={`Incredible selection of art supplies.`}
              image={"https://randomuser.me/api/portraits/women/6.jpg"}
              description={
                "I'm amazed by the variety of art supplies available here. It's like a paradise for artists!"
              }
              name={"Olivia Martinez"}
              profession={"Painter"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              title={"Best art classes I've ever attended."}
              image={"https://randomuser.me/api/portraits/men/5.jpg"}
              description={
                "The art classes offered by this service are top-notch. I've learned so much and improved my skills significantly."
              }
              name={"Daniel Brown"}
              profession={"Illustrator"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              title={"Excellent customer service."}
              image={"https://randomuser.me/api/portraits/women/4.jpg"}
              description={
                "The customer service team is very helpful and responsive. They answered all my questions and provided assistance whenever I needed it."
              }
              name={"Sarah Davis"}
              profession={"Craft Enthusiast"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              title={"Amazing quality of products."}
              image={"https://randomuser.me/api/portraits/men/3.jpg"}
              description={
                "I've been using their art supplies for a while now, and I must say, the quality is exceptional. Highly recommended!"
              }
              name={"Michael Johnson"}
              profession={"Artist"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              title={"Great community of artists."}
              image={"https://randomuser.me/api/portraits/women/2.jpg"}
              description={
                "This service has a wonderful community of artists. I've made new friends and found inspiration from other talented individuals."
              }
              name={"Emily Wilson"}
              profession={"Art Enthusiast"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              title={"Fast shipping and delivery."}
              image={"https://randomuser.me/api/portraits/men/1.jpg"}
              description={
                "I ordered some art supplies, and they arrived much sooner than expected. Very impressed with the fast shipping!"
              }
              name={"James Thomas"}
              profession={"Designer"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
