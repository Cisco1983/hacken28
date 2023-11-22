import mongoose from "mongoose";


const postSchema = mongoose.Schema(
    {
        recipename: {
            type: String,
            // required: [true, 'please enter a recipe name']
        },
        ingredients: {
            type: String,
            // required: true,
        },
        instructions:{
            type: String,
            // required: true,
        },
        servings:{
            type: String,
                 // required: true,
        },
        image: String
    },
    {
        timeStamp: true
    }
)
const Post = mongoose.model('Post', postSchema);

export default Post;