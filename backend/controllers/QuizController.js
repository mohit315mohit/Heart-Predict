// const QuizResult = require('../models/QuizModel');
// exports.QuizResult = async (req, res) => {
//   try {
//     const { userId, scores } = req.body;

//     const categories = ['Pressure', 'PhysicalStress', 'Anxiety', 'Frustration'];
//     const totalScore = categories.reduce((acc, cat) => acc + (scores[cat] || 0), 0);
//     const average = totalScore / categories.length;

//     const newResult = new QuizResult({
//       userId,
//       scores: {
//         ...scores,
//         average,
//       },
//     });

//     await newResult.save();
//     res.status(201).json({ message: 'Quiz result saved successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// }

// const QuizResult = require('../models/QuizModel');

// exports.QuizResult = async (req, res) => {
//   try {
//     const { userId, scores } = req.body;

//     const categories = ['Pressure', 'PhysicalStress', 'Anxiety', 'Frustration'];
    
//     // Calculate average from provided scores (in percentage)
//     const totalScore = categories.reduce((acc, cat) => acc + (scores[cat] || 0), 0);
//     const average = Math.round(totalScore / categories.length);

//     const newResult = new QuizResult({
//       userId,
//       scores: {
//         Pressure: scores.Pressure || 0,
//         PhysicalStress: scores.PhysicalStress || 0,
//         Anxiety: scores.Anxiety || 0,
//         Frustration: scores.Frustration || 0,
//         average,
//       },
//     });

//     await newResult.save();
//     res.status(201).json({ message: 'Quiz result saved successfully' });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ message: 'Server error' });
//   }
// };



const nestedQuestions=require('../Questions')
exports.Questions = (req, res) => {
    res.json({ nestedQuestions });
  }




  const QuizResult = require('../models/QuizModel');

// GET /api/quiz/results/me
const getUserQuizResults = async (req, res) => {
  try {
    const userId = req.user.id; // assuming req.user is set by verifyToken middleware
    const results = await QuizResult.find({ userId }).sort({ date: -1 });
    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching quiz results:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getUserQuizResults
};
