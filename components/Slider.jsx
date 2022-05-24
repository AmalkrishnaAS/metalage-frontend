import React from 'react'
import Link from 'next/link'
const Slider = (props) => {
  return (
    <div className='my-6' data-aos="fade-up">
        <div className="blog-slider">
  <div className="blog-slider__wrap swiper-wrapper">
   
  
    <div className="blog-slider__item">
      <div className="blog-slider__img">
        <img src={props.img} alt="" />
      </div>
      <div className="blog-slider__content">

        <div className="blog-slider__title font-roboto">{props.heading}</div>
        <div className="blog-slider__text">{props.desc}</div>
        <Link href={props.path}><a  className="blog-slider__button ">READ MORE</a></Link>
      </div>
    </div>
    
  </div>
  <div className="blog-slider__pagination"></div>
</div>
    </div>
  )
}

export default Slider