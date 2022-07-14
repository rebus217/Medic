import React from 'react';
import './section-benefits.sass';
import BenefitsButtonGroup from './benefits__button-group/benefits__button-group';
import Button from '../button/button';

const SectionBenefits = () => {
  return (
    <div className={'benefits'}>
      <div className={'benefits__left-content'}>
        <div className={'benefits__background-img'} />
        <div className={'benefits__button-group'}>
          <BenefitsButtonGroup />
        </div>
      </div>
      <div className={'benefits__right-content'}>
        <div className={'benefits__text-container'}>
          <p className={'benefits__title title'}>Benefits</p>
          <p className={'benefits__selected-item'}>For Physicians and Group Practice</p>
          <p className={'benefits__text'}>
            • 90% first pass payment within 30 days, at 3% Billing charges.
            <br />
            • Increase of 15-20% in monthly collected revenue.
            <br />
            • Expert teams with vast knowledge and experience who will follow up every claim to
            zero balance.
            <br />
            • Services spanning coding review, claims and payment processing, as well as Insurance
            and patient follow up.
            <br />
          </p>
        </div>
        <div className={'benefits__right-button'}>
          <Button text={'READ MORE'} isBig={false} />
        </div>
      </div>
    </div>
  );
};

export default SectionBenefits;
