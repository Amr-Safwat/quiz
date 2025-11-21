import React from 'react'
import { Link } from 'react-router';
import './firstPage.css'


const FirstPage = () => {
  return (
    <div className="container">
      <h2 className="title">اختبر معلومات الدينية</h2>
      <Link className="btn" to={'/quiz/quistions'}>
        العب الان
      </Link>
    </div>
  );
}

export default FirstPage
