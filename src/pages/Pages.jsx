// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS

function Pages() {
  return (
    <div className="h-screen flex justify-center items-center">

      <Swiper
        direction="vertical" // Mengatur arah swipe ke vertikal
        modules={[Pagination, Navigation]} // Menggunakan Pagination dan Navigation
        spaceBetween={10} // Jarak antar slide
        slidesPerView={1} // Menampilkan satu slide per tampilan
        slidesPerGroup={1}
        loop={true} // Mengaktifkan looping
        pagination={{ clickable: true }} // Mengaktifkan pagination yang bisa diklik
        navigation // Mengaktifkan tombol navigasi
        className="w-[100vw] h-[100vh]" // Menetapkan ukuran Swiper
      >
        <SwiperSlide className="bg-blue-500 text-white flex items-center justify-center h-full">
          <div className="text-xl">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide className="bg-green-500 text-white flex items-center justify-center h-full">
          <div className="text-xl">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 text-white flex items-center justify-center h-full">
          <div className="text-xl">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-500 text-white flex items-center justify-center h-full">
          <div className="text-xl">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide className="bg-purple-500 text-white flex items-center justify-center h-full">
          <div className="text-xl">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide className="bg-orange-500 text-white flex items-center justify-center h-full">
          <div className="text-xl">Slide 6</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Pages;
