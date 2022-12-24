import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const Product =  ({product}) => {
  const baseUrl = 'https://metalage-cms.onrender.com/api'
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
    <div className="flex justify-center max-h-[260px] ">
    <div className="rounded-lg shadow-lg bg-white w-[210px]   ">
      <Link href={`/product/${product.id}`} ><a  data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img
          src={product.attributes.image?.data.attributes.formats.thumbnail.url||altUrl}
          className="rounded-t-lg m-auto w-full max-h-[125px] object-contain bg-gray-200" 
          alt="..."
        />
        
      </a>
      </Link>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2 uppercase">{product.attributes.name}</h5>
       <Link href={`/product/${product.id}`}><a
    
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Read More</a>
  </Link> 

        
      
      </div>
    </div>
  </div>
  )
}

export default Product

export async function getServerSideProps(context) {
  const baseUrl = 'https://metalage-cms.onrender.com/api'
  const result = await axios(
      `${baseUrl}/products/1?populate=*`
  )
  
  
  
  return {
      props: {
      products: result.data.data
      }
    }
}


