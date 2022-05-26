import React from 'react'

const Badge = ({text}) => {
  return (
   
    <span
      class="px-4 capitalize mr-2 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
      {text}
    </span>
  )
}

export default Badge