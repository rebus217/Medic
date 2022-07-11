import * as React from 'react';
import NavBar from '../nav-bar/nav-bar';
import SocialNetworks from '../social-networks/Social-networks';

import './first-section.sass';

import logo from '../../icons/logo.svg';

function FirstSection() {
  return (
    <section className="first-section container">
      <div className={'first-section__contacts'}>
        <div className={'first-section__contacts-container container container_small'}>
          <SocialNetworks />
          <p className={'first-section__e-mail'}>sales@medpro.com</p>
        </div>
      </div>
      <div className={'first-section__header-container container container_small'}>
        <img className={'first-section__logo'} src={logo} alt={'logo'} />
        <div className="first-section__nav-bar">
          <NavBar />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
