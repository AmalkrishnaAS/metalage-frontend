import React from 'react'
import Product from '../../components/Product'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel'
import Skeleton from '../../components/Skeleton'
import Video from '../../components/Video'
import CTA_slider from '../../components/CTA_slider'

const products = (props) => {
  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
 

  // const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'

  // useEffect(() => {
  //   const fetchData = async () => {
  //     props.setProgress(20)
  //     const result = await axios(
  //       `${baseUrl}/products?populate=*`

  //     )
  //     await setProducts(result.data.data)
  //     setLoading(false)
     

  //     return result.data.data

  //   }
  //   setProducts(fetchData())
  //   props.setProgress(100)

  // }, [])
  
  return (
      <div className='mt-20'>
         <CTA_slider />
     
      <div className="flex flex-wrap justify-center mt-24 gap-5 min-h-[300px]  sm:justify-start
      mx-3">
       
        
        
        {loading ? 
(
  <>
<Skeleton></Skeleton>
<Skeleton></Skeleton>
<Skeleton></Skeleton>
<Skeleton></Skeleton>
</>
) : (
          
          
          props.products.map((product) => (
            <Product key={product._id} product={product} />
            ))
            )}
      </div>
      {/* <Video></Video> */}
  
    <Footer></Footer>
            </div>
    
  )
}

export default products

export const  getServerSideProps = async (ctx) => {
  const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'
  const result = await axios(`${baseUrl}/products?populate=*`)
  return {
    props: {
      products: result.data.data
    }
  }
}