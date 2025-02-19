import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Nav from '../components/widget/Navbar';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { Pagination } from 'swiper/modules';

const backgrounds = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500'
];


const BelanjaSekarang = () => {
  const waClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (

    <div className='!fixed flex !z-50 bottom-0 mb-10 justify-center gap-8 h-[8vh]'>

     <Link to="/productlist" className='bg-slate-300 text-slate-800 shadow-black shadow-md text-2xl p-4'>BELANJA SEKARANG</Link>
     <button onClick={waClick}><FaWhatsapp className='fill-slate-800 shadow-black shadow-md h-full w-auto bg-slate-300 p-2 rounded-full'/></button>
  </div>
  )
}


const V = () => {

return (
    
  <Swiper
      direction="vertical"
      pagination={{ clickable: true }}
      modules={[Pagination]}
      loop={true}
      className="w-screen h-screen"
    >
      {backgrounds.map((bg, index) => (
        <SwiperSlide key={index} className={`flex items-center justify-center text-white text-3xl font-bold ${bg}`}>
          <img src="" alt="" />
          Slide {index + 1}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default function Home() {
  const brand =["VOLCOM", "GAP", "QUICK SILVER"];
  const pagination = {
    clickable: true,
    horizontalClass: "brand-container", // Menentukan elemen pagination
    bulletClass: "brand-bullet",
    bulletActiveClass: "brand-active",
    renderBullet: function (index, className) {
      return `<div class="${className}">${brand[index]}</div>`;
    },
  };  
  return (
  
    <>       
        <Swiper
          className="!relative h-screen w-screen !box-border"
          spaceBetween={0}
          pagination={pagination}
          modules={[Pagination]}
          >
          {brand.map((menu) => (
            <SwiperSlide key={menu.index}><V /></SwiperSlide>
          ))}
        </Swiper>  
        <BelanjaSekarang />     
    </>
  
  );
};