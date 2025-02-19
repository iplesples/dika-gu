import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function CheckoutModal({product, onClose}) {
  return (
    <div className='fixed inset-0 backdrop-blur-sm w-screen h-screen'>


      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mt-2 w-[70vw]"
      >
        <SwiperSlide className='p-1 rounded-[18px]'><img src={product.photoDetails[0]} alt="" className='object-contain'/></SwiperSlide>
        <SwiperSlide className='rounded-[18px]'><img src={product.photoDetails[1]} alt="" className='object-contain'/></SwiperSlide>
        <SwiperSlide className='rounded-[18px]'><img src={product.photoDetails[2]} alt="" className='object-contain'/></SwiperSlide>
        <SwiperSlide className='rounded-[18px]'><img src={product.photoDetails[3]} alt="" className='object-contain'/></SwiperSlide>
        <SwiperSlide className='rounded-[18px]'><img src={product.photoDetails[4]} alt="" className='object-contain'/></SwiperSlide>
     
      </Swiper>
      <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded">Cancel</button>
    </div>
  );
}
