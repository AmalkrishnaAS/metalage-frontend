import { AnimatePresence,motion } from 'framer-motion';
import React from 'react'
import  { useEffect, useState } from 'react';
import {ChevronUpIcon} from '@heroicons/react/outline'

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
      <AnimatePresence>
    {isVisible&&<motion.button animate={{y:0}} initial={{y:1000}} exit={{y:1000}} type="button" onClick={scrollToTop} className="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 fixed right-5 z-10" id="btn-back-to-top">
    <ChevronUpIcon className='h-4 font-semibol'></ChevronUpIcon>
  </motion.button>}
  </AnimatePresence>
  )
}

export default BackToTop