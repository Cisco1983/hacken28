import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const CreateRecipe = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    recipename: '',
    ingredients: '',
    instructions: '',
    servings: '',
    image: '',
  });

  console.log(form);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    try {
      await fetch('http://localhost:5000/api/v1/post', 
      {
      method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      // navigate('/post');
    } catch (error) {
      console.error('Error uploading recipe:', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='bg-gradient-to-r from-slate-700 to-blue-500 mt-16 p-8 rounded-lg flex w-auto gap-4 shadow-xl shadow-green-500'>
        <form className='flex flex-col justify-start items-start w-[50%]'>
          <h2 className='text-blue-800 font-bold text-xl mb-2'>Create Recipe</h2>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-2'>Recipe Name:</label>
            <input
              type='text'
              value={form.recipename}
              onChange={(e) => setForm({ ...form, recipename: e.target.value })}
              className='h-10 rounded-lg outline-none bg-slate-100'
            />

            <div className='flex flex-col'>
              <label htmlFor='servings' className='text-xl font-semibold mb-2'>
                Servings:
              </label>
              <input
                type='number'
                name=''
                id=''
                value={form.servings}
                className='h-10 rounded-lg outline-none bg-slate-100'
                onChange={(e) => setForm({ ...form, servings: e.target.value })}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-2'>Ingredients:</label>
            <textarea
              value={form.ingredients}
              onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
              className='h-10 rounded-lg outline-none bg-slate-100 w-[18rem]'
            />
          </div>
          <div className='flex flex-col'>
            <label className='text-xl font-semibold mb-2'>Instructions:</label>
            <textarea
              value={form.instructions}
              onChange={(e) => setForm({ ...form, instructions: e.target.value })}
              className='h-10 rounded-lg outline-none bg-slate-100 w-[18rem]'
            />
          </div>
          <div>
            <label className='text-xl font-semibold mb-4'>Upload Image:</label>
            <div className='file'>
              <input
                type='file'
                name=''
                id=''
                accept='image/*'
                onChange={handleFileUpload}
                className='mb-4 mt-2'
              />
            </div>
          </div>
          <button
            type='button'
            onClick={handleUpload}
            className='h-[2.5rem] bg-slate-600 px-4 text-center font-semibold rounded-lg shadow-lg shadow-slate-400 text-slate-200'
          >
            Upload Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
