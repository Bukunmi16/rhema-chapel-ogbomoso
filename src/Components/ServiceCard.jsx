import React, { useState } from 'react'
import Carousel from './Carousel'
import Button from './Button'
import Select from './Select'
import { Link } from 'react-router-dom'

const ServiceCard = ({name, types, weekDay}) => {

    const [selectedType, setSelectedType] = useState(types[0])
    // console.log(selectedType);
    

    return (
    <div className='flex flex-col mb-5 max-h-[600px] p-2'>
    <div className=' flex justify-between mb-[15px]'>
    <h1 className='font-bold w-[50%] text-[20px]'>{name}</h1>
       <Select
       types={types}
       setSelectedType={setSelectedType}
       />
    </div>
    <div className='sm:flex  items-center justify-between'>
    <div className='sm:w-[50%]' >
    <Carousel
    pictures={selectedType && selectedType.images}
    />
    </div>
    <div className='my-[20px] sm:w-[45%]'>
        <div className='flex hover:shadow px-2 pt-1 justify-between items-center font-bold text-[13px] border-b-1 border-gray-300 mb-2 pb-2'><p className='w-[20%]'>Service Day</p> <p className='w-[70%] text-[13px] font-medium'>{selectedType && selectedType.specific}</p></div>
        <div className='flex hover:shadow px-2 pt-1 justify-between items-center font-bold text-[13px] border-b-1 border-gray-300 mb-2 pb-2'><p className='w-[20%]'>Service Description</p> <p className='text-[12px] w-[70%] font-medium'>{selectedType && selectedType.description}</p></div>
        <div className='flex hover:shadow px-2 pt-1 justify-between items-center font-bold text-[13px] border-b-1 border-gray-300 mb-2 pb-2'><p className='w-[20%]'>Time</p> <p className='w-[70%] text-[13px] font-medium'>{selectedType && selectedType.time}</p></div>
    <div className='mt-5 flex justify-end'>
    <Link to={'/join-us'} className={`font-bold hover:text-white p-2 bg-[#ff1d0d] transition-all duration-300`}>Join Us</Link>
    {/* <Link to={'/join-us'} className={`p-0 font-bold text-white hover:text-[#ff1d0d] hover:scale-[1.01] transition-all duration-300`}>Checkout Our {} Teachings</Link> */}
    </div>
    </div>
    </div>
    </div>
  )
}

export default ServiceCard