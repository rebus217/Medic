import React, { FC } from 'react';
import iconShield from '../../icons/why-us_icon1.svg';
import iconWorld from '../../icons/why-us_icon2.svg';
import iconChain from '../../icons/why-us_icon3.svg';
import './about-us__why-us.sass';

interface whyUsProps {}

const WhyUsRight: FC<whyUsProps> = () => {
  return (
    <div className={'why-us'}>
      <div className={'why-us__item why-us__item_F8'}>
        <div className={'why-us__icon-position'}>
          <img src={iconShield} className={'why-us__icon'} alt={'icon shield'} />
        </div>
        <div className={'why-us__text-container'}>
          <p className={'why-us__text'}>
            Our skilled and trustworthy teams ensure process continuity and maintain high standards
            of quality…
          </p>
          <p className={'why-us__read-more'}>READ MORE</p>
        </div>
      </div>

      <div className={'why-us__item why-us__item_F3'}>
        <div className={'why-us__icon-position'}>
          <img src={iconWorld} className={'why-us__icon'} alt={'icon world'} />
        </div>
        <div className={'why-us__text-container'}>
          <p className={'why-us__text'}>
            You are assured of transparency and openness in our staffing, workflows and
            communication protocol.{' '}
          </p>
          <p className={'why-us__read-more'}>READ MORE</p>
        </div>
      </div>

      <div className={'why-us__item why-us__item_F7'}>
        <div className={'why-us__icon-position'}>
          <img src={iconChain} className={'why-us__icon'} alt={'icon chain'} />
        </div>
        <div className={'why-us__text-container'}>
          <p className={'why-us__text'}>
            There is never a time when some one will not be in touch with you! Your dedicated
            account manager…
          </p>
          <p className={'why-us__read-more'}>READ MORE</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsRight;
