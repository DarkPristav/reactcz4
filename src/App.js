import { useState } from 'react';

import questions from './data';
import Question from './components/Question';

const App = () => {
  return (
    <div className="questions-box">
      {questions.map((oneQuestion) => {
        return (
          <Question
            key={oneQuestion.id}
            id={oneQuestion.id}
            title={oneQuestion.title}
            info={oneQuestion.info}
          />
        );
      })}
    </div>
  );
};

export default App;
