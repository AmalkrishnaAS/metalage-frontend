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
    
   <div className='w-screen'>
                                         
      <Hero></Hero>
      <Features></Features>
      <Slider heading='Food processing' desc='We offer a comprehensive line of technically advanced food processing and packaging machines.' img='/food.jpg'></Slider>
      <Slider heading='Rice Powder Units' desc='Our engineers work in tandem with the clients to understand their requirements and provide feasible solutions for the specific process application.' img='/rice.jpg' ></Slider>
      <Slider heading='Ayurvedic' desc='We are one of the leading supplier of a variety of Ayurvedic processing Machines and related Equipmenst required for Ayurvedic production' img='ayurvedic.jpg'></Slider>
      <Slider heading='Hotels & Catering' desc='We have adopted latest technologies available worldwide and collaborated with key international players.our plants ensure consistency in production of high quality products.' img='/hotel.jpg'></Slider>
      <Footer></Footer>
      
      
    </div>
  )
}

export default Home
