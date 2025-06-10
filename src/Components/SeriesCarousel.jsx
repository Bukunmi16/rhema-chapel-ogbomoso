import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


export default function SeriesCarousel({months}) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const images = months.map((month) => {return month.img} )
  const month = months.map((month) => {return month.month} )
  // console.log(month[current]);
  // console.log(current);
  
  
  const delay = 10000; // 3 seconds

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => resetTimeout();
  }, [current]);

  const prevSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // console.log(images[current]);
  

  return (
    <div className=" mx-auto relative select-none">
      {/* Images */}
      <p className=" font-bold mt-[10px] text-center text-[35px] flex flex-col"> {month[current]} <span className="text-[13px]">Wednesday Teachings</span></p>
      <div className="overflow-hidden my-[10px] relative rounded">
       <Link to={`/wednesday-series/${month[current].toLowerCase()}`}>
       <img
          src={images[current]}
          // alt={`Slide ${current + 1}`}
          className="w-full h-[450px] object-cover transition-transform duration-700 ease-in-out"
          key={current}
          />
          </Link> 
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow-lg"
        aria-label="Previous Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow-lg"
        aria-label="Next Slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center  space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              resetTimeout();
              setCurrent(idx);
            }}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              current === idx ? "bg-gray-900" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
