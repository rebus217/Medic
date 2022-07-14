import React from 'react';
import AboutUsLeft from './about-us__left-content/about-us__Left';
import WhyUsRight from './about-us__right-content/about-us__why-us';
import './section__about-us.sass';

const SectionAboutUs = () => {
  return (
    <div className="about-us custom-container_small">
      <div className="about-us__left-content">
        <div className="about-us__title">
          <p className={'title'}>About US</p>
        </div>
        <AboutUsLeft />
      </div>
      <div className="about-us-right-content">
        <div className="about-us__title">
          <p className={'title'}>Why US?</p>
        </div>
        <WhyUsRight />
      </div>
    </div>
  );
};

export default SectionAboutUs;
