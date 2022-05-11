import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import aos
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

//initialize AOS


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }
  , [])
  
  
  return <Component {...pageProps} />
}

export default MyApp
