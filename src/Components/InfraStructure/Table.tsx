import React from 'react'

export const Table= ({data}:{data:any}) => {
    console.log
  return (
    <div>
        <table>
            <thead>
           <tr>
            <th>column1</th>
            <th>column2</th>
            <th>column3</th>
            </tr>
            </thead>
            <tbody>
          {data.map((row:any, index:number) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
            </tr>
          ))}
        </tbody>
        </table>

    </div>
  )
}

