import React,{useState} from 'react'
import { Service_card} from '../../components'
import { recipe,bot,note,facebook,twitter,instagram,linkedin, image1,image2,image3,image4,image5,image6,
  image7,image8,image9,image10,image11,
  image12,image13,image14,image15,image17,us,grocry,healthy } from '../../assets'
import { about } from '../../constants/index'
import { Button}  from '../../components'



const Home = () => {

  return (
    <>
    <div className="home_page">

      <div className='flex flex-col justify-center items-center h-[30rem] bg-slate-600 rounded-xl bg-opacity-50 ring-1 ring-slate-100 my-16 gap-4' >
        <h1  className=' text-5xl capitalize font-bold bg-slate-200 bg-clip-text text-transparent'>tasty food awaits you</h1>
        <p className='font-semibold text-xl text-slate-300'>Find and learn from the best global cooking recipes and  highly trained staff around the globe.</p>

        <div className="flex justify-center items-center gap-4">
          <a href="/login"><button className='h-[2.5rem] bg-silver-400 ring-1 capitalize font-semibold text-lg w-auto px-4 rounded-md shadow text-blue-100'>sign up</button></a>
          <a href="/login"><button className='h-[2.5rem] bg-silver-400 ring-1 capitalize font-semibold text-lg w-auto px-4 rounded-md shadow text-blue-100'>sign in</button></a>
        </div>

        <p className='text-lg text-slate-50'>Scroll down to check out our services and offers.</p>
      </div>

      <div className="flex justify-center items-center px-20 gap-16 mt-8 ">
        <div className=''>
          <h1 className='title'>Palate pioneer</h1>
          <p className='font-bold text-xl text-slate-50 mt-2'>Welcome to home of kitchen secrets.</p>
          <p className='text-blue-200 font-medium text-lg mt-4'>{about[3]}</p>

          <div className="flex items-center justify-start gap-8 mt-4">
            <a href="#aboutus"><button className='h-[2.5rem] bg-silver-400 ring-1 capitalize font-semibold text-lg w-auto px-4 rounded-md shadow text-orange-600'>about us</button></a>
            <a href="#services"><button className='h-[2.5rem] bg-silver-400 ring-1 capitalize font-semibold text-lg w-auto px-4 rounded-md shadow text-orange-600'>our services</button></a>
          </div>
        </div>
        <img src={recipe} alt="" />

      </div>

      <h1 className='text-center mt-4 font-extrabold text-4xl capitalize text-slate-300 '>Take your kitchen skills to the next level.</h1>
        <p className='font-semibold text-lg text-center px-32 text-blue-200 my-4'>{about[3]}</p>
        <div className="flex items-center justify-center gap-8">
        <a href="/recipe"><Button buttonText='Explore Recipes'/></a>
          <a href="/food"><Button buttonText='Discover Foods'/></a>
        </div>

      <div className='my-8' id='services'>
          <h1 className='font-bold text-5xl capitalize underline text-center my-4 text-slate-50'>Our services</h1>

          <div className='flex flex-col justify-center items-center'>

            <div className="flex justify-center items-center gap-20 p-32 w-full my-8 bg-blue-900 rounded-lg ring-1">
              <div>
                <h1 className='font-bold capitalize text-3xl text-fuchsia-100 mb-4'>Explore and discover new foods and ingredients</h1>
                <p className='mb-2 text-stone-300 font-medium text-xl'>Get the best benefits of some foods from the inventory and decide according to your health choose what suits you best.</p>
                <p className='text-slate-100 text-xl mb-4'>Also most common foods shared around the world are our major focus</p>
                <a href="/food"><button className='h-[2.5rem] bg-slate-600 px-4 rounded-md ring-2 text-slate-100 shadow-slate-500 shadow-md'>Get Started</button></a>
              </div>

              <div className='h-[20rem] w-[20rem] object-cover overflow-hidden rounded-xl shadow-md shadow-slate-200 flex justify-center items-center ring-1'>
                <img src={image17} alt=""/>
              </div>
            </div>
            <div className="flex justify-center items-center gap-20 p-32 w-full my-8 bg-gray-900 rounded-lg">
              <div>
                <h1 className='font-bold capitalize text-3xl text-fuchsia-100 mb-4'>Create and post your own lovely recipes</h1>
                <p className='mb-2 text-stone-300 font-medium text-xl'>
                  Get a free space where you can share your recipes with the community.
                </p>
                <p className='text-slate-100 text-xl mb-4'>
                  Share your cooking and preparation styles with the community as a greater kitchen family.
                </p>
                <a href="/create"><button className='h-[2.5rem] bg-slate-600 px-4 rounded-md ring-2 text-slate-100 shadow-slate-500 shadow-md'>Get Started</button></a>
              </div>

              <div className='h-[20rem] w-[20rem] object-cover overflow-hidden rounded-xl shadow-md shadow-slate-200 flex justify-center items-center ring-1'>
                <img src={note} alt=""/>
              </div>
            </div>
           {/* <Service_card image={recipe} title='Recipes' about={about[0]}/> */}
            {/* <Service_card image={bot} title='Healthy Assistance' about={about[1]}/> */}
            {/* <Service_card image={note} title='Foods' about={about[2]}/> */}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-16  text-slate-100" id='aboutus'>
        <h1 className='font-bold text-5xl capitalize underline text-center my-4 text-slate-50 mb-12'>About us</h1>
        <div className='flex justify-around items-center w-full'>
          <div className="h-[auto] bg-gray-900 p-4 ring-1 rounded-xl text-center w-[20rem]">
         
            <h1  className='text-2xl capitalize font-bold mb-2 text-slate-100'>our values</h1>
            <div className=' p-4 rounded-lg h-[auto] bg-gray-300 ring-1 text-center '>
            <img src={grocry} alt="" className='rounded-xl h-[16rem]'/>
              <h2 className='text-xl capitalize font-bold mb-4 text-blue-900'>Ensure A Healthy living community, Healthy diet and healthy feeding</h2>
              <p className='text-lg text-slate-800'>Healthy among other things is more important than anything else.</p>
            </div>

            <div>

            </div>
          </div>
          <div className="h-[auto] bg-gray-900 p-4 ring-1 rounded-xl text-center w-[20rem] ">
         
            <h1 className='text-2xl capitalize font-bold mb-2'>our mission</h1>
        
            <div className='bg-gray-800 p-4 rounded-lg'>
            <img src={healthy} alt=""className='rounded-xl' />
              <h2 className='text-xl capitalize font-bold mb-4'>Ensure A Healthy living community, Healthy diet and healthy feeding</h2>

              <p className='text-lg text-slate-200'>Healthy among other things is more important than anything else.</p>
            </div>
         
          </div>
          <div className="h-[auto] bg-gray-900 p-4 ring-1 rounded-xl text-center w-[20rem]">
          
            <h1 className='text-2xl capitalize font-bold mb-2'>who are we?</h1>

            <div className='bg-gray-800 p-4 rounded-lg'>
            <img src={us} alt="" className='rounded-xl w-auto h-[18rem]'/>
              <h2 className='text-xl capitalize font-bold mb-4'>Community Nutrition developers</h2>

              <p className='text-lg text-slate-200'>Creating awareness of healthy feeding and health maintanance is our job and preserve the future.</p>
            </div>
          </div>
        </div>

        </div>

        <div className="mt-8 mb-4">
          <h1 className='font-bold text-4xl capitalize underline text-center my-4 text-slate-100'>Our Social Media</h1>
          <div className='grid grid-cols-2 justify-center items-center px-40'>
            <a href="" className='flex bg-blue-700 rounded-md items-center justify-around py-2 px-4 mx-4 sm: my-4'>
              <img src={facebook} alt="" />
              <p className='font-semibold text-blue-50 capitalize mx-2'>facebook</p>
            </a>
            <a href="" className='flex bg-orange-700 rounded-md items-center justify-around py-2 px-4 mx-4 sm: my-4'>
              <img src={instagram} alt="" />
              <p className='font-semibold text-blue-50 capitalize mx-2'>instagram</p>
            </a>
            <a href="" className='flex bg-gray-900 rounded-md items-center justify-around py-2 px-4 mx-4 sm: my-4'>
              <img src={twitter} alt="" />
              <p className='font-semibold text-blue-50 capitalize mx-2'>twitter</p>
            </a>
            <a href="" className='flex bg-purple-700 rounded-md items-center justify-around py-2 px-4 mx-4 sm: my-4'>
              <img src={linkedin} alt="" />
              <p className='font-semibold text-blue-50 capitalize mx-2'>linkedin</p>
            </a>
          </div>
        </div>

        <footer className='bg-sky-900 w-full h-12 flex items-center justify-center rounded-md shadow-md shadow-slate-100 ring-1'>
          <p className='text-center font-bold text-blue-50 '>Developed by Nine Hearts Developers..   All Rights reserved @ 2023</p>
        </footer>
    </div>
  </>
  )
}

export default Home