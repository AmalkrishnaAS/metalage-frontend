import React from 'react'
import axios from 'axios'

const Product = ({product}) => {
  const baseUrl = 'https://aqueous-retreat-57087.herokuapp.com/api'
  return (
    <div class="flex justify-center max-h-[235px] ">
    <div class="rounded-lg shadow-lg bg-white w-[200px]   ">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-t-lg m-auto w-full max-h-[125px] object-contain bg-gray-200 " src={`${product.attributes.image?.data.attributes.formats.thumbnail.url||'/img-loader'}`} alt={product.attributes.image.data.attributes.formats.thumbnail.url}/>
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-2 uppercase">{product.attributes.name}</h5>
        <div className='w-24 h-5 flex items-center justify-center  bg-blue-600  rounded-lg text-[10px] text-white  capitalize'>{product.attributes.category}</div>
        
      
      </div>
    </div>
  </div>
  )
}

export default Product