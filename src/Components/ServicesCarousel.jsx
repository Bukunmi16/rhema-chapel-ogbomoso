import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SeriesCarousel from '../Components/SeriesCarousel'
import { Link } from 'react-router-dom';

const ServicesCarousel = ({teaching}) => {
  const [startIdx, setStartIdx] = useState(0);
  console.log(startIdx);
  console.log(teaching.length);
  
const [visibleCount, setVisibleCount] = useState(getVisibleCount());
console.log(visibleCount);

function getVisibleCount() {
  const width = window.innerWidth;
  if (width < 650) return 1;
  if (width >= 650 && width < 768) return 2;
  if (width >= 768 && width < 1024) return 3;
  if (width >= 1024 && width < 2048) return 4;
  else return 5;
}

useEffect(() => {
  function handleResize() {
    setVisibleCount(getVisibleCount());
  }
  window.addEventListener('resize', handleResize);
  // Set initial value
  handleResize();
  return () => window.removeEventListener('resize', handleResize);
}, []);
  

  const total = teaching.length;

  const handlePrev = () => {
    setStartIdx((prev) => (prev - visibleCount + total) % total);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + visibleCount) % total);
  };

  // Get the visible cards, wrapping around if needed
  let visibleTeachings = [];
  for (let i = 0; i < Math.min(visibleCount, total); i++) {
    visibleTeachings.push(teaching[(startIdx + i) % total]);
  }

  // Determine if at the start (first 5 cards)
  const atStart = startIdx === 0;
  const atEnd = startIdx === teaching.length - 1;
    return (
        <div className='my-10 h-[450px]'>
            <div>
              <div className="h-full grid gap-4 relative grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6">
                <button 
                disabled={atStart}
                onClick={handlePrev} className={`p-2 bg-[#05042E] text-white absolute rounded-[50%] top-[50%] left-[-20px] ${atStart ? 'bg-gray-400 ' : 'hover:bg-[#ff1d0d] transition-all duration-300'} `}><ChevronLeft/></button>
                <button 
                disabled={atEnd}
                onClick={handleNext} className={`p-2 bg-[#05042E] text-white absolute top-[50%] right-[-20px] rounded-[50%]  hover:bg-[#ff1d0d] transition-all duration-300`}><ChevronRight/></button>

                {visibleTeachings.map((sermon) => (
                  <Link to={`/sermon/${sermon.title.toLowerCase()}`} key={sermon.id} className='p-4 h-[400px] flex flex-col rounded-lg shadow hover:shadow-2xl transition-shadow duration-300'
                  style={{ backgroundImage: `url(${sermon.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                  </Link>
                ))}
              </div>
            </div>
          </div>
    )
}

export default ServicesCarousel