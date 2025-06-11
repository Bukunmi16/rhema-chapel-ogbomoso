import React from 'react'
import DepartmentsCard from '../Components/DepartmentsCard'
import { departmentData } from '../data'

const Departments = () => {
  return (
         <div className='p-5'>
          <h1 className='text-[30px] font-bold text-center mb-6'>Our Departments</h1>
          <div className=' w-full h-full grid sm:grid-cols-4 grid-cols-1 place-items-center gap-4 justify-center  text-[#05042E]'>
      {
        departmentData.map((data, index) => {
          
          return(
            <DepartmentsCard
            name={data.name}
            image={data.img}
            />
          )
        })
      }
      </div>
      </div>
  )
}

export default Departments