import React from 'react';
import AboutUsLeft from './about-us__left-content/about-us__Left';
import './App.sass';
import CarouselCustom from './blocks/carousel/carousel';
import ForPhysicians from './blocks/for-physicians/for-physicians';
import HeaderPhone from './blocks/header-phone/header-phone';
import NavBar from './blocks/nav-bar/nav-bar';
import SocialNetworks from './blocks/social-networks/Social-networks';

import logo from './icons/logo.svg';

function App() {
  return (
    <div className="custom-container">
      <section id="header" className="section-header">
        <div className="blue-row ">
          <div className="blue-row__content custom-container_small">
            <SocialNetworks/>
            <a className={'section-header__e-mail'} href={'#'}>sales@medpro.com</a>
          </div>
        </div>
        <div className="section-header__content-conteiner custom-container_small">
          <img className={'section-header__logo'} src={logo} alt={'logo'}/>
          <div className="section-header__nav-bar-container">
            <NavBar/>
          </div>
          <div className="section-header__phone">
            <HeaderPhone/>
          </div>
        </div>
        <div className="section-header__carousel">
          <CarouselCustom/>
          <div className="section-header__carousel-text">
            <ForPhysicians/>
          </div>
        </div>
      </section>
      <section id="about-us" className="about-us custom-container_small">
        <div className="about-us__left-content">
          <AboutUsLeft/>
        </div>
        <div className="about-us-right-content">

        </div>
      </section>
    </div>
  );
}

export default App;
