import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import aos
import AOS from '../components/lib/aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {motion} from 'framer-motion'
  import {useRouter} from 'next/router'
  import Navbar from '../components/Navbar'
  import Head from 'next/head'

//initialize AOS


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }
  , [])
  const router = useRouter()
  
  
  return (
    <>
    
    <Navbar></Navbar>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com " />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet" />
    </Head>
    <motion.div key={router.route} initial='hidden' animate='visible' variants={{
      hidden:{
        opacity:0,
        
      },
      visible:{
        opacity:1,
      
        transition:{
          duration:0.5
          
        }


        
      
      },
    }}>
  <Component {...pageProps} />
  </motion.div>
  </>)
}

export default MyApp
