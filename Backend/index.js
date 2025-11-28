import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Utils/db.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is working!"
  });
});

app.get('/home', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to /home route!"
  });
});

// Server and DB connection
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
}).catch(err => {
  console.error("Failed to connect to DB:", err);
});
