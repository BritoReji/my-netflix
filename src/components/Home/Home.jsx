import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';
import { EffectCards, Autoplay } from 'swiper/modules';

export default function App() {
  let [s,ds] = useState([1,2,3,4,5,6])
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} // Include Autoplay module
        autoplay={{ delay: 3000} }// Autoplay settings
        className="mySwiper"
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}

        {
          s.map((i)=>{
            return <SwiperSlide  key={i}>Slide {i}</SwiperSlide>
          })
        }

      </Swiper>
    </>
  );
}
