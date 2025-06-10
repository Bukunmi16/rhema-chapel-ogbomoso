import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MonthlyTeaching = ({sermons}) => {

const {month} = useParams()

const teachings = sermons
  .filter((sermon) => sermon.serviceDay === 'Wednesday')
  .sort((a, b) => new Date(b.date) - new Date(a.date));  
  
  const monthTeachings = teachings.filter((sermon) => sermon.month.toLowerCase() === month)

  const teachingsByYear = monthTeachings.reduce((acc, sermon) => {
  const year = sermon.year;
  if (!acc[year]) acc[year] = [];
  acc[year].push(sermon);
  return acc;
}, {});



return (
  <div className={`p-10  mt-[20px]`}>
    
      {Object.keys(teachingsByYear).sort((a, b) => b - a).map((year) => (
        <div key={year}>
          <div>
          <h2 className="text-xl font-bold my-4 "> <p className='hover:border-[white] transition-all duration-300  pb-1'>{year}</p></h2>
          <div className='font-bold text-[1]'>Series Title - <span className='text-[15px] '>{Object.values(teachingsByYear)[0][0].seriesTitle}</span></div>
          </div>
          
          <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {teachingsByYear[year].map((sermon) => (
              <Link to={`/wednesday-series/${sermon.month}/${sermon.title.toLowerCase()}`} key={sermon.id} className="p-4 h-[450px] w-[300px] flex flex-col rounded-lg justify-around shadow hover:shadow-2xl transition-shadow duration-300">
                <img src={sermon.thumbnail} alt={sermon.title} className="w-full  object-cover mb-2" />
               <div>
                <h3 className="font-semibold">{sermon.title}</h3>
                <h3 className="text-[13px] font-semibold">Teaching {sermon.seriesNumber}</h3>
               </div>
                {/* <p>{sermon.description}</p> */}
              </Link>
            ))}
          </div>
        </div>
      ))
    // ) : (
    //   <div className='font-bold text-[50px]'>
    //     Can't find Teaching :(
    //   </div>
    // )
    }
  </div>
);
}

export default MonthlyTeaching
