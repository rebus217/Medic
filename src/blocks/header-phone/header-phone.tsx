import React from 'react';
import './header-phone.sass';
import phoneIcon from '../../icons/phone-icon.svg';

export default function HeaderPhone() {
  return (
    <div className="header-phone">
      <img src={phoneIcon} alt="phone" className="header-phone__icon" />
      <div className="header-phone__text-container">
        <p className="header-phone__title">Call Us</p>
        <p className="header-phone__phone-number">320- 111-2111 (MED-PRO)</p>
      </div>
    </div>
  );
}
