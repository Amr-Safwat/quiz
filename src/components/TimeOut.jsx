import React from 'react';
import './timeOut.css';
import {Link} from 'react-router';

const TimeOut = ({message}) => {
  return (
    <div className="layout">
      <div className="popup">
        <h1>{message}</h1>
        <p>حض سعيد فى المره القادمه عليك القراءة .</p>
        <Link to={'/quiz'}>
          <button>رجوع الى الرئيسية</button>
        </Link>
      </div>
    </div>
  );
};

export default TimeOut;
