import React from 'react';
import './section-header.sass';
import SocialNetworks from '../social-networks/Social-networks';
import logo from '../../icons/logo.svg';
import NavBar from './nav-bar/nav-bar';
import HeaderPhone from './header-phone/header-phone';
import CarouselCustom from './carousel/carousel';
import Button from '../button/button';
import '../../App.sass';

const SectionHeader = () => {
  return (
    <div className="section-header">
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
        <div>
          <CarouselCustom />
        </div>
        <div className="section-header__carousel-additional">
          <div className="section-header__text-container">
            <p className="section-header__title">Fort Physicians</p>
            <p className="section-header__promise">Our Promise</p>
            <p className="section-header__text">90% First Pass payment within 30 days @up to 3% of collected revenue.</p>
          </div>
          <Button text={'REACH US'} isBig={true} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
