import React from 'react'

interface Props{
    breakfast:string,
    lunch:string,
    dinner:string


}

export const Food = ({breakfast,lunch,dinner}:Props) => {
  return (
    <div>
      <li>
        breakfast: {breakfast},
        lunch: {lunch},
        dinner: {dinner}
      </li>

    </div>
  )
}
