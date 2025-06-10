import React from 'react'
import { Link } from 'react-router-dom'

const AboutCards = ({title, description, image, link, setSideBarOpen}) => {
  return (
    <Link
    to={link}
    onClick={() => setSideBarOpen(false)}
    style={{ backgroundImage: `url(${image})` }}
    className='w-[90%] h-[100%] bg-cover bg-center relative rounded-2xl flex flex-col items-center justify-center hover:scale-105 cursor-pointer transition-all duration-300'>
    <div className="z-10 text-white absolute rounded-2xl  h-full w-full  bg-black opacity-50  ">
  </div>
    <h2 className="text-[13px] sm:text-[15px] cursor-pointer text-white text-center z-50 font-bold hover:scale-110 transition-all duration-300"
    >{title}</h2>
    </Link>
  )
}

export default AboutCards