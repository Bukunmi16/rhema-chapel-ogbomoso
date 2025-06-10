import React from 'react'

const DepartmentsCard = ({name, image}) => {
  
  return (
    <div 
    className='h-[200px] rounded-2xl shadow w-[90%] bg-cover bg-center relative  flex flex-col items-center justify-center  cursor-pointer hover:scale-105 transition-all duration-300'
    style={{ backgroundImage: `url(${image})` }}
    >
    <div className="z-10 text-white absolute rounded-2xl  h-full w-full  bg-black opacity-50  ">
  </div>
    <div className='text-white z-10 font-bold text-[17px]'>{name}</div>
    </div>
  )
}

export default DepartmentsCard