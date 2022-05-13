import React from 'react'
import { DownloadIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'



const Hero = () => {

  const heroVariants={
    hidden:{
      opacity:0,
      y:40
     
      
      
    },
    visible:{
      opacity:1,
      y:0,
    
      
      transition:{
        delay:0.5,
        duration:1,
        ease:'easeInOut'



  }

    }
  }
  return (
    <div className="hero h-3/4 min-h-[500px] items-center justify-center text-black md:flex">
      <motion.div class="flex h-[70%] flex-col items-center  justify-around md:h-[55%]" variants={heroVariants} initial={'hidden'} animate={'visible'}>
        <div className="mt-20 w-[90%] text-center text-white md:mt-6">
          <h1 className="mb-6 mt-12 text-5xl font-bold  md:mt-0 font-serif ">
            metalage technologies
          </h1>{' '}
          <p className="text-xl">
            Providing Quality Food Processing Equipments since 2008
          </p>
        </div>
        <a href='/brochure.pdf' target='_blank' class="group relative mt-6 flex overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-[0] before:rounded-full before:bg-red-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100 md:mt-0">
          <span class=" relative z-0 flex items-center justify-center uppercase text-black transition duration-500 ease-in-out group-hover:text-gray-200 ">
            {' '}
            Brochure <DownloadIcon className="ml-2 h-6"></DownloadIcon>{' '}
          </span>
        </a>
      </motion.div>
    </div>
  )
}

export default Hero
