const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  courseId: String,
  score: Number,
  date: String
});

const lessonSchema = new mongoose.Schema({
  courseId: String,
  lesson: String
});

const progressSchema = new mongoose.Schema({
  userId: String,
  quizzes: [quizSchema],
  lessonsCompleted: [lessonSchema]
});

module.exports = mongoose.model('Progress', progressSchema);
