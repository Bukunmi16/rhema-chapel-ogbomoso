import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SeriesCarousel from '../Components/SeriesCarousel'
import ServicesCarousel from '../Components/ServicesCarousel';
import { Link } from 'react-router-dom';
import { months } from '../data';
import DepartmentsCard from '../Components/DepartmentsCard';
// import { video } from 'framer-motion/client';

const Teachings = ({sermons}) => {  
  
  console.log();
  

  const sundayTeachings = sermons
    .filter((sermon) => sermon.serviceDay === 'Sunday')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
    
  const wednesdayTeachings = sermons
    .filter((sermon) => sermon.serviceDay === 'Wednesday')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const monthElements = months.map((month) => {return (
    <Link 
    to={`/wednesday-series/${month.month.toLowerCase()}`}
    className='h-[150px] rounded-2xl shadow  min-w-[150px] bg-cover bg-center relative  flex flex-col items-center justify-center  cursor-pointer hover:scale-105 transition-all duration-300'
    style={{ backgroundImage: `url(${month.img})` }}
    >
    <div className="z-10 text-white absolute rounded-2xl  h-full w-full  bg-black opacity-50  ">
  </div>
    <div className='text-white z-10 font-bold text-[17px]'>{month.month}</div>
    </Link>
  )})


  return (
    <div className='p-7 '>
      <h1 className='text-[30px] font-bold text-center'>Our Teachings</h1>
      <div className=' h-full '>
        <div className=" flex  h-[50%] flex-col justify-between">
          <div className="flex items-center mt-5 justify-between ">
          <h1 className='text-xl font-bold'>Sunday Series</h1>
            {/* <ChevronRight/> */}
          <Link to='/sunday-series'>
          <ChevronRight className='cursor-pointer hover:text-red-600 transition-all duration-300' />
            </Link>
          </div>
          <div className=''>
            <ServicesCarousel teaching={sundayTeachings} />
          </div>
        </div>
        
        <div className=" flex  h-[50%] flex-col justify-between">
          <div className="flex items-center  justify-between ">
          <h1 className='text-xl font-bold'>Wednesday Series</h1>
          <Link to='/wednesday-series'>
          <ChevronRight className='cursor-pointer hover:text-red-600 transition-all duration-300' />
            </Link>

          </div>
          <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {monthElements}
            {/* <SeriesCarousel months={months} /> */}
          </div>
          

        </div>

    </div>
    
    </div>
  )
}

export default Teachings