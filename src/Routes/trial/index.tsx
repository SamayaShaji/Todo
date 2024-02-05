import React from 'react'
import { Form } from 'react-router-dom'
import Button from '../../Components/Button'
import Student from '../../Components/StudentDetails/Student'

const studentLists = [
    {name:'Samaya',
    age:'23',
   },
    {name:'nithya',
    age:"34",
    

    },
    {name:"rani",
    age:"34",
    },
    {name:"maya",
    age:"32"

    }
]
const Trial = () => {
  return (
    <div>
       
        {studentLists.map((list)=>
        <div>
      <Student name={list.name} age={list.age}/>
      </div>
        )}

        

        
    </div>
  )
}

export default Trial