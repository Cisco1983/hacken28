import express  from 'express'
import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'
import Post from '../mongodb/models/post.js'
dotenv.config()


const router = express.Router()

// cloudinary.config(
//   {
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure:  true,
// })


cloudinary.config({
  cloud_name: 'dycoxnr5q',
  api_key: '962885777795192',
  api_secret: 'fn-Su6FbSULfsugTM6Olj_LOpuY',
  secure: true,
});

//get posts
router.route('/').get(async (req, res) => {
try {
    const posts = await Post.find({})
    res.status(200).json({success: true, data: posts})
} catch (error) {
    res.status(500).json({success: false, error: error.message})
}
});

//create a new post
router.route('/').post(async (req, res) =>{
  try {
    const { recipename, image, ingredients, servings, instructions  } = req.body;
const imageUrl = await cloudinary.uploader.upload(image)
   

    const newPost = await Post.create( { 
      recipename,
       image: imageUrl.url,
        ingredients,
         servings, 
         instructions 
         })   
   
    res.status(201).json({success: true, data: newPost})
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});
export default router