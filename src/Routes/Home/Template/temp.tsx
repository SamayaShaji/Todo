import React from 'react'
import { Box } from '../../../Components/Box/Box'
import banana from '../../../Assets/images/banana.jpg'
import apple from '../../../Assets/images/apple.jpg'
import orange from '../../../Assets/images/orange.jpg'
import grape from '../../../Assets/images/grape.jpg'


const fruitList= [
    {
      heading: "Apple",
      description:"Apple is a fruit",
      icon:apple
    },
    {
        heading: "orange",
      description:"orange is a fruit",
      icon:orange
        
    },
    {
        heading: "Grape",
      description:"Grape is a fruit",
      icon:grape
    },
    {
        heading: "Banana",
      description:"Banana is a fruit",
      icon:banana
    },

    {
        
        heading: "Kiwi",
      description:"Kiwi i fruit",
      icon:orange
        
    },
   
]

const fruits =["a","b","c"]




export const Template = () => {
  const filteredArray = fruitList.filter(word=>
    word.heading.toLowerCase()!=="apple" &&  word.heading.toLowerCase()!=="banana")
  console.log(filteredArray);
  
  return (
    <div className='grid grid-cols-4 p-8 gap-16	justify-center'>
{filteredArray.map((item,index)=>(
    <Box key={index} {...item}/>
    
))}


    </div>
  )
}
