import React from 'react';
import './section-service.sass';
import '../title/title.sass';
import SectionServiceSpoiler from './section-service__spoiler/section-service__spoiler';


const SectionService = () => {
  return (
    <div className={'section-service'}>
      <div className={'section-service__left-content'}>
        <p className={'title section-service__title'}>Our Services</p>
        <p className={'section-service__sub-title'}>Our staff extension services include</p>
        <SectionServiceSpoiler/>
      </div>
      <div className={'section-service__right-content'}>
        <p className={'title'}>Security</p>
        <p className={'section-service__sub-title'}>POLI Compliance</p>
      </div>
    </div>
  );
};

export default SectionService;
