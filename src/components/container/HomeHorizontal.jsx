import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import Display1 from '../widget/Display1';
import bg1 from '../../assets/display/home1.jpg'
import bg2 from '../../assets/display/display2.jpg'
import bg3 from '../../assets/display/display3.jpg'
import bg4 from '../../assets/display/display4.jpg'
import bg5 from '../../assets/display/display5.jpg'
import Nav from '../widget/Navbar';


const HomeHorizontal = () => {
  return (
      <>
        <Swiper
           direction="vertical" // Mengatur arah swipe ke vertikal
           modules={[Pagination, Navigation]} // Menggunakan Pagination dan Navigation
           spaceBetween={0} // Jarak antar slide
           slidesPerView={1} // Menampilkan satu slide per tampilan
           slidesPerGroup={1}
           loop={true} // Mengaktifkan looping
           pagination={{ clickable: true }} // Mengaktifkan pagination yang bisa diklik
           navigation // Mengaktifkan tombol navigasi
           className="w-[100vw] h-[100vh]" // Menetapkan ukuran Swiper
        
        >
          
          <SwiperSlide><Display1 background={bg1}/></SwiperSlide>
          <SwiperSlide><Display1 background={bg2}/></SwiperSlide>
          <SwiperSlide><Display1 background={bg3}/></SwiperSlide>
          <SwiperSlide><Display1 background={bg4}/></SwiperSlide>
          <SwiperSlide><Display1 background={bg5}/></SwiperSlide>
          
          
        </Swiper>
        <Nav />
      </>
  )
}

export default HomeHorizontal