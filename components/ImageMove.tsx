'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function ImageMove({ children }: { children: React.ReactNode }) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 5000 }}
      loop
      className="h-[1000px]"
    >
      {['/IMG_0452.JPG','/IMG_0453.JPG','/IMG_0454.JPG'].map((img) => (
        <SwiperSlide key={img}>
          <main
            className="h-full bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="relative z-10">{children}</div>
          </main>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
