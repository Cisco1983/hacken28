import React from 'react'

const MealCard = (props) => {
  return (
    <div className='bg-slate-400 w-[20rem] rounded-md p-4 flex flex-col justify-center items-center h-auto m-4'>
        <img src={props.image} alt="" className='rounded-lg mb-2'/>
        <p className='text-2xl capitalize font-semibold m-4'>{props.name}</p>
        <p className='text-xl capitalize font-medium m-4'>{props.area}</p>
        <a href={props.link} target='_blank'className='bg-blue-600 px-4 py-2 w-32 flex items-center justify-center capitalize font-medium rounded-lg my-4'>tutorial</a>

    </div>
  )
}

export default MealCard
