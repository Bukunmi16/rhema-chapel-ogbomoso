import { div } from 'framer-motion/client'
import React from 'react'
import { ChevronDown } from 'lucide-react';

const Select = ({types, setSelectedType}) => {

  return (
    <div className='flex flex-col  font-bold text-[10px] '>
        <select name="select" id="select" 
        onChange={(e) => {
            const selected = types.find((type) => type.value === e.target.value)
            setSelectedType(selected)
            
        }}
        className='appearance-none  focus:outline-none bg-white text-[#05042E] shadow rounded px-1  w-full h-[30px] max-w-[200px] text-[12px]'>
            {
                types.map((types, index) => {
                    return(
                        <option key={index} value={types.value}
                        className='text-center border-none'
                        >
                        {types.name} 
                        </option>
                    )
                })
            }
       </select>
        
    <label htmlFor="select mt-2">
        {/* <p className='text-center'>Select Service</p> */}
    </label>
     


            </div>
)
}

export default Select