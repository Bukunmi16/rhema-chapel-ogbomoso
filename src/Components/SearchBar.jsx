import React from 'react'
import { Filter, Search } from 'lucide-react'
import { div } from 'framer-motion/client';


const searchBar = ({setSearch}) => {
  return (
    <div className="flex justify-center items-center mt-[50px] mb-[10px]">
    {/* <div className="bg-[#05042E] text-white h-[35px] relative w-[35px] p-2.5 rounded-full mr-3 flex justify-center items-center transition-all duration-300"> 
    <Filter className='text-white hover:text-[#ff1d0d] '/> */}
    {/* <div className='absolute top-10  p-3 text-[13px] bg-[#05042E] rounded flex justify-center items-center'> */}

    {/* </div> */}
    {/* </div> */}

    <input
    className='focus:outline-none bg-[#05042E] text-white px-4 rounded-3xl w-[80%] max-w-[500px] h-[40px] shadow'
    type="text"
    maxLength={35}
    onChange={(e) => setSearch(e.target.value)}
    placeholder='Search our teachings...'
    />

    <div className="bg-[#05042E] text-white h-[35px] w-[35px] p-2.5 rounded-full ml-3 flex justify-center items-center transition-all duration-300"> 
    <Search className='text-white hover:text-[#ff1d0d] '/>
    </div>
    </div>
)
}

export default searchBar