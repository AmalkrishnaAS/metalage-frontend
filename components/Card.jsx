import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col
        mt-5 m-5 md:flex-row  bg-white p-3 rounded-xl md:h-[400px] items-center max-w-[80vw] shadow-md' data-aos="zoom-in">
            <img src={props.img || '/fallback.jpgc'} alt="" className=' h-[400px] m-auto md:h-1/2'/>
            <div className='text-gray-700  text-center  md:ml-5 text-left mt-5'>
                <h1 className='text-3xl font-semibold uppercase'>{props.title}</h1>
                <p className='text-md mt-3 ml-0 text-center p-3 md:ml-5'>{props.desc}</p>


            </div>
        </div>
  )
}

export default Card