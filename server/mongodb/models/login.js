import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
type: String
    },
    password:{
        type: String
    }
},
{
    timestamp: true
})

const userLogin = mongoose.model('userLogin', userSchema);
export default userLogin;