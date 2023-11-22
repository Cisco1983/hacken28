import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Button from '../../components/Button.jsx'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const [userform, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userform.username === '' || userform.password === '' || userform.email === '') {
      alert('Please fill in all required fields');
      return;
    }

    if (userform.username.length < 6) {
      alert('Username must be at least 6 characters');
      return;
    }

    if (userform.password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }

    try {
      // Assuming you have a backend API endpoint for user signup
      const response = await fetch('http://localhost:5000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userform)
      });

      if (response.ok) {
        alert('Account successfully created');
        navigate('/login')
        history.push('/login'); // Redirect to login page after signup
      } else {
        alert('Error creating account');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='h-full w-full flex justify-center items-center min-h-32 py-8'>
      <div className='bg-slate-400 rounded-lg shadow-lg shadow-black'>
        <form action="" method='post' className='flex flex-col items-center justify-center bg-green-700 bg-opacity-5 h-auto px-16 py-16 rounded-lg gap-4 shadow-2xl w-full '>
          <h1 className='font-bold text-center text-blue-900 mb-2 text-4xl'>Sign Up</h1>
          <p className='font-semibold capitalize text-blue-600'>Get started Today!</p>
          <input
            type="text"
            name="name"
            autoComplete='true'
            autoFocus
            id="username"
            placeholder='username'
            className='h-12 w-[90%]  bg-slate-200  bg-opacity-5  text-slate-900 rounded-md outline-none  ring-2 mb-2 capitalize text-xl placeholder:text-slate-900'
            value={userform.username}
            onChange={(e) => setForm({ ...userform, username: e.target.value })}
          />
          <input
            type='email'
         placeholder='Email'
            autoComplete='true'
            value={userform.email}
            className='h-12 w-[90%] bg-slate-200 bg-opacity-5 text-slate-900    rounded-md outline-none  ring-2 mb-2 capitalize text-xl placeholder:text-slate-900 '
            onChange={(e) => setForm({ ...userform, email: e.target.value })}
          />
          <input
            type="password"
            placeholder='password'
            autoComplete='true'
            value={userform.password}
            onChange={(e) => setForm({ ...userform, password: e.target.value })}
            className='h-12 w-[90%]  bg-slate-200 bg-opacity-5 text-slate-900  rounded-md outline-none  ring-2 mb-2 capitalize text-xl placeholder:text-slate-900 '
          />
          <Button buttonText='Sign Up' btnFunction={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Register;
