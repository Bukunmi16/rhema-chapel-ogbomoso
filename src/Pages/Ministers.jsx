import React from 'react'
import { ministersData } from '../data'
import { Link } from 'react-router-dom'


const Ministers = () => {
  return (
    <div className='p-5 '>
        <h1 className='text-[30px] font-bold text-center'>Our Ministers</h1>
    <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {
        ministersData.map((minister) => {
            return(
                <Link to={`/ministers/${minister.name.toLowerCase()}`} key={minister.name} className='m-2 p-4 shadow hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg'>
                <img src={minister.photoUrl[0]}  alt={minister.name} className='w-full h-[300px] object-cover rounded-lg ' />
                <h1 className='font-bold text-[20px] mt-3'>{minister.name}</h1>
                <h1 className='font-semibold text-[12px] '>{minister.role}</h1>
            </Link>
        )
    })
}
</div>
    </div>
  )
}

export default Ministers