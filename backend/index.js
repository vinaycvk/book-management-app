import express, { response } from 'express'
import { mongoDBURL } from './config.js';
import mongoose from 'mongoose';
// import { Book } from './models/bookModel.js';
import bookRoute from './routes/bookRoute.js';
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5555 


import cors from 'cors'

const app = express();

//Middleware for handling request body
app.use(express.json())

app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome to the page")
});

app.use('/api/v1/books', bookRoute)

app.use('/api/v1/users', userRoutes)

app.listen(PORT, () => {
    console.log(`APP is listening on port: ${PORT}`)
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to the database`)
    })
    .catch((error) => {
        console.log(error)
    })