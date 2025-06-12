import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Carousel from '../Components/Carousel';

const MinisterBiography = ({ministerData}) => {
    const facebook = '/icons/facebook.jpeg'
    const instagram = '/icons/instagram.jpeg'
    const twitter = '/icons/twitter.png'
    const telegram = '/icons/telegram.webp'
    const youtube = '/icons/youtube.png'

    const { ministerName } = useParams();

    const minister = ministerData.find((minister) => minister.name.toLowerCase() === ministerName);
    // console.log(minister);
    
  return (
    <div className='px-5 py-2 '>
        <div className='font-bold text-2xl mb-2 md:p-2 text-center '>{minister.name}</div>
        <div className='md:flex  justify-around h-[90%]'>   
        <div className='md:w-[40%] md:mt-0 mt-4 flex md:h-[530px] h-[350px]'>
        { minister.photoUrl.length > 0 ?
        <Carousel pictures={minister && minister.photoUrl}/>:
        <img src={minister.photoUrl[0]} alt="" />
    }
    </div>
        <div className='md:w-[40%] p-3  flex flex-col justify-between items-center  md:mt-0 shadow-lg'>
        <div>
          <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Role</span><span className='text-[13px] w-[70%] text-right'>{minister.role}</span></div>
          <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Spouse</span><span className='text-[13px] w-[70%] text-right'>{minister.spouse}</span></div>
          {minister.children && <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Children</span><span className='text-[13px] w-[70%] text-right'>{minister.children}</span></div>}
          <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Born</span><span className='text-[13px] w-[70%] text-right'>{minister.dob}</span></div>
          <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Nationality</span><span className='text-[13px] w-[70%] text-right'>{minister.nationality}</span></div>
          <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Education</span><span className='text-[13px] w-[70%] text-right'>{minister.education}</span></div>
          {minister.contact && <div className='flex justify-between items-start mt-2'><span className='font-bold text-[14px] w-[20%]'>Email</span><span className='text-[13px] w-[70%] text-right'>{minister.contact.email}</span></div>}
          <div className='flex flex-col justify-between w-full items-start mt-2'><span className='font-bold text-[14px]'>Biography</span><span className='text-[13px] mt-2'>{minister.biography} </span></div>
        </div>
          <Link className='underline  text-center w-[70%] font-bold text-[14px] mt-5' to={`/ministers/${minister.name}/teachings`}>{minister.name}'s Teachings</Link>
        <div className='flex py-4 my-4 h-7 justify-center items-center  '>
        {minister.socialMedia.facebook.length > 0 && <a target='_blank' href={minister.socialMedia.facebook}><img src={facebook} className='rounded-full w-7 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a> }
        {minister.socialMedia.instagram.length > 0 && <a target='_blank' href={minister.socialMedia.instagram}><img src={instagram} className='rounded-full w-7 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>}
        {minister.socialMedia.twitter.length > 0 && <a target='_blank' href={minister.socialMedia.twitter}><img src={twitter} className='rounded-full w-7 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>}
        {minister.socialMedia.telegram.length > 0 && <a target='_blank' href={minister.socialMedia.telegram}><img src={telegram} className='rounded-full w-7 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>}
        {minister.socialMedia.youtube.length > 0 && <a target='_blank' href={minister.socialMedia.youtube}><img src={youtube} className='rounded-[7px] w-7 hover:-translate-y-1 transition-all duration-300 justify-center items-center mr-5' alt="" /></a>}
        </div>
        </div>
        </div>
    </div>
)
}

export default MinisterBiography