import React, { useState, useEffect } from 'react';
import RecipeCard from '../../components/RecipeCard';

const Recipes = () => {
  const [query, setQuery] = useState('chicken');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${query}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '810e39dd52msh40d363d2bd8eea1p1847efjsnfd7c757f76eb',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  if (error) {
    return <div className='text-slate-100'>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='text-slate-100'>Loading...</div>;
  } else {
    return (
      <>
        <div className='flex justify-center flex-col h-full w-full'>
          <div className='p-2'>
            <h1 className='text-center text-4xl font-bold mb-6'>Discover Recipes</h1>
            <form
              onSubmit={handleSubmit}
              className='w-[80%] mb-8 flex gap-2 justify-center items-center bg-slate-500 rounded-md shadow-md shadow-slate-200'
            >
              <input
                value={query}
                className='h-12 w-[80%] bg-transparent border-transparent outline-none text-blue-100'
                placeholder='Search Meal.....'
         
                name='query'
                onChange={(e) => setQuery(e.target.value)}
              />
              <input
                type='submit'
                className='h-full text-slate-50 font-semibold cursor-pointer'
                value='Search'
              />
            </form>
            <div className='flex flex-wrap m-[0 auto] justify-center items-center gap-4 bg-transparent'>
              {items.map((item, index) => (
                <RecipeCard
                  title={item.title}
                  ingredients={item.ingredients}
                  servings={item.servings}
                  instructions={item.instructions}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Recipes;
