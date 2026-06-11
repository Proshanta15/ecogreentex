import express from 'express';
import router from './router/auth-router.js';

const app = express();

app.use("/api/auth", router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});