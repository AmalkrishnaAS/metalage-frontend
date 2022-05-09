import React from 'react'
import { DownloadIcon } from '@heroicons/react/outline'

const Hero = () => {
  return (
    <div className='text-black hero min-h-[500px] h-3/4 md:flex items-center justify-center'><div class='flex items-center flex-col justify-around  h-[70%] sm:h-[55%]'><div className='text-center w-[90%] text-white mt-20 md:mt-6'><h1 className='uppercase text-3xl mb-6 font-bold mt-12 sm:mt-0'>metalage technologies</h1> <p className='text-xl'>Providing Quality Food Processing Equipments since 2008</p></div><button class="group [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-red-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 flex mt-6 md:mt-0"><span class=" relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500 uppercase flex justify-center items-center "> Brochure <DownloadIcon className='h-6 ml-2'></DownloadIcon> </span></button ></div></div>
  )
}

export default Hero