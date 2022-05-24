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
    <div className="hero  min-h-[500px] items-center justify-center text-black md:flex min-w-screen">
      <motion.div className="flex h-[70%] flex-col items-center  justify-around md:h-[55%]" variants={heroVariants} initial={'hidden'} animate={'visible'}>
        <div className="mt-20 w-[100%] text-center text-white md:mt-6 flex flex-col space-y-3 sm:space-y-8">
          <h1 className="font-roboto font-extrabold text-4xl mt-6 sm:text-5xl   ">
            Metalage Technologies
          </h1>{' '}
          <p className="text-xl font-pacifico sm:text-2xl ">
            Making Growth a sure thing since 2008.
          </p>
        </div>
        <a href='/brochure.pdf' target='_blank' className="group relative mt-6 flex overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:scale-[0] before:rounded-full before:bg-red-600 before:opacity-0 before:transition before:duration-500 before:ease-in-out hover:before:scale-[6] hover:before:opacity-100 md:mt-0">
          <span className=" relative z-0 flex items-center justify-center uppercase text-black transition duration-500 ease-in-out group-hover:text-gray-200 ">
            {' '}
            Brochure <DownloadIcon className="ml-2 h-6"></DownloadIcon>{' '}
          </span>
        </a>
      </motion.div>
    </div>
  )
}

export default Hero
