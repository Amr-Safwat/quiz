import React, {useEffect, useState, useRef} from 'react';
import './quistionPage.css';
import TimeOut from '../TimeOut';
import {DataQuistions} from '../../../public/DataQuistions';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router';

let randomNumber = Math.floor(Math.random() * DataQuistions.questions.length);

const QuistionPage = () => {
  const [counter, setCounter] = useState(15);
  const [numOfQuistions, setNumOfQuistions] = useState(randomNumber);
  const [messageCorrect, setMessageCorrect] = useState(randomNumber);
  const [message, setMessage] = useState('انتهى الوقت');
  const answersList = useRef();
  let [stop, setStop] = useState(false);

  function startTime() {
    let timerId = setTimeout(() => {
      if (counter != 0) {
        stop ? null : setCounter(counter - 1);
      }
    }, 1000);
  }

  startTime()

  useEffect(() => {}, [counter]);

  function handleClickAnswer(e) {
    setStop(true);
    if (
      e.target.innerText ==
      DataQuistions.questions[numOfQuistions].correct_answer
    ) {
      e.target.style.backgroundColor = 'green';
      setTimeout(() => {
        randomNumber = Math.floor(
          Math.random() * DataQuistions.questions.length
        );
        setNumOfQuistions(randomNumber);
        e.target.style.backgroundColor = '';
        setCounter(15)
        setStop(false);
      }, 2000);
    } else {
      console.log(stop);
      
      e.target.style.backgroundColor = 'red';
      for (let i = 0; i < answersList.current.children.length; i++) {
        if (
          answersList.current.children[i].innerText ===
          DataQuistions.questions[numOfQuistions].correct_answer
        ) {
          answersList.current.children[i].style.backgroundColor = 'green';
        }
      }
      setTimeout(() => {
        setMessageCorrect(false);
        setMessage('اجابة خاطئة');
        randomNumber = Math.floor(
          Math.random() * DataQuistions.questions.length
        );
        setNumOfQuistions(randomNumber);
      }, 2000);
    }
  }

  return (
    <div className="container">
      <Link className="icon-close" to={'/quiz'}>
        <LogoutIcon />
      </Link>
      <div className="timer">{counter < 10? '0' + counter : counter}</div>
      <h1 className="quistion">
        {DataQuistions.questions[numOfQuistions].question}
      </h1>
      <div className="answers" ref={answersList}>
        <div className="answer" onClick={(e) => handleClickAnswer(e)}>
          {DataQuistions.questions[numOfQuistions].options[0]}
        </div>

        <div className="answer" onClick={(e) => handleClickAnswer(e)}>
          {DataQuistions.questions[numOfQuistions].options[1]}
        </div>

        <div className="answer" onClick={(e) => handleClickAnswer(e)}>
          {DataQuistions.questions[numOfQuistions].options[2]}
        </div>

        <div className="answer" onClick={(e) => handleClickAnswer(e)}>
          {DataQuistions.questions[numOfQuistions].options[3]}
        </div>
      </div>

      {counter === 0 || messageCorrect == false ? (
        <TimeOut message={message} />
      ) : null}
    </div>
  );
};

export default QuistionPage;
