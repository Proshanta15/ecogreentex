import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { errorMiddleware } from './middlewares/error-middleware.js';
import adminRoute from './router/admin-router.js';
import authRoute from './router/auth-router.js';
import contactRoute from './router/contact-router.js';
import connectDB from './utils/db.js';

dotenv.config();

const app = express();

let corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    // origin: 'http://localhost:5174', // Replace with your frontend URL
    // origin: 'https://ecogreentex.eu.com', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

// Auth route for user registration, login, and user info
app.use("/api/auth", authRoute);

// Contact form route
app.use("/api/form", contactRoute);

// Admin route for user management
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})