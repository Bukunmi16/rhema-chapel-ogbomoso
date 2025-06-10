import React from 'react'
import { Link } from 'react-router-dom' 


const JoinUs = () => {
    const facebook = '/icons/facebook.jpeg'
    const instagram = '/icons/instagram.jpeg'
    const twitter = '/icons/twitter.png'
    const telegram = '/icons/telegram.webp'
    const youtube = '/icons/youtube.png'
    const usher = '/ServiceImages/Celebration/normal/worship.jpg'
    return (
    <div className='p-5 flex flex-col  justify-between'>
    <div className=''>
    <p className='font-bold text-xl text-center'>Join Us</p>
    <div className='flex flex-col md:flex-row items-center justify-around p-5 my-5'>
      <img src={usher} className='rounded-full max-w-[300px] h-[300px] object-cover' alt="" />
      <div className='text-center md:mt-0 mt-5 md:w-[60%] '>
      <p className='text-2xl font-bold'>Onsite</p>
      <p className="text-[13px] ">Our services hold every Sunday by 8am, every Wednesday by 5:30pm and every Friday by 5:30pm. Click <Link to={'/services'} className='border-b p-0 hover:border-[#ff1d0d]'>here</Link> to learn more about our services</p>
      <p className='text-[15px] '><span className='font-bold'>Address -</span> <span className='text-[13px] '>Behind College of Medicine, Lautech, Ogbomoso, Oyo State, Nigeria.</span></p>
      </div>
    </div>
    <div className='p-5 flex flex-col items-center'>
      <p className='text-2xl font-bold text-center'>Online</p>
      <div className='flex items-center my-4'>
         <a target='_blank' href='https://x.com/RhemaOgbomoso' ><img src={twitter} className='rounded-full w-10 md:w-15 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>
         <a target='_blank' href='https://www.facebook.com/RhemaOgbomoso' ><img src={facebook} className='rounded-full w-10 md:w-15 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a> 
         <a target='_blank' href='https://www.instagram.com/rhemaogbomoso' ><img src={instagram} className='rounded-full w-10 md:w-15 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>
         <a target='_blank' href='https://t.me/rhemaogb' ><img src={telegram} className='rounded-full w-10 md:w-15 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>
         <a target='_blank' href='https://www.youtube.com/@RhemaOgbomoso' ><img src={youtube} className='rounded-[13px] w-10 md:w-15 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>
        </div>
    </div>
    </div>
    </div>
  )
}

export default JoinUs