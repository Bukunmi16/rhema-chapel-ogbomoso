import React from 'react'
import logo from '../assets/rhema-logo-transparent.png'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Menu } from 'lucide-react'

const Navbar = ({currentPage, setSideBarOpen}) => {
  
  const navigate = useNavigate()

  // console.log(currentPage);
  

  return (
    <div className="relative w-full flex flex-col-reverse justify-center items-center">
  {currentPage !== 'Home' && <button onClick={() => navigate(-1)} className='absolute   cursor-pointer left-6 shadow top-3 p-2 rounded-full hover:text-red-600 :bg-[#ff1d0d] transition-all duration-300  text-white'><ArrowLeft/></button>}    
  {currentPage !== 'Home' && <span onClick={() => setSideBarOpen(true)} className='material-icons-round  absolute top-3 cursor-pointer right-6  shadow p-2 rounded  hover:text-red-600 transition-all duration-300  text-[white] '><Menu/></span> }
    {currentPage === 'Home' && <p className='text-[15px] text-white font-bold'>Rhema Chapel Ogbomoso</p>}    
    <Link to={'/'}>
    <img src={logo} className='w-[50px] h-[50px]' alt="" />
    </Link>
    </div>    
  )
}

export default Navbar