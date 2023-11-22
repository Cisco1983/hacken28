import React,{useState, useEffect} from 'react'



import Recipe_post from '../../../components/Recipe_post'


const Post = () => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    const fetchPosts = async () => {
      try {
        const response = await   fetch('http://localhost:5000/api/v1/post', 
        {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
          }})

          if(response.ok) {
            const results = await response.json()
            setPosts(results.data.reverse())
            console.log(results.data)
          }
      
      } catch (error) {
        console.log(error)
        
      }
    }
    fetchPosts()
  },[])

  
  
  return (
    <div className='p-8 flex flex-col gap-16 '>
  
  <div className='text-xl font-medium text-slate-50 first-letter:capitalize flex flex-wrap gap-12 items-center justify-around'>

    {
      posts.map(
        (post) =>{
          return(
          <Recipe_post key={post._id} image={`${post.image}`}  recipename={post.recipename} ingredients={post.ingredients} instructions={post.instructions} servings={post.servings}/>
          )
        }
      )
    }

  </div>
    </div>
  )
}

export default Post