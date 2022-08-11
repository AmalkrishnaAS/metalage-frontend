import React from 'react'





const Contact = () => {
  return (
    <div className='bg-white rounded-xl shadow-md  max-w-[700px] m-auto p-8'>
      <div className=' flex flex-col items-center justify-center sm:flex-row gap-5'>
    
        <div className='h-12 w-12 bg-gray-200 p-3 rounded-full  items-center justify-center flex ' >
        <img src="/whatsapp.svg" className='h-8 w-8' alt="" />
        </div>
        <a className='text-gray-600 font-semibold cursor-pointer' href='https://wa.me/919526993363' target={'_blank'}
        > 9526 993 363</a>
        <div className='h-12 w-12 bg-gray-200 p-3 rounded-full flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
</svg>

        </div>
        <a href="tel:9846680574" target={'_blank'}> <span className='text-gray-600 font-semibold'>9846 680 574</span></a>
        
       
        <div className='h-12 w-12 bg-gray-200 p-3 rounded-full flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
</svg>

        </div>
        <a href="mailto:info@metalage.net" target={'_blank'}>
        <span className='text-gray-600 font-semibold'>info@metalage.net</span>
        </a>
       
      </div>
    </div>
  )
}

export default Contact