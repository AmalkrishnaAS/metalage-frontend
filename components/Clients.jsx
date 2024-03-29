
import Image from "next/image"
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import SwiperCore, {
  Autoplay,
  EffectCoverflow, Navigation, Pagination
} from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination,  Autoplay]);

// import required modules


const clients=[
    'clients/avs.png',
    '/clients/avt.png',
    '/clients/bramhins.png',
'/clients/doublehorse.png',
'/clients/eastern.png',
'/clients/nirapara.png',
'/clients/pavizham.png',
'/clients/plantlipids.png',
'/clients/shahioman.png',
'/clients/synthite.png',
'/clients/palat.png',
]

export default function App() {
  return (
    <div className="flex items-center justify-center w-2/3 mt-6">
      
      <Swiper
     
      spaceBetween={30}
        
        autoplay={
            {
                delay: 3000,
                disableOnInteraction: false

            }
        }
        navigation={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
        loop={true}
      >
          
            {clients.map((client, index) => (
                <SwiperSlide key={index} className='flex items-center min-h-34 mb-4'>
                    <img src={client} className='m-auto w-34 mb-6 max-h-32' alt="client" />
                </SwiperSlide>
            ))}
        
      </Swiper>
    </div>
  );
}
