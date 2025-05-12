const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scores: {
    Pressure: Number,
    PhysicalStress: Number,
    Anxiety: Number,
    Frustration: Number,
    average: Number,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuizResult', quizResultSchema);
