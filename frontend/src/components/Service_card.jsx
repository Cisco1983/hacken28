import React from 'react'
import { Button } from './index'

const Service_card = (props) => {
  return (
    <div className='p-8 flex flex-col items-center justify-center w-[20rem] h-auto border-2 rounded-lg border-blue-500 bg-slate-300 opacity-90'>
        <img src={props.image} alt="" className='h-32 w-32 rounded-full' />
        <h1 className='font-bold capitalize text-2xl my-2'>{props.title}</h1>
        <p className='text-lg font-semibold py-2'>{props.about}</p>
        <a href={props.route}><Button buttonText={'Get started'}/></a>


    </div>
  )
}

export default Service_card