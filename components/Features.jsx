import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { TruckIcon } from '@heroicons/react/outline'
import { ShieldCheckIcon } from '@heroicons/react/outline'
import { HeartIcon } from '@heroicons/react/outline'

const Features = () => {
  return (
    <div className=" flex  h-[40%] w-screen flex-wrap justify-around md:w-[90vw] space-y-3 sm:flex-row items-center font-popins font-bold">
      <div className=" space-y-3 text-center font-semibold uppercase flex flex-col  sm:m-0 space-y-0 ">
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white mb-3"><ShieldCheckIcon className='h-16 text-gray-700'></ShieldCheckIcon></div>
        <h3 className='text-gray-700'>Quality Assured</h3>
      </div>
      
      <div className=" space-y-3  font-semibold uppercase   sm:m-0 space-y-0 ">
        <div className="flex h-[120px] w-[120px]  rounded-full bg-white mb-3 flex-col items-center justify-center"><HeartIcon className='h-16 text-gray-700'></HeartIcon></div>
        <h3 className='text-gray-700 w-[120px] text-center'>Long-Term-support</h3>
      </div>
      
      <div className=" space-y-3 text-center font-semibold uppercase flex flex-col  sm:m-0 space-y-0 ">
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white mb-3"><TruckIcon className='h-16 text-gray-700'></TruckIcon></div>
        <h3 className='text-gray-700'>Quick delivery</h3>
      </div>
      
    </div>
  )
}

export default Features
