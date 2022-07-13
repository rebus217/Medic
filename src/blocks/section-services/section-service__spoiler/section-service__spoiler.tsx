import React, {FC} from 'react';
import './section-service__spoiler.sass';
import codingServicesImg from '../../../img/coding-services.png';

const SectionServiceSpoiler: FC = () => {
  function onClickSpoiler(e: React.MouseEvent<HTMLDivElement>) {
    ((e.target as Element).parentNode?.parentNode?.childNodes[2] as Element).classList.toggle('service_item-active');
    (e.target as Element).classList.toggle('service_icon-active');
  }

  return (
    <div className={'service'}>
      <div className={'service__item'}>
        <div className={'service__item-title-container'}>
          <p className={'service__item-title'}>Coding Services</p>
          <div className={'service__item-icon'} onClick={(e)=>onClickSpoiler(e)}/>
        </div>
        <div className={'service__item-line'}/>
        <div className={'service__item-content'}>
          <img src={codingServicesImg} alt={'coding services'} className={'service__item-image'}/>
          <div className={'service__item-text-container'}>
            <p className={'service__item-text'}>
              We offer high quality coding and auditing services to hospitals and physicians;
              services extended for Anesthesia, Radiology, E&M and Surgery coding.
            </p>
            <p className={'service__item-read-more'}>
              READ MORE
            </p>
          </div>
        </div>
      </div>
      <div className={'service__item'}>
        <div className={'service__item-title-container'}>
          <p className={'service__item-title'}>Credentialing</p>
          <div className={'service__item-icon'} onClick={(e)=>onClickSpoiler(e)}/>
        </div>
        <div className={'service__item-line'}/>
        <div className={'service__item-content'}>
          <img src={codingServicesImg} alt={'coding services'} className={'service__item-image'}/>
          <div className={'service__item-text-container'}>
            <p className={'service__item-text'}>
              We offer high quality coding and auditing services to hospitals and physicians;
              services extended for Anesthesia, Radiology, E&M and Surgery coding.
            </p>
            <p className={'service__item-read-more'}>
              READ MORE
            </p>
          </div>
        </div>
      </div>
      <div className={'service__item'}>
        <div className={'service__item-title-container'}>
          <p className={'service__item-title'}>HCC Maangement Services</p>
          <div className={'service__item-icon'} onClick={(e)=>onClickSpoiler(e)}/>
        </div>
        <div className={'service__item-line'}/>
        <div className={'service__item-content'}>
          <img src={codingServicesImg} alt={'coding services'} className={'service__item-image'}/>
          <div className={'service__item-text-container'}>
            <p className={'service__item-text'}>
              We offer high quality coding and auditing services to hospitals and physicians;
              services extended for Anesthesia, Radiology, E&M and Surgery coding.
            </p>
            <p className={'service__item-read-more'}>
              READ MORE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionServiceSpoiler;
