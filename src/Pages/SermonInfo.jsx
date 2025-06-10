import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Youtube, YoutubeIcon } from 'lucide-react'
import { div } from 'framer-motion/client'
import Button from '../Components/Button'

const SermonInfo = ({sermons}) => {
    const {sermonName} = useParams()
    const sermon = sermons.find((sermon) => sermon.title.toLowerCase() === sermonName)
    
  return (
    <div className='md:p-3 md:mt-0 mt-10  flex flex-col md:h-screen items-center '>
    {sermon &&
    <div className='flex flex-col w-full h-full max-w-[90%] md:flex-row justify-around items-center'>
        <div className='flex justify-center'>

        <img src={sermon.thumbnail} className='w-[40%] min-w-[250px] sm:min-w-[400px] hover:scale-102 hover:rounded transition-all duration-300 max-w-[400px]' alt="" />
        </div>
        <div className='p-5  rounded-2xl md:w-[40%] h-[350px] w-[80%] my-[50px] shadow-2xl flex flex-col gap-3 justify-around items-center'>
        <div className='font-bold md:text-xl text-center p-2 shadow  sm:text-left'>{sermon.title}</div>
            <div className="flex text-[14px] w-full justify-between items-center">
                <span className='font-bold'>Minister</span>
                <Link to={`/ministers/${sermon.minister.toLowerCase()}`} className='hover:border-b border-[#05042E] transition-all duration-300'>{sermon.minister}</Link>
            </div>
            <div className="flex text-[14px] w-full justify-between items-center">
                <span className='font-bold'>Date Preached</span>
                <span>{`${sermon.month} ${sermon.day}, ${sermon.year}`}</span>
            </div>
            <div className="flex flex-col">
                <span className='font-bold text-[14px]'>Sermon Description</span>
                <span className='text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam, deleniti veniam fugit sunt fuga ad nisi sed minima, quos consequatur provident, cupiditate molestias reprehenderit?</span>
            </div>
            <button className={`btn w-[50%] text-white text-[13px] p-1 px-2 rounded bg-[#ff1d0d] transition-all duration-300`}>
                Download
            </button>
        </div>
    </div>
    }        
    </div>
  )
}

export default SermonInfo