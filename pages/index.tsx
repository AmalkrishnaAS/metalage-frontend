import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import  Hero  from '../components/Hero'
import  Features  from '../components/Features'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    
   <div className=' flex flex-col items-center justify-center'>
     {/* <Navbar></Navbar> */}
                                         
      <Hero></Hero>
      <Features></Features>
      <div className='mt-20'>
      <Slider heading='Food processing' desc='We offer a comprehensive line of technically advanced food processing and packaging machines.' img='/food.jpg' path='/products/1'></Slider>
      <Slider heading='Rice Powder Units' desc='Our engineers work in tandem with the clients to understand their requirements and provide feasible solutions for the specific process application.' img='/rice.jpg'  path='/products/2' ></Slider>
      <Slider heading='Ayurvedic' desc='We are one of the leading supplier of a variety of Ayurvedic processing Machines and related Equipmenst required for Ayurvedic production' img='ayurvedic.jpg'  path='/products/3'></Slider>
      <Slider heading='Hotels & Catering' desc='We have adopted latest technologies available worldwide and collaborated with key international players.our plants ensure consistency in production of high quality products.' img='/hotel.jpg'  path='/products/4'></Slider>
      </div>
      <Footer></Footer>
      
      
    </div>
  )
}

export default Home
