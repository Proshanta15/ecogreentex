import dotenv from 'dotenv';
import express from 'express';
import { errorMiddleware } from './middlewares/error-middleware.js';
import router from './router/auth-router.js';
import connectDB from './utils/db.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", router);
app.use(errorMiddleware);


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})