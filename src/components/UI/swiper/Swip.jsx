// Komponen ini akan menangani slide element
import { Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

function Swip({ direction = "vertical", children }) {
  return (
    <Swiper
      direction={direction} // Mengatur arah swipe
      modules={[Pagination, Navigation]} // Menggunakan Pagination dan Navigation
      spaceBetween={10} // Jarak antar slide
      slidesPerView={1} // Menampilkan satu slide per tampilan
      loop={true} // Mengaktifkan looping
      pagination={{ clickable: true }} // Mengaktifkan pagination yang bisa diklik
      navigation // Mengaktifkan tombol navigasi
      className="w-full h-screen"
    >
      {children}
    </Swiper>
  );
}

export default Swip;
