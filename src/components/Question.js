import { useState } from 'react';
import { FaAccusoft } from "react-icons/fa6";
import { BsQuestionDiamondFill } from "react-icons/bs";

import './Question.css';

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return <section className="one-question">
      <div className="one-question-main">
        <FaAccusoft className="question-icon"/>
        <h2>{title}</h2>
        <BsQuestionDiamondFill className="question-icon"/>
        <button onClick={() => setShow(!show)}>Odpověď</button>
    </div>
    {show && <p>{info}</p>}
</section>
};

export default Question;
