import React from 'react'
import Link from 'next/link'
const Slider = (props) => {
  return (
    <div className='my-6' data-aos="fade-up">
        <div class="blog-slider">
  <div class="blog-slider__wrap swiper-wrapper">
   
  
    <div class="blog-slider__item">
      <div class="blog-slider__img">
        <img src={props.img} alt="" />
      </div>
      <div class="blog-slider__content">

        <div class="blog-slider__title font-roboto">{props.heading}</div>
        <div class="blog-slider__text">{props.desc}</div>
        <Link href={props.path}><a  class="blog-slider__button ">READ MORE</a></Link>
      </div>
    </div>
    
  </div>
  <div class="blog-slider__pagination"></div>
</div>
    </div>
  )
}

export default Slider