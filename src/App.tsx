import React from 'react';
import './App.sass';
import CarouselCustom from './blocks/carousel/carousel';
import HeaderPhone from './blocks/header-phone/header-phone';
import NavBar from './blocks/nav-bar/nav-bar';
import SocialNetworks from './blocks/social-networks/Social-networks';

import logo from './icons/logo.svg';

function App() {
  return (
    <div className="container">
      <div className="section-header">
        <div className="blue-row ">
          <div className="blue-row__content container_small">
            <SocialNetworks/>
            <a className={'section-header__e-mail'} href={'#'}>sales@medpro.com</a>
          </div>
        </div>
        <div className="section-header__content-conteiner container_small">
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
        </div>
      </div>
    </div>
  );
}

export default App;
