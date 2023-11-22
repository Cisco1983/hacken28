import React, { useState,useEffect } from 'react';
import eye from '../../assets/eye.svg'

import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('chris')
  const [visible, hidden] = useState(false);
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (e) =>{
    e.preventDefault()
    try {
      if(query == ''){
        alert('Empty username')
      }
      else if(form.password == ''){
        alert('Empty password')
      }
      else(
navigate('/post')
      )
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/users`,
    {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
      }
    }).then(response => response.json(filter => f.username.toLowerCase().includes(query)))
    .then(data => console.log(data))
    .catch(error => console.log(error))
  },[]);


  return (
    <div className='h-full w-full flex justify-center items-center py-16'>
      <div className='bg-black text-slate-50 w-[20rem] rounded-lg shadow-lg shadow-slate-700 p-16 h-auto'>
        <h1 className='text-center text-3xl font-semibold mb-8'>Welcome Back!</h1>
        <form action="" method='post' className='flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
          <div className='flex flex-col gap-2'>
      
            <input
              type="text"
              name=""
              id=""
              placeholder='Username'
              className='h-10 rounded-lg outline bg-slate-500 text-slate-100 p-2 bg-opacity-10 '
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className='flex h-10 rounded-lg outline  bg-slate-500  p-2 bg-opacity-10 justify-center items-center'>
     
            <input
              type={visible? 'text' : 'password'}
              placeholder='Password'
              
              name=""
              id=""
              
              className='bg-transparent rounded-lg outline-none'
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
           
            />
           
              <img src={eye} alt=""  className='bg-slate-50 h-[4px] w-[4px]' onClick={(e) => hidden(true)} />
       
          </div>
          <button className='h-10 bg-blue-500 px-8 rounded-lg capitalize font-semibold my-4 ' type='submit'>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
