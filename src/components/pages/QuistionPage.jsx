import React, {useEffect, useState} from 'react';
import './quistionPage.css';
import TimeOut from '../TimeOut';
import {DataQuistions} from '../../../public/DataQuistions';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router'

let randomNumber = Math.floor(Math.random() * DataQuistions.questions.length);

const QuistionPage = () => {
  const [counter, setCounter] = useState(15);
  const [numOfQuistions, setNumOfQuistions] = useState(randomNumber);
  const [messageCorrect, setMessageCorrect] = useState(randomNumber);
  const [message, setMessage] = useState('انتهى الوقت');

  function startTime(value) {
    let intervalId = setTimeout(() => {
      console.log('done', counter);
      if (counter != 0) {
        setCounter(counter - 1);
      } else {
        clearTimeout(intervalId);
      }
    }, 1000);
  }
  // startTime();

  function handleClickAnswer(e) {
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
        startTime();
        setCounter(15);
      }, 2000);
    } else {
      e.target.style.backgroundColor = 'red';
      setTimeout(() => {
        setMessageCorrect(false);
        setMessage('اجابة خاطئة');
        randomNumber = Math.floor(
          Math.random() * DataQuistions.questions.length
        );
        setNumOfQuistions(randomNumber);
      }, 1000);
    }
  }

  return (
    <div className="container">

      <Link className="icon-close" to={'/quiz'}><LogoutIcon /></Link>
      <div className="timer">{counter}</div>
      <h1 className="quistion">
        {DataQuistions.questions[numOfQuistions].question}
      </h1>
      <div className="answers">
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
