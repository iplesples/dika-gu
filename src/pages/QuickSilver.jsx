import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';



// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function QuickSilver() {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/dc.svg" alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/dc.svg" alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/dc.svg" alt="logo"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="/dc.svg" alt="logo"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
