import React from 'react'

const Button = ({text, color, scale}) => {
  return (
    <button className={`btn text-white p-1 px-2 rounded ${color} ${scale && 'hover:scale-[1.1]'} transition-all duration-300`}>
    {text}
    </button>
)
}

export default Button