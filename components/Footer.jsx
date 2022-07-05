import React from "react";
import { FaYoutube,FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4  py-12 h-[60vh] w-screen">
            <div className="flex flex-col items-center justify-center ">
                <div className="mb-4">
                    
                <img src="/logos/logo_black.png" className="h-48" alt="" />
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center h-10">
                 <Link className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800" href="/about">About</Link>
                    <Link className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800" href="/products">Products</Link>
                    <Link className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800" href="/contact">Contact</Link>
                    <Link className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800" href="/">Home</Link>
                    <Link className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800" href="https://aqueous-retreat-57087.herokuapp.com/admin">Login</Link>
                    

                </div>
                <div className="flex items-center gap-x-8 mt-6 my-4">
                    <div className="cursor-pointer">
                        <FaYoutube size={30} className='hover:text-red-600'></FaYoutube>
                    </div>
                    <div className="cursor-pointer">
                       <FaFacebook size={30 }className='hover:text-blue-600'></FaFacebook>
                    </div>
                   
                </div>
                <div className="flex items-center mt-6 mb-6">
                    <p className="text-base leading-4 text-gray-800">
                        2022 <span className="font-semibold">Metalage</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-gray-800"> &copy; All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
