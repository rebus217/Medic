import React from 'react';
import './App.sass';
import SocialNetworks from './blocks/social-networks/Social-networks';
// @ts-ignore
import logo from '../src/icons/logo.svg'
import NavBar from './blocks/nav-bar/nav-bar';

function App() {
  return (
    <div>
      <section className='first-section container'>
          <div className={'first-section__contacts'}>
              <div className={'first-section__contacts-container container container_small'}>
                      <SocialNetworks/>
                  <a className={'first-section__e-mail'} href={'#'}>sales@medpro.com</a>
              </div>
          </div>
          <div className={'first-section__header-container container container_small'}>
              <img className={'first-section__logo'} src={logo} alt={'logo'}/>
              <NavBar/>
          </div>
      </section >
    </div>
  );
}

export default App;
