const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors()); 

// Other middleware
app.use(express.json());

// Load environment variables
dotenv.config();


const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});