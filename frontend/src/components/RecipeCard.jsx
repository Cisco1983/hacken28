import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className='h-[24rem] w-[20rem] rounded-lg overflow-hidden p-2 border-1 text-center'>
            <img
                src={strMealThumb}
                alt={strMeal}
                className='rounded-lg'            />
            <div className="card-body">
                <span className="text-lg">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
            </div>
        </div>
    )
};

export default RecipeCard;