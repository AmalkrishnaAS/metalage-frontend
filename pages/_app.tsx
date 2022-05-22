import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import aos
import AOS from '../components/lib/aos'
import 'aos/dist/aos.css'
import {useEffect ,useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {motion} from 'framer-motion'
  import {useRouter} from 'next/router'
  import Navbar from '../components/Navbar'
  import Head from 'next/head'
  import LoadingBar from 'react-top-loading-bar'
  

//initialize AOS


function MyApp({ Component, pageProps }: AppProps) {
 
  const [progress, setProgress] = useState(0)
  useEffect(() => {

    //set progress to 100 on route change
    //start progress bar
    
   router.events.on('routeChangeStart', () => {
      setProgress(40)
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    })
  
    AOS.init({
      duration: 1000,
    })
  }
  , [])
  const router = useRouter()
  
  
  return (
    <>
    <LoadingBar
        color='#0284c7'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed={300}
        waitingTime={800}
        shadowStyle={{
          backgroundColor: '#0284c7',
          boxShadow: '0px 0px 10px #0284c7',
        }}
        height={3}
        shadow={true}

      />
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
    }} className='w-screen h-screen'>
  <Component {...pageProps} />
  </motion.div>
  </>)
}

export default MyApp
