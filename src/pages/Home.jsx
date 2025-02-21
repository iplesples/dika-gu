import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const backgrounds = [
  "https://greenlight.co.id/cdn/shop/files/GO_-_MOBILE_WEB.jpg?height=1500&v=1718339521&width=844",
  "https://www.volcom.co.id/cdn/shop/files/TEES-MOB.gif?v=1739236572",
  "https://www.quiksilver.com/cdn/shop/files/QS_2.1_HP_Flip_1up_office_to_oahu_mobile_750x.jpg?v=1738095000",
  "https://im.uniqlo.com/global-cms/spa/res83874605390949fbd392d7d6fb696825fr.jpg",
  "https://im.uniqlo.com/global-cms/spa/reseb94e0dc0f5e8b93144b689054c22b74fr.jpg"
];



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
        <SwiperSlide key={index} className={`bg-amber-300 h-screen`} >
          <img src={bg} alt="" className='w-full h-full object-cover object-center' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default function Home() {
  const brand =["NEW", "FAV", "MIX"];
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
  </>
  
  );
};