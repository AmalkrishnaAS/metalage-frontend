import React from 'react'

const Slider = (props) => {
  return (
    <div className='my-6'>
        <div class="blog-slider">
  <div class="blog-slider__wrap swiper-wrapper">
   
  
    <div class="blog-slider__item">
      <div class="blog-slider__img">
        <img src={props.img} alt="" />
      </div>
      <div class="blog-slider__content">

        <div class="blog-slider__title">{props.heading}</div>
        <div class="blog-slider__text">{props.desc}</div>
        <a href="#" class="blog-slider__button">READ MORE</a>
      </div>
    </div>
    
  </div>
  <div class="blog-slider__pagination"></div>
</div>
    </div>
  )
}

export default Slider