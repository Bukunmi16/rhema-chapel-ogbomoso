import React from 'react'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
const Homepage = ({setSideBarOpen, sideBarOpen}) => {


  return (
    <>
      <div className='h-[87vh] w-full flex flex-col items-center justify-evenly'
      onClick={() => {
        if (sideBarOpen) {
        setSideBarOpen(false)
      }}}
      >

      <div className='w-full h-[80%] flex flex-col justify-center items-center'>
      <div className="text-[#ffffff]  my-[60px] text-[50px] w-[80%] max-w-[500px] text-center flex flex-col items-center justify-center">
        
        <p className='' >Home of the Blessed</p>
      </div>

      <div className='text-[#ffffff] cursor-pointer flex gap-5 items-center' >
        <p onClick={() => setSideBarOpen(true)} className='hover:-translate-y-1 transition-all duration-300'>About Us</p>
        {/* <Link to={'/ourservices'} className='hover:-translate-y-1 transition-all duration-300'>Our Services</Link> */}
        <Link to={'/join-us'} className={`btn text-white p-1 px-2 rounded bg-[#ff1d0d] hover:scale-[1.1] transition-all duration-300`}>Join Us</Link>
      </div>
        </div>
    <Footer/>
</div>
        </>
  )
}

export default Homepage