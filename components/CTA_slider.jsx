
import Image from "next/image"
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import CTA from "./CTA";

import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import SwiperCore, {
  Autoplay,
  EffectCoverflow, Navigation, Pagination,EffectFade
} from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

// import required modules


const clients=[
    '/clients/avt.png',
    '/clients/bramhins.png',
'/clients/doublehorse.png',
'/clients/eastern.png',
'/clients/nirapara.png',
'/clients/pavizham.png',
'/clients/plantlipids.png',
'/clients/shahioman.png',
'/clients/synthite.png',
]

export default function App() {
  return (
    <div className="w-full flex items-center">
      
      <Swiper
        
        autoplay={
            {
                delay: 9000,
                disableOnInteraction: true

            }
        }
        
        navigation={true}

        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
       fadeEffect={{
            crossFade: true
        }}
      

        
        modules={[Navigation, Pagination,EffectFade]}
        className="w-full h-full  mt-5"
        loop={true}
      >
          
            
                <SwiperSlide  className='flex items-center w-full'>
                  <CTA path='/products/1' title='Food Pocessing Equipments'  desc='We offer a comprehensive line of technically advanced food processing and packaging machines.' img1='/1img1.jpg' img2='food.jpg'></CTA>
                </SwiperSlide>
                <SwiperSlide  className='flex items-center w-full'>
                  <CTA path='/products/2' title='Rice Powder Units' desc='Our engineers work in tandem with the clients to understand their requirements and provide feasible solutions for the specific process application' ></CTA>
                </SwiperSlide>
                <SwiperSlide  className='flex items-center w-full'>
                  <CTA path='/products/3' title='Ayurvedic Industry' desc='We are one of the leading supplier of a variety of Ayurvedic processing Machines and related Equipmenst required for Ayurvedic production'></CTA>
                </SwiperSlide>
                <SwiperSlide  className='flex items-center w-full'>
                  <CTA path='/products/4' title='Hotels & Catering'  desc='We have adopted latest technologies available worldwide and collaborated with key international players.our plants ensure consistency in production of high quality products.'></CTA>
                </SwiperSlide>
           
        
      </Swiper>
      <hr />
    </div>
  );
}
