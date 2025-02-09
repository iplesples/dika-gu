import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
// Import Swiper styles
import 'swiper/css';


const VolcomHorizontal = () => {

  return (
    <>
    <Swiper
       direction="vertical" // Mengatur arah swipe ke vertikal
       pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
        className="mySwiper"
    
    >
      <SwiperSlide ></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide2</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide3</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide4</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide5</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide6</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide7</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide8</div></SwiperSlide>
      <SwiperSlide><div className='w-screen h-screen text-center leading-[100vh]'>slide9</div></SwiperSlide>
    </Swiper>
  </>
  )
}

export default VolcomHorizontal