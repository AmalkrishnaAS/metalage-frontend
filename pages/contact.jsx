import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { DownloadIcon } from '@heroicons/react/outline'

const contact = () => {
  return (
    <>
        <Navbar></Navbar>
        
        <div className='h-auto w-screen relative flex-col flex space-y-4 mt-20  sm:flex-row '>
        <div className=' p-5 min-w-[40vw]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62797.20949720705!2d76.1797966996749!3d10.355826357516948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f7eef02a5ca9%3A0x4e495d54540e7977!2sMetalage%20technologies!5e0!3m2!1sen!2sin!4v1651910258529!5m2!1sen!2sin"  styles={{border: '0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-full  bg-white rounded-xl' ></iframe>
       
        </div>
        <div class="w-full md:w-96 "> 
  <div class="p-6 border bg-white rounded-xl shadow-md  m-5 md:min-w-[600px]">
    <form method="POST" className='flex-col items-center space-y-4  '>
      <h1 className='font-bold uppercase font-3xl '>Drop a Message</h1>
      <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="" />
          </div>
      
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="mt-8">
          <button class="group [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-gray-200 relative before:absolute before:bg-blue-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 flex mt-6 md:mt-0"><span class="  space-x-3relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500 uppercase flex justify-center items-center "> Send <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
</svg> </span></button >
            </div>
     
       
       
    </form>
  </div>
 
</div>

        
        
    </div>
  <div className='mx-5 md:mx-0'>
  <Contact></Contact>
  </div>
  
        <Footer></Footer>
        
        </>
  )
}

export default contact