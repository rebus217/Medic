import React from 'react';
import './section-service__spoiler.sass';
// import minus from '../../../icons/minus.svg';
import plus from '../../../icons/plus.svg';
import codingServicesImg from '../../../img/coding-services.png';

const SectionServiceSpoiler = () => {
  return (
    <div className={'service'}>
      <div className={'service__item'}>
        <div className={'service__item-title-container'}>
          <p className={'service__item-title'}>Coding Services</p>
          <img src={plus} alt={'icon'} className={'service__item-icon'}/>
        </div>
        <div className={'service__item-line'}/>
        <div className={'service__item-content'}>
          <img src={codingServicesImg} alt={'coding services'} className={'service__item-image'}/>
          <div className={'service__item-text-container'}>
            <p className={'service__item-text'}>
              We offer high quality coding and auditing services to hospitals and physicians;
              services extended for Anesthesia, Radiology, E&M and Surgery coding.
            </p>
            <p className={'service__item-read-more'}>
              READ MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServiceSpoiler;
