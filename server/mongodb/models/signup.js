import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username:{
type: String
    },
    email: {
        type: String
    },
    password:{
        type: String
    }
},
{
    timestamp: true
})

const userData = mongoose.model('userData', userSchema);
export default userData;