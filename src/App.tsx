import React from 'react';
import AboutUsLeft from './blocks/about-us__left-content/about-us__Left';
import './App.sass';
import CarouselCustom from './blocks/carousel/carousel';
import ForPhysicians from './blocks/for-physicians/for-physicians';
import HeaderPhone from './blocks/header-phone/header-phone';
import NavBar from './blocks/nav-bar/nav-bar';
import SocialNetworks from './blocks/social-networks/Social-networks';

import logo from './icons/logo.svg';
import Button from './blocks/button/button';
import WhyUsRight from './blocks/about-us__right-content/about-us__why-us';
import BenefitsButtonGroup from './blocks/benefits__button-group/benefits__button-group';

function App() {
  return (
    <div className="custom-container">
      <section id="home" className="section-header">
        <div className="blue-row ">
          <div className="blue-row__content custom-container_small">
            <SocialNetworks />
            <p className={'section-header__e-mail'}>sales@medpro.com</p>
          </div>
        </div>
        <div className="section-header__content-container custom-container_small">
          <img className={'section-header__logo'} src={logo} alt={'logo'} />
          <div className="section-header__nav-bar-container">
            <NavBar />
          </div>
          <div className="section-header__phone">
            <HeaderPhone />
          </div>
        </div>
        <div className="section-header__carousel">
          <CarouselCustom />
          <div className="section-header__carousel-text">
            <ForPhysicians />
          </div>
          <div className="section-header__carousel-button">
            <Button text={'REACH US'} isBig={true} />
          </div>
        </div>
      </section>
      <section id="about-us" className="about-us custom-container_small">
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
      </section>
      <section id={'benefits'} className={'benefits'}>
        <div className={'benefits__left-content'}>
          <div className={'benefits__background-img'}/>
          <div className={'benefits__button-group'}>
            <BenefitsButtonGroup/>
          </div>
        </div>
        <div className={'benefits__right-content'}>
          <div className={'benefits__text-container'}>
            <p className={'benefits__title title'}>Benefits</p>
            <p className={'benefits__selected-item'}>
              For Physicians and Group Practice
            </p>
            <p className={'benefits__text'}>
              • 	90% first pass payment within 30 days, at 3% Billing charges.<br/>
              • 	Increase of 15-20% in monthly collected revenue.<br/>
              • 	Expert teams with vast knowledge and experience who will follow up every claim to zero balance.<br/>
              • 	Services spanning coding review, claims and payment processing, as well as Insurance and patient follow up.<br/>
            </p>
          </div>
          <div className={'benefits__right-button'}>
            <Button text={'READ MORE'} isBig={false} />
          </div>
        </div>
      </section>
      <section id={'services'}>

      </section>
    </div>
  );
}

export default App;
