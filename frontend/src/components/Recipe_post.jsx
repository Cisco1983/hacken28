import React from 'react'

const Recipe_post = (props) => {
  return (
    <div className='border-slate-900 h-[30rem]  ring-1 rounded-lg p-2 text-center flex flex-col gap-1 text-blue-200 capitalize shadow-md mb-4 w-[20rem]'>
<img src={props.image} alt="recipe_image" className='h-64 rounded-lg ' />
<div className='overflow-scroll' id="recipePost">
  <p className='text-slate-900 font-semibold text-lg'>Recipe Name:    
    {props.recipename}</p>
  <p className='font-bold text-slate-700 text-lg'>
  Servings: {props.servings}</p>
  <p>Ingredients: <br />{props.ingredients}</p>
  <p>instructions: <br/>{props.instructions}</p>
</div>
    </div>
  )
}

export default Recipe_post