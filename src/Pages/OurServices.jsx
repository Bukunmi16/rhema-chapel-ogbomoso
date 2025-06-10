import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import { servicesData } from '../data'

const OurServices = () => {

  const serviceElements = servicesData.map((service, index) => {
    return(
      <ServiceCard
      key={index}
      name={service.name}
      weekDay={service.weekDay}
      types={service.types}
      />
    )
  })

  return (
    <div className='w-full h-full p-5 text-white'>
      <h1 className='text-[30px] font-bold text-center'>Our Services</h1>
      {serviceElements}
    </div>
  )
}

export default OurServices