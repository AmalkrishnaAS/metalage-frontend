import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'

const Product =  ({product}) => {
  const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'
  const id=product.id
  const [altUrl, setAltUrl] = useState('/loading.gif')
  const router = useRouter()

  //fetch product by id in useEffect
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${baseUrl}/products/${id}?populate=*`
      )
      setAltUrl(result.data.data.attributes.image.data.attributes.url)

    }
    fetchData()
  }, [])
  console.log(altUrl)
  return (
    <div class="flex justify-center max-h-[235px] ">
    <div class="rounded-lg shadow-lg bg-white w-[200px]   ">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          src={product.attributes.image?.data.attributes.formats.thumbnail.url||altUrl}
          class="rounded-t-lg m-auto w-full max-h-[125px] object-contain bg-gray-200" 
          alt="..."
        />
        
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2 uppercase">{product.attributes.name}</h5>
        <div className={`w-24 h-5 flex ${router.pathname==='/products'?'visible':'hidden'} items-center justify-center  bg-blue-600  rounded-lg text-[10px] text-white  capitalize`}>{product.attributes.category}</div>
        
      
      </div>
    </div>
  </div>
  )
}

export default Product

export async function getServerSideProps(context) {
  const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'
  const result = await axios(
      `${baseUrl}/products/1?populate=*`
  )
  
  
  
  return {
      props: {
      products: result.data.data
      }
    }
}


