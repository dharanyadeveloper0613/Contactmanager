import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './dbConfig/dbConfig.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import authRoute from './routes/authRoutes.js';
import contactRoute from './routes/contactRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/contacts', contactRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

