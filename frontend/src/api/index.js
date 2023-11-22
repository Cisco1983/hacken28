import axios from 'axios'
const url = 'http://localhost:5000'

export const fetchPosts = (url) =>{
    axios.get(url + '/posts')
    .then(postdata => setPosts(postdata.data))
    .catch(err =>{
        console.log(err)
    })
}

