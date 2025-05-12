/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Quiz = () => {
  const [nestedQuestions, setNestedQuestions] = useState({});
  const [userId, setUserId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [categoryScores, setCategoryScores] = useState({});
  const [submitted, setSubmitted] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/auth/meid`, {
          withCredentials: true,
        });
        const Question = await axios.get(`${apiUrl}/api/quiz/questions`, {
          withCredentials: true,
        });
        setNestedQuestions(Question.data.nestedQuestions);
        setUserId(response.data.user);
      } catch (error) {
        console.error(error);
        alert("Error fetching data.");
      }
    };

    fetchData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setQuestionIndex(0);
  };

  const handleAnswer = (answer) => {
    const updatedAnswers = {
      ...answers[selectedCategory],
      [questionIndex]: answer,
    };

    setAnswers((prev) => ({
      ...prev,
      [selectedCategory]: updatedAnswers,
    }));

    if (questionIndex < nestedQuestions[selectedCategory].length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // calculate score
      const yesCount = Object.values(updatedAnswers).filter(
        (ans) => ans === "yes"
      ).length;
      setCategoryScores((prev) => ({
        ...prev,
        [selectedCategory]: yesCount,
      }));
      setSelectedCategory(""); // back to category selection
    }
  };

  const submitQuiz = async () => {
    try {
      const scores = {};

      // Convert each category score to percentage
      for (const category in categoryScores) {
        const totalQuestions = nestedQuestions[category].length;
        const score = categoryScores[category];
        const percentage = Math.round((score / totalQuestions) * 100);
        scores[category] = percentage;
      }

      // Calculate the overall average
      const average =
        Math.round(
          Object.values(scores).reduce((acc, val) => acc + val, 0) /
            Object.values(scores).length
        ) || 0;

      // Send scores + average in proper format
      await axios.post(`${apiUrl}/api/quiz/save`, {
        userId,
        scores: {
          Pressure: scores.Pressure || 0,
          PhysicalStress: scores.PhysicalStress || 0,
          Anxiety: scores.Anxiety || 0,
          Frustration: scores.Frustration || 0,
          average,
        },
      });

      setSubmitted(true);
      alert("Quiz result submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting quiz.");
    }
  };

  // const submitQuiz = async () => {
  //   try {
  //     await axios.post("http://localhost:5000/api/quiz/save", {
  //       userId,
  //       scores: categoryScores,
  //     });
  //     setSubmitted(true);
  //     alert("Quiz result submitted successfully!");
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error submitting quiz.");
  //   }
  // };

  if (!userId || Object.keys(nestedQuestions).length === 0) {
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
  }

  if (submitted) {
    return (
      <h2 className="text-center mt-10 text-2xl text-green-600">
        Thank you for completing the quiz!
      </h2>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full">
        {!selectedCategory ? (
          <>
            <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">
              Choose a Category
            </h1>
            <div className="space-y-6">
              {Object.keys(nestedQuestions).map((cat, index) => (
                <div key={index} className="text-center mb-4">
                  <button
                    onClick={() => handleCategorySelect(cat)}
                    className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-xl text-lg font-semibold"
                  >
                    {cat}
                  </button>
                  {categoryScores[cat] !== undefined && (
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                        <div
                          className="bg-green-500 h-4 transition-all"
                          style={{
                            width: `${Math.round(
                              (categoryScores[cat] /
                                nestedQuestions[cat].length) *
                                100
                            )}%`,
                          }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">
                        {Math.round(
                          (categoryScores[cat] / nestedQuestions[cat].length) *
                            100
                        )}
                        %
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {Object.keys(categoryScores).length ===
              Object.keys(nestedQuestions).length && (
              <>
                <div className="mt-10 text-center">
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">
                    Overall Mental Health
                  </h3>
                  <div className="w-full bg-gray-300 h-5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-5 transition-all"
                      style={{
                        width: `${Math.round(
                          Object.entries(categoryScores).reduce(
                            (acc, [cat, score]) => {
                              return (
                                acc +
                                (score / nestedQuestions[cat].length) * 100
                              );
                            },
                            0
                          ) / Object.keys(categoryScores).length
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 font-semibold">
                    {Math.round(
                      Object.entries(categoryScores).reduce(
                        (acc, [cat, score]) => {
                          return (
                            acc + (score / nestedQuestions[cat].length) * 100
                          );
                        },
                        0
                      ) / Object.keys(categoryScores).length
                    )}
                    %
                  </p>
                </div>

                <div className="text-center mt-8">
                  <button
                    onClick={submitQuiz}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold"
                  >
                    Submit Quiz
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
              {selectedCategory} - Question {questionIndex + 1}
            </h2>
            <div className="bg-purple-100 p-6 rounded-xl shadow-md mb-6">
              <p className="text-lg font-medium text-gray-800 mb-4">
                {nestedQuestions[selectedCategory][questionIndex]?.question}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleAnswer("yes")}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer("no")}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold"
                >
                  No
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
