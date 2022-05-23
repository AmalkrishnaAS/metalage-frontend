import React from 'react'
import Product from '../../../components/Product'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Carousel from '../../../components/Carousel'
import Skeleton from '../../../components/Skeleton'
import { useRouter } from 'next/router'



const products = (props) => {

    
    

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([]);
    const router = useRouter()
    //set items in useeffect
    useEffect(() => {
        setItems(props.products);
    }, [props.products]);

    
    
    
  
  
  return (
      <div className=''>
     
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
) : 
(
          
          
          items.map((product) => (
            <Product key={product.attributes._id} product={product} />
            ))
            )}
      </div>
  
    <Footer></Footer>
            </div>
    
  )
}

export default products


//fetch data through getserverSideProps

export async function getServerSideProps(context) {
    const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'
    const result = await axios(
        `${baseUrl}/sections/${context.params.id}?populate=*`
    )

    //fetch product by id
    
    
    
    return {
        props: {
        products: result.data.data.attributes.products.data,
        

        }
  }
}