import React from 'react';
import './section-contact-us.sass';
import '../../App.sass';
import '../title/title.sass';
import markIcon from '../../icons/mark-icon.svg';
import phoneIcon from '../../icons/phone-icon-white.svg';
import eMailIcon from '../../icons/e-mail-icon.svg';

const SectionContactUs = () => {
  return (
    <div className={'contact-us custom-container_small'}>
      <div className={'contact-us__card'}>
        <img src={markIcon} alt={'mark icon'} className={'contact-us__card-icon'} />
        <div className={'contact-us__text-container'}>
          <p className={'title contact-us__card-title'}>US Address</p>
          <p className={'contact-us__card-text'}>41 Lehner Lane Suite 272</p>
        </div>
      </div>
      <div className={'contact-us__card contact-us__card_6c'}>
        <img src={phoneIcon} alt={'mark icon'} className={'contact-us__card-icon'} />
        <div className={'contact-us__text-container'}>
          <p className={'title contact-us__card-title'}>Call Us</p>
          <p className={'contact-us__card-text'}>444-599-3441</p>
        </div>
      </div>
      <div className={'contact-us__card contact-us__card_7b'}>
        <img src={eMailIcon} alt={'mark icon'} className={'contact-us__card-icon'} />
        <div className={'contact-us__text-container'}>
          <p className={'title contact-us__card-title'}>Write to Us</p>
          <p className={'contact-us__card-text'}>sales@medpro.com</p>
        </div>
      </div>
    </div>
  );
};

export default SectionContactUs;
