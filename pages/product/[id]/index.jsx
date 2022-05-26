import React from 'react'
import axios from 'axios'
import Badge from '../../../components/Badge'
import products from '../../products'
import {DownloadIcon} from '@heroicons/react/solid'
import {VideoIcon} from '@heroicons/react/solid'
import { PlayIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Footer from '../../../components/Footer'

const index = ({product}) => {
    const router = useRouter()
    console.log(product)
  return (
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded max-h-[400px] max-w-[400px] m-auto" src={product.attributes.image?.data.attributes.formats.large.url} />
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">METALAGE TECHNOLOGIES</h2>
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{product.attributes.name}</h1>
        < div class="flex mb-4">
        
           {product.attributes.sections.data.map((tag,index)=>{
                return <Badge text={tag.attributes.name} key={index}/>
            })}
        
           
      
          <span class="flex ml-3 pl-3  py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500 hover:text-blue-600 hover:cursor-pointer" target={'_blank'} href={product.attributes.image?.data.attributes.formats.large.url}>
                <DownloadIcon className="w-6 h-6 " />
            </a>
            <a class="text-gray-500 hover:text-blue-600 hover:cursor-pointer" target={'_blank'} href={product.attributes.image?.data.attributes.formats.large.url}>
                
            </a>
            
            <a class="text-gray-500">
             
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{products.attributes?.desc||'Sorry! No Description available for this product at the moment please contact us dirctly for further details'}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          <div class="flex ml-6 items-center">
        
            <div class="relative">
           
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          
        <button onClick={()=>{router.push('/products')}}  class="group text-gray-600 hover:text-sky-600 transition ease-in-out duration-200">Go Back <span aria-hidden="true" class="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">&rarr;</span></button>
    
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</section>
  )
}

export default index

export const getServerSideProps = async (context) => {
    const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'
    const result = await axios(
        `${baseUrl}/products/${context.params.id}?populate=*`
    )
    return {
        props: {
        product: result.data.data
        
    }
    }
}