const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB =require('./config/db');
const PORT = process.env.PORT || 5000;
const chat =require('./routes/chat');



dotenv.config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());


// Routes
const authRoutes = require('./routes/authRoutes');
// const quizRoutes = require('./routes/quizRoutes');
app.use('/api/auth', authRoutes);
// app.use('/check',authRoutes);
// app.use('/api/quiz', quizRoutes);
app.use('/api', chat);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

