import React from "react";
import { FaYoutube,FaFacebook } from "react-icons/fa";
import Link from "next/link";
import {
    FaInstagram,
}
from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="w-full p-4  bg-white rounded-lg shadow md:px-6 md:py-8 relative mt-10 bottom-0  ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <Link href="/" class="flex items-center mb-4 sm:mb-0">
            <div className="flex cursor-pointer mb-4  md:mb-0">
            <img src="/favicon.ico" class="mr-3 h-8" alt="Flowbite Logo" />
            <div className="flex flex-col ">

            <span class="self-center text-2xl font-semibold whitespace-nowrap  font-roboto">metalage</span>
            <span className=" text-xs font-popins text-blue-400 tracking-widest  uppercase">technologies</span>
            </div>
            </div>
            
        </Link>
        <ul className="px-3 flex space-x-4 gap-3 sm:gap-0 sm:mb-0 flex-wrap items-center justify-center">
       
                <li
            
            ><Link href="/about"  >
                <a className="hover:text-gray-800 text-gray-400">About</a>
                </Link></li>
                <li
            
            ><Link href="/contact"  >
                <a className="hover:text-gray-800 text-gray-400">Contact</a>
                </Link></li>
                <li
            
            ><Link href="/products"  >
                <a className="hover:text-gray-800 text-gray-400">Products</a>
                </Link></li>
                
            <li
            
            ><a href="https://metalage-cms.onrender.com/admin/auth/login" className="hover:text-gray-800 text-gray-400" target='_blank'>
               Login
                </a></li>
            <li
            
            ><a href="https://www.facebook.com/www.metalage.net" className="hover:text-gray-800 text-gray-400" target="_blank">
                <FaFacebook size={20} ></FaFacebook>
                </a></li>
            <li
            
            ><a href="https://www.youtube.com/channel/UCDMlQ2zZq3l0GaV3PcFyIqg" className="hover:text-gray-800 text-gray-400" target="_blank">
                <FaYoutube size={20} ></FaYoutube>
                </a></li>
           
        </ul>
    
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center ">© 2022 <a href="https://flowbite.com/" class="hover:underline">Metalage Technologies</a>. All Rights Reserved.
    </span>
</footer>
    );
};

export default Footer;