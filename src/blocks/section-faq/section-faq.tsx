import React from 'react';
import './section-faq.sass';
import '../../App.sass';
import '../title/title.sass';
import SocialNetworks from '../social-networks/Social-networks';

const SectionFAQ = () => {
  return (
    <div className={'faq'}>
      <div className={'faq__content-container custom-container_small'}>
        <div className={'faq__item'}>
          <p className={'title faq__item-title'}>
            About MedPro
          </p>
          <p className={'faq__item-text'}>
            According to us blisters are a very common thing and we come across them
            very often in our daily lives.
            It is a very common occurrence like cold or fever depending upon your lifestyle.
          </p>
        </div>
        <div className={'faq__item'}>
          <p className={'title faq__item-title'}>
            Quick Links
          </p>
          <a href={'#'} className={'faq__item-text'}>
            What Do We Offer?
          </a>
          <a href={'#services'} className={'faq__item-text'}>
            Coding Services
          </a>
          <a href={'#'} className={'faq__item-text'}>
            FAQ’s
          </a>
          <a href={'#services'} className={'faq__item-text'}>
            Security
          </a>
          <a href={'#'} className={'faq__item-text'}>
            Contact Us
          </a>
        </div>
        <div className={'faq__item'}>
          <p className={'title faq__item-title'}>
            Stay Connected
          </p>
          <SocialNetworks isBig={true}/>
        </div>
      </div>
    </div>
  );
};

export default SectionFAQ;
