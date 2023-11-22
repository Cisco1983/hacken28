import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CreateRecipe, Post } from './app/pages/recipes/index.js'
import Button from './components/Button.jsx';
import { Header, Food, Home,Recipes } from './app/index'

import { Register, Login} from './app/User/index.js'


 function App() {



  return (
    <>

    <BrowserRouter>
<Header/>

<main className='home_page_main'>
  <Routes>

    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Register/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/food' element={<Food/>} />

    {/* <Route path='/recipe/*' element={ <Recipes/>}/> */}
    <Route path='/create' element={
    <CreateRecipe/>}/>
              <Route path='/post' element={
         <Post/>}/>
 
  </Routes>
 
</main>


</BrowserRouter>


</>

  )
}


export default App