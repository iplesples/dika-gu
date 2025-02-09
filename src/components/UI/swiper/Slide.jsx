//Komponen ini untuk membuat elment didalam swip
import { SwiperSlide } from 'swiper/react';

function Slide({ bg, children }) {
  return (
    <>
    <SwiperSlide className={`bg-[url(/display/${bg}.jpg)] text-white flex items-center justify-center h-full`}>
      <div className="text-xl">{children}</div>
    </SwiperSlide>
    </>
  );
}

export default Slide;
