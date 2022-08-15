import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper";
import Card from "./Card";

const CustomSlider = ({ movies }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        breakpoints={{
          680: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            
          },
          1200: {
            slidesPerView: 3,
            
          },
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        // className="mySwiper"
      >
        {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Card
                slider={1}
                id={movie.id}
                rate={movie.vote_average}
                title={movie.title}
                src={movie.poster_path}
              />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSlider;
