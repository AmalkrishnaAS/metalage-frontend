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
import SearchBar from '../../components/SearchBar'

const products = (props) => {
  const [search, setsearch] = useState('')
  const [loading, setLoading] = useState(false)
 

  
  return (
      <div className='mt-20 w-screen'>
         <CTA_slider />
         <SearchBar setsearch={setsearch}></SearchBar>
     
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
          
          
         props.products.filter(
            (product) => {
              if(product.attributes.name.toLowerCase().includes(search.toLowerCase()))

              return product
            }
          ).map((product, index) => {
            return (
              <Product
                key={product._id}
                product={product}
                index={index}
              />
            )
          })

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