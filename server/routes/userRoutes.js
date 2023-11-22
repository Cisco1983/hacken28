import User from '../mongodb/models/signup.js'
import Login from '../mongodb/models/login.js'
import express from 'express'


const router = express.Router()

// router.route('/').get( async (req, res) => {

//     try {
//         const users = await User.find({})
//         res.status(200).json({success: true, users})
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }

// })

router.route('/').post( async (req, res) => {
const {username, password, email } = req.body;
const user = User.create({
    username,
    password,
    email
});

try{
res.status(200).json(user);
}
catch(error) {
res.status(500).json({message: error.message});
}
    
})

router.route('/').get(async (req,res) =>{
    const {username, password} = req.body;
    try {
        const user = await User.find({})
        res.status(200).json({success: true, user})
    } catch (error) {
        res.status(500).json({error: error.message})
    }


})

export default router