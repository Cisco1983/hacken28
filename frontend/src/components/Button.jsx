import React from 'react'

const Button = (props) => {
  return (
   <>
   <button className='h-8 w-auto px-4 bg-blue-500 font-semibold capitalize  shadow-xl rounded-md hover: ring-4 my-4' onClick={props.btnFunction}>
 {props.buttonText}
    </button>
   </>
  )
}

export default Button