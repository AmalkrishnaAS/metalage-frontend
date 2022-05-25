import React from 'react'

const SearchBar = ({setsearch}) => {
  return (
    <div className='flex w-full justify-center mt-10 sm:justify-end w-[90%]'>
    <input type="search" placeholder='Search' className='w-[75%] rounded-2xl px-4 py-[6px]  transition-all duration-300 ease-in-out focus: outline-none focus:w-[90%] focus:border-gray-400 placeholder:text-gray-600 text-gray-800 focus:placeholder:hidden border-gray-300 border-2 sm:w-[35%] sm:focus:w-[55%] placeholder:px-2 '
    onChange={
        (e)=>setsearch(e.target.value)
    }
      />
        </div>
  )
}

export default SearchBar