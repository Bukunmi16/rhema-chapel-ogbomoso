import React, { useState, useEffect } from 'react';

const images = [
  '/HomeBackgroundImages/one.jpg',
  '/HomeBackgroundImages/two.jpg',
  '/HomeBackgroundImages/three.jpg',
  '/HomeBackgroundImages/five.jpg',
  '/HomeBackgroundImages/six.jpg',
  '/HomeBackgroundImages/seven.jpg',
  '/HomeBackgroundImages/eight.jpg',
  '/HomeBackgroundImages/nine.jpg',
  '/HomeBackgroundImages/ten.jpg',
];

const HomeBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
     const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <>
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div className="absolute inset-0 pointer-events-none h-full w-full bg-black opacity-50"></div>
    </>
  );
};

export default HomeBackground;