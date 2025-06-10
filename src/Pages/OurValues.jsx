import React, {useState} from 'react'
import { ourValues } from '../data'
import { Link } from 'react-router-dom'

const OurValues = () => {
  return (
      <div className='p-5  md:h-screen sm:h-screen'>
        <h1 className='text-[30px] font-bold text-center'>Our Values</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        ourValues.map((value, index) => {
          const [viewVerse, setViewVerse] = useState(false);          
          return (
          <div key={index} className='m-2 p-4 shadow hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg'>
        <h1 className='font-semibold text-[20px]'>{value.value} </h1>
        <div className=''>
        <p className='text-[13px] mt-1'>{value.description}</p>
        <p className='text-[13px] mt-1'> <span 
        onClick={() => setViewVerse(!viewVerse)}
        className='cursor-pointer border-b border-[#ff1d0d] active:border-white hover:border-white transition-all duration-300'>{value.scripture}</span> </p>
       {viewVerse && <div className='shadow-lg mt-2 p-2 text-[12px]  '>
          {value.kjv_verse}
        </div>}
        {value.value === 'Biblical Teachings' && <Link to={'/teachings'}><button className='text-[12px] my-2 hover:scale-101 shadow-2xl bg-[#ff1d0d] hover:bg-[#05042E] transition-all duration-300 rounded flex flex-col items-center justify-center p-1 px-2 ' >
          View Our Teachings
        </button></Link>}
        </div>
      </div>          
        )})
      }
      </div>
      </div>
  )
}

export default OurValues