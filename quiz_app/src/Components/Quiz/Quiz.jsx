import React from 'react'
import {useState} from 'react'
import { Questions } from '../Others/QuestionsBank';

const Quiz = () => {
  const [questions, setQuestions] = useState(0);
  return (
    <div>


      <h1>Quiz</h1>
      <p>Welcome to the quiz! Answer the questions below:</p>
      <h2>{Questions[questions].question}</h2>
      <div className='options'>
        {Questions[questions].options.map((option, index) => (
          <button key={index} onClick={() => setQuestions(questions + 1)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;