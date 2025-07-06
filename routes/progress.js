// routes/progress.js

const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress'); // ✅ Make sure this path exists

// ➕ Add Progress Route
router.post('/progress/add', async (req, res) => {
  try {
    const newProgress = new Progress(req.body);
    const savedProgress = await newProgress.save();
    res.status(201).json({ message: 'Progress saved successfully', data: savedProgress });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📤 Get Progress by User ID
router.get('/user/:id/progress', async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.params.id });
    if (!progress) {
      return res.status(404).json({ message: 'User progress not found' });
    }
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
