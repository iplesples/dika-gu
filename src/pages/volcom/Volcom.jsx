import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCards, EffectCreative } from 'swiper/modules';

export default function Volcom() {
// Buat referensi untuk kedua swiper
const swiperRefTop = useRef(null);
const swiperRefBottom = useRef(null);

 // State untuk menyimpan instance swiper bawah
 const [swiperBottom, setSwiperBottom] = useState(null);
 const [swiperTop, setSwiperTop] = useState(null);

   // Function untuk sinkronisasi kedua swiper (swiper atas mengikuti swiper bawah)
   const handleSlideChangeTop = (swiper) => {
    if (swiperBottom) {
      swiperBottom.slideTo(swiper.activeIndex);
    }
  };

  // Function untuk sinkronisasi kedua swiper (swiper bawah mengikuti swiper atas)
  const handleSlideChangeBottom = (swiper) => {
    if (swiperTop) {
      swiperTop.slideTo(swiper.activeIndex);
    }
  };


  return (
    <>
      <Swiper
        ref={swiperRefTop}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[240px] h-[320px]"
        loop={false}
        onSlideChange={handleSlideChangeTop} // Menambahkan event untuk perubahan slide pada swiper atas
        onSwiper={(swiper) => setSwiperTop(swiper)} // Menyimpan instance swiper atas
      >
        <SwiperSlide className='slide-card bg-sky-300'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide-card bg-amber-300'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide-card bg-gray-300'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide-card bg-violet-300'>Slide 4</SwiperSlide>
      </Swiper>

      <Swiper
        ref={swiperRefBottom}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}

        modules={[EffectCreative]}
        className="w-[320px] h-[240px] mt-5"
        onSlideChange={handleSlideChangeBottom} // Menambahkan event untuk perubahan slide pada swiper bawah
        onSwiper={(swiper) => setSwiperBottom(swiper)} // Menyimpan instance swiper bawah
      >
        <SwiperSlide className='slide-b bg-amber-500'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide-b bg-amber-500'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide-b bg-amber-500'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide-b bg-amber-500'>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}