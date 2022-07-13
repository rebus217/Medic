import React from 'react';
import './section-appointment.sass';
import '../../App.sass';
import '../title/title.sass';
import Button from '../button/button';

const SectionAppointment = () => {
  return (
    <div className={'appointment custom-container_small'}>
      <div className={'appointment__left-content'}>
        <p className={'title'}>
          For Physicians
        </p>
        <p className={'sub-title'}>
          Our Promise
        </p>
        <p className={'appointment__left-text'}>
          90% First Pass payment within 30 days <br/>
          @up to 3% of collected revenue. <br/>
          Free Credentialing and Re-credentialing <br/>
        </p>
        <p className={'appointment__read-more'}>
          READ MORE
        </p>
        <p className={'title'}>
          For Hospitals/Medical Billing Companies
        </p>
        <p className={'sub-title'}>
          Our Promise
        </p>
        <p className={'appointment__left-text'}>
          Increase in revenue by 15% <br/>
          Decrease in costs by 40% <br/>
          Accelerated cash flows with effective management of denials <br/>
        </p>
        <p className={'appointment__read-more'}>
          READ MORE
        </p>
      </div>
      <div className={'appointment__right-content'}>
        <form className={'appointment__form'} title={'Appointment Form'}>
          <p className={'appointment__form-title title'}>Appointment Form</p>
          <input placeholder={'First Name*'} className={'appointment__form-input'}/>
          <input placeholder={'Last Name*'} className={'appointment__form-input'}/>
          <input placeholder={'Email Address*'} className={'appointment__form-input'}/>
          <input placeholder={'Company'} className={'appointment__form-input'}/>
          <div className={'appointment__form-button'}>
            <Button text={'SEND'} isBig={false}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SectionAppointment;
