// Quiz.js

import React, { useState } from "react";
import questionsData from "../data/constants"; // Importing questions data
import Navbar from "../Components/Navbar";

const Quiz = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [correctOption, setCorrectOption] = useState("");

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedQuiz("");
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setShowCorrectAnswer(false);
  };

  const handleQuizChange = (event) => {
    setSelectedQuiz(event.target.value);
    setCurrentQuestionIndex(0);
    setSelectedOption("");
    setShowCorrectAnswer(false);
  };

  const handleOptionSelect = (option) => {
    if (
      option ===
      questionsData[selectedSubject][selectedQuiz][currentQuestionIndex]
        .correctOption
    ) {
      setSelectedOption(option);
      setShowCorrectAnswer(true);
      setCorrectOption(option);
    } else {
      setSelectedOption(option);
      setShowCorrectAnswer(true);
      setCorrectOption(
        questionsData[selectedSubject][selectedQuiz][currentQuestionIndex]
          .correctOption
      );
    }
  };

  const handleNextQuestion = () => {
    if (
      currentQuestionIndex <
      questionsData[selectedSubject][selectedQuiz].length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setShowCorrectAnswer(false);
      setCorrectOption("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="quiz">
        <h1>Select Subject</h1>
        <select value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select Subject</option>
          <option value="wildlife">Wildlife</option>
          <option value="forest">Forest</option>
        </select>
        {selectedSubject && (
          <>
            <h2>Select Quiz</h2>
            <select value={selectedQuiz} onChange={handleQuizChange}>
              <option value="">Select Quiz</option>
              {[...Array(12)].map((_, index) => (
                <option key={index + 1} value={`quiz${index + 1}`}>
                  Quiz {index + 1}
                </option>
              ))}
            </select>
          </>
        )}
        {selectedSubject && selectedQuiz && (
          <div className="question-container">
            <h3>Question {currentQuestionIndex + 1}:</h3>
            <p>
              {
                questionsData[selectedSubject][selectedQuiz][
                  currentQuestionIndex
                ].question
              }
            </p>
            <div className="options">
              {questionsData[selectedSubject][selectedQuiz][
                currentQuestionIndex
              ].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`option ${
                    showCorrectAnswer &&
                    (selectedOption === option
                      ? option === correctOption
                        ? "correct"
                        : "incorrect"
                      : "")
                  }`}
                  disabled={showCorrectAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
            {showCorrectAnswer && (
              <div className="correct-answer">
                Correct Answer: {correctOption}
              </div>
            )}
            <button
              onClick={handleNextQuestion}
              disabled={!showCorrectAnswer || currentQuestionIndex === 9}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
