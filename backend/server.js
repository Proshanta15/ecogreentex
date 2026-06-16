import dotenv from 'dotenv';
import express from 'express';
import { errorMiddleware } from './middlewares/error-middleware.js';
import authRoute from './router/auth-router.js';
import connectDB from './utils/db.js';
import contactRoute from './router/contact-router.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})