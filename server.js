const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const progressRoutes = require('./routes/progress');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Failed:', err));

// Routes
app.use('/', progressRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
