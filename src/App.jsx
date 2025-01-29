//vertical swiper

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS
import Pages from './pages/Pages';

function App() {
  return (
    <div className="h-screen flex justify-center items-center">

      <Swiper
        direction="horizontal" // Mengatur arah swipe ke vertikal
        modules={[Pagination, Navigation]} // Menggunakan Pagination dan Navigation
        spaceBetween={10} // Jarak antar slide
        slidesPerView={1} // Menampilkan satu slide per tampilan
        loop={true} // Mengaktifkan looping
        pagination={{ clickable: true }} // Mengaktifkan pagination yang bisa diklik
        navigation // Mengaktifkan tombol navigasi
        className="w-sreen h-screen" // Menetapkan ukuran Swiper
      >
        <SwiperSlide className="bg-blue-500 text-white flex items-center justify-center h-full">
        <Pages />
        </SwiperSlide>
        <SwiperSlide className="bg-green-500 text-white flex items-center justify-center h-full">
        <Pages />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 text-white flex items-center justify-center h-full">
        <Pages />
        </SwiperSlide>
        <SwiperSlide className="bg-yellow-500 text-white flex items-center justify-center h-full">
        <Pages />
        </SwiperSlide>
        <SwiperSlide className="bg-purple-500 text-white flex items-center justify-center h-full">
        <Pages />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
