import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Clients from '../components/Clients'


const about = () => {
  return (
    <div className='flex flex-col items-center'>
        <Navbar></Navbar>
        <div className='mt-20 '>
        <Card title='vision' desc='To provide highly energy efficient , cost effective & quality industrial solution / projects to industries across the globe through development of latest technologies & constant R &D activities . Where ever there will be a need for Food Processing , Fruit Processing , Dairy Processing Plants or Effluent Treatment solution, METALAGE will be there to serve.' img='/about2.svg'></Card>
        <Card title='quality' desc="Quality is the key to our continued success in the global market. We follow a well defined Quality Management System throughout every step of the business. All our equipment are tested in-house to ensure compliance with International standards. Individual inspection of the plants are conducted to make sure that they comply with client's specifications."  img='/about1.svg'></Card>
        <Card title='specialization' desc='Our team of food technologists and engineers offer a comprehensive range of services right from designing of the equipment and capacity selection to installation and commissioning of the of the processing / packaging plants. We create real value for our clients by providing friendly operational and trouble shooting services.'  img='/about3.svg'></Card>
        </div>
        <h1 className='text-3xl font-bold uppercase mt-3 mb-3 text-gray-700'>our clients</h1>
        <Clients></Clients>
        <Footer></Footer>

       

    </div>
  )
}

export default about