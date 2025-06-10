import { useState } from 'react'

const Footer = () => {
    
    const [text, setText] = useState(true)

    return (
    <div className='px-2 w-full h-[40px] text-sm flex items-center justify-center text-white'>
    {text ? <p className='hover:text-white  cursor-pointer transition-all duration-400' onClick={() => setText(prev => !prev)} >© 2025 Rhema Chapel. All rights reserved.</p> :
    <p onClick={() => setText(prev => !prev)} className='hover:text-white  cursor-pointer transition-all duration-400'>
    Behind College of Medicine, Lautech, Ogbomoso, Oyo State, Nigeria.
    </p>}

    </div>
  )
}

export default Footer