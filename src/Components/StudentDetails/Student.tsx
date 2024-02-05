import React from 'react'

interface StudentDetailsProps {
    name: string;
    age: string;
   
}

const Student = ({ name, age }:StudentDetailsProps) => {
  return (
    <div>
    <li>Name: {name}</li>
    <li>Age: {age}</li>
  
</div>
  )
}

export default Student