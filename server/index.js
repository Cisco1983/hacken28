import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser';
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js';
import connectDB from './mongodb/connect.js';


const PORT = process.env.PORT || 5000;
const app = express()
app.use('/posts', postRoutes)
app.use(express.json({ limit: '50mb' }));
app.use(cors())
dotenv.config()
app.use(bodyParser.urlencoded({limit: '50mb',extended: true}))
app.use(bodyParser.json({limit: '50mb',extended: true}))

//api endpoints
app.use('/api/v1/post', postRoutes)
app.use('/api/v1/users', userRoutes)
const   MONGODB_URL = 'mongodb+srv://chrisocamar522:LTYtyB5nfbUTm3NB@cluster0.x8nwon6.mongodb.net/';
//route
app.get('/', (req, res) => {
  res.send('Server is running at http://localhost:5000')
})

const startServer = () => {
  try {
    connectDB(MONGODB_URL)
    app.listen(PORT, (err, res) => {
      console.log('server running on port 5000')
    })
  } catch (error) {
    console.log(error.message)
  }
}

startServer()









