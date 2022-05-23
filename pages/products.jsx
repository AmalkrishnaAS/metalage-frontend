import React from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'

const products = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
 

  const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'

  useEffect(() => {
    const fetchData = async () => {
      props.setProgress(20)
      const result = await axios(
        `${baseUrl}/products?populate=*`

      )
      await setProducts(result.data.data)
      setLoading(false)
     

      return result.data.data

    }
    setProducts(fetchData())
    props.setProgress(100)

  }, [])
  console.log(products[0]?.attributes.image.data.attributes.formats.thumbnail.url);
  return (
      <div className=''>
     
      <div className="flex flex-wrap justify-center mt-24 gap-5  sm:justify-start
      mx-3">
        
        {loading ? '' : (
          
          
          products.map((product) => (
            <Product key={product._id} product={product} />
            ))
            )}
      </div>
  
    <Footer></Footer>
            </div>
    
  )
}

export default products