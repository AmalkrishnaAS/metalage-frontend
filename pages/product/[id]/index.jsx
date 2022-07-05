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
import { useState } from 'react'

const index = ({product}) => {
 
    const router = useRouter()
    
  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded max-h-[400px] max-w-[400px] m-autoya" src={product.attributes.image?.data.attributes?.formats?.large?.url|| product.attributes.image?.data.attributes?.formats?.thumbnail?.url } />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">METALAGE TECHNOLOGIES</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{product.attributes.name}</h1>
        < div className="flex mb-4">
        
           {product.attributes.sections.data.map((tag,index)=>{
                return <Badge text={tag.attributes.name} key={index}/>
            })}
        
           
      
          <span className="flex ml-3 pl-3  py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500 hover:text-blue-600 hover:cursor-pointer" target={'_blank'} href={product.attributes.image?.data.attributes.formats.large?.url||product.attributes.image?.data.attributes?.formats?.thumbnail?.url||'/fallback.jpg'}>
                <DownloadIcon className="w-6 h-6 " />
            </a>
            <a className="text-gray-500 hover:text-blue-600 hover:cursor-pointer" target={'_blank'} href={product.attributes.image?.data.attributes.formats.large?.url||product.attributes.image?.data.attributes?.formats?.thumbnail?.url||'/fallback.jpg'}>
                
            </a>
            
            <a className="text-gray-500">
             
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{product.attributes?.desc || 'No description available at the moment please contact us directly for more information'}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
          <div className="flex ml-6 items-center">
        
            <div className="relative">
           
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          
        <button onClick={()=>{router.push('/products')}}  className="group text-gray-600 hover:text-sky-600 transition ease-in-out duration-200">Go Back <span aria-hidden="true" className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">&rarr;</span></button>
    
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