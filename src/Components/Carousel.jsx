import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


const Carousel = ({pictures}) => {
    
    const images = pictures
    const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl  mx-auto overflow-hidden rounded-2xl shadow-lg aspect-video">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images && images[index]}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>}
     {images.length > 1 &&  <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images && images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
