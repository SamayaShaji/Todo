import React from 'react'

interface Props{
    itemList:object
}


export const Items = ({itemList}:Props) => {
  return (
    

<div className={`border-8 grid grid-cols-3`}>
                {Object.keys((itemList as  any)?.[0] || {}).map((key)=>
                    <div className="bg-cyan-500 text-center" key={key}> {key}</div>
                )}
                  {((itemList as any)?.map((item:any,index:number)=>(
                        Object.values(item).map((value:any,  index:any)=>(
                        
                        <div className="text-center p-8" key={index}>{value}</div>
                       ))
                    )))}
            </div>
           

        

  )
}
