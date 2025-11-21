import React from 'react'
import './timeOut.css'
import { Link } from 'react-router';

const TimeOut = ({message}) => {
  return (
    <div className="popup">
      <h1>{message}</h1>
      <Link to={'/'}>
        <button>رجوع الى الرئيسية</button>
      </Link>
    </div>
  );
}

export default TimeOut
