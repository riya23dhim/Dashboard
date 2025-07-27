import React from 'react'

const Button = ({bgColor,color,size,text,borderRadius}) => {
  return (
   <button type="button" style={{color,borderRadius,backgroundColor:bgColor}} className={` scale-down text-${size} p-3 relative overflow-hidden group hover:drop-shadow-xl`}>
    {text}
    <span class=" shine absolute inline-block top-0 left-[-75%] w-[50%] h-full bg-white/40 transform skew-x-[-25deg] group-hover:left-[130%] transition-all duration-1000 ease-in-out"></span>
   </button>
   
  )
}

export default Button