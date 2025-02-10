import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




// import required modules
import { Autoplay } from 'swiper/modules';

const topslide = [
                    { id: 1 , text: `PROGRAM ANTI MATI GAYA`},
                    { id: 2 , text: `SPECIAL STRARLIGHT AREA`},
                    { id: 3 , text: `BELANJA KAPAN AJA`},
                    { id: 4 , text: `BAYAR TANGGAL MUDA`},
                    { id: 5 , text: `100% LOLOS QUALITY CONTROL`},
                    { id: 6 , text: `SHARELOC SEKARANG JUGA`}                               
                 ]

export default function TopSlide() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className='absolute top-0 z-40'
      >
        {topslide.map((data) => (
            <SwiperSlide key= {data.id} className='bg-black text-white text-center p-3' translate='no'>{data.text}</SwiperSlide>
        ))}
        </Swiper>
       
    </>
  );
}
