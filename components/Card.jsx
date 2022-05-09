import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col
        mt-5 m-5 sm:flex-row  bg-white p-3 rounded-xl sm:h-[400px] items-center max-w-[80vw] shadow-md'>
            <img src={props.img} alt="" className=' h-[400px] m-auto sm:h-1/2'/>
            <div className='text-gray-700 ml-5 text-center sm:text-left mt-5'>
                <h1 className='text-3xl font-semibold uppercase'>{props.title}</h1>
                <p className='text-md mt-3 w-full'>{props.desc}</p>


            </div>
        </div>
  )
}

export default Card