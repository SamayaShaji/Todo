import React from 'react'
interface Props{
href:string,
icon:string
}

export const Icon = ({href,icon}:Props) => {
  return (
    <div className='flex rounded-sm '>
        <a href={href} target='blank'>
            <img src={icon} width="20px" height="20px"/>
        </a>
    </div> 
    
  )
}
