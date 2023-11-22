import mongoose from "mongoose";

const connectDB =  (url) => {
    mongoose.set("strictQuery", true);

    mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('connected to MongoDB database'))
    .catch(err => console.log(err.message))
};

export default connectDB;