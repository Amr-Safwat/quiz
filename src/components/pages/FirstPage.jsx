import React from 'react'
import { Link } from 'react-router';
import './firstPage.css'
import logo from '../../assets/pngtree-golden-mosque-islamic-logo-design-png-image_20381101.png'


const FirstPage = () => {
  return (
    <div className="container">
      <img src={logo} alt="" width={'200px'}/>
      <h2 className="title">اختبر معلومات الدينية</h2>
      <Link className="btn" to={'/quiz/quistions'}>
        العب الان
      </Link>
    </div>
  );
}

export default FirstPage
