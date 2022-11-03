import React, { useState } from 'react' ;
import "./quiz.css" ;
import { questions } from "./questions";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [list, setList] = useState(0) ;
const navigate = useNavigate()
  const handleClick = (isCorrect) => {

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[list].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleSubmit = () => {
      navigate("/")
  }
  useEffect(() => {
    let res = Math.floor(Math.random()*2 +1 )
    setList(res)
   

  }, [])
  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {questions[list].length}
          <button class="w-50 btn btn-lg regsiterButton mt-2 " type="submit" onClick={handleSubmit}>Submit</button>
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion + 1}/{questions[list].length}
            </h1>
            <p>{questions[list][currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[list][currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  )
}

export default Quiz
