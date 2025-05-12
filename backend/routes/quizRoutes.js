const express = require('express');
const router = express.Router();
const {Questions,getUserQuizResults} =require('../controllers/QuizController')


// API 1: Get Quiz Questions
router.get('/questions', Questions);

// API 2: Save Quiz Result
router.post('/save', QuizResult);

const { verifyToken } = require('../middlewares/authMiddleware');

router.get('/results/me', verifyToken, getUserQuizResults);

module.exports = router;

