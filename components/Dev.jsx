import React from 'react'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import Router from 'next/router'
const Dev = () => {
    const router = useRouter()
  return (
    <div class=" min-h-screen w-screen bg-gray-50 flex items-center">
    <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
            <div class="w-full lg:w-1/2 mx-8">
                <div class="text-7xl text-blue-500 font-dark font-extrabold mb-8">
                 404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                Sorry we couldn't find the page you're looking for
            </p>
            
            <a href="#" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-blue-600 active:bg-red-600 hover:bg-red-700"  onClick={() => Router.push('/')}>back to homepage</a>
    </div>
        <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <img src="/404.svg" class="" alt="Page not found" />
        </div>
    
    </div>
    
</div>
  )
}

export default Dev