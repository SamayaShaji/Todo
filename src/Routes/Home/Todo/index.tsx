import React, {useState } from 'react'
import edit  from "../../../Assets/icons/edit.svg"
import deleteIcon from "../../../Assets/icons/del.svg"


export const Todo = () => {   
const [todos, setTodos] = useState<string[]>([]);
const [inputValue, setInputValue] = useState<string>('');
const [editIndex, setEditIndex] = useState<number | null>(null);
const [backgroundColors, setBackgroundColors] = useState<string[]>(['bg-red-300', 'bg-blue-300', 'bg-green-300', 'bg-yellow-300']);



const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
}
const handleSubmit = () => {
  if (inputValue) {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, inputValue]);
      setBackgroundColors([...backgroundColors, backgroundColors[todos.length % backgroundColors.length]]);
    
      
      
    }
    setInputValue('');
    console.log(inputValue)
  }
}
const delButton = (index: number) => {
  setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  setBackgroundColors((prevColors) => prevColors.filter((_, i) => i !== index));
  
}
const editButton =(index:number)=>{
  setEditIndex(index)
  setInputValue(todos[index]);
}
  return (
   
    <div className='grid place-items-center  '>
      <h1 className='font-semibold '>TODO LIST</h1>
      <div className='pt-6 flex gap-2 p-4 '>
      <input className="pr-4 w-80	 pl-2 rounded-lg "type="text" placeholder="Enter your Todo" value={inputValue} onChange={handleInputChange}/>
      <button className=' p-2.5	text-white rounded-lg bg-gradient-to-br from-green-700 to-emerald-600' onClick={handleSubmit}>{editIndex==null ?"Add Todo": "Save"}</button>
      </div>
      <ul className='space-y-4 w-1/3 '>
        {todos.map((item,index)=>(
          <>
        <div key={index} className={`flex p-1  border-2 rounded-lg justify-between text-white ${backgroundColors[index % backgroundColors.length]}`}>
          <li  className=" rounded-lg pr-4 w-80	 pl-2"key={index}>{item}</li>
        <div className='gap-1 flex '>
        <img src={edit}className=' w-6' onClick={() => editButton(index)}/> 
                <img src={deleteIcon}className=' w-6'  onClick={() => delButton(index)}/> 
                </div>
                </div>
             
        </>
        )
        
        )
        
} 
      </ul>
    </div>
    
  )
}
