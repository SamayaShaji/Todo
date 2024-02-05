import React from 'react'
interface Props{
    icon?:string
    heading:string
    description?:string
}


export const Box = ({icon,heading,description}:Props) => {

  return (
        <div className='border-2 grid text-center rounded-md bg-gray-300 p-8 justify-center'>
        <h1 className='border-b-4 p-4 '>{heading}</h1>
        <div className='w-32  justify-center p-4'>
        <img className='rounded-2xl' src={icon}/>
        </div>
        <p>{description}</p>

        

        

    </div>
  )
} 
