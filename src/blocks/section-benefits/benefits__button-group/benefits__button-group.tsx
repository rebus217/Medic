import React, { useState} from 'react';
import './benefits__button-group.sass';

const BenefitsButtonGroup = () => {
  let buttonFirst = 'buttons-group__button ';
  let buttonSecond = 'buttons-group__button';
  let buttonThird = 'buttons-group__button';

  const [activeButton, setActiveButton] = useState(1);

  if (activeButton === 1) buttonFirst += ' buttons-group__button_active';
  if (activeButton === 2) buttonSecond += ' buttons-group__button_active';
  if (activeButton === 3) buttonThird += ' buttons-group__button_active';

    
  return (
    <div className={'buttons-group'}>
      <div className={buttonFirst} onClick={() => setActiveButton(1)}>
          For Physicians and Group Practice:
      </div>
      <div className={buttonSecond} onClick={() => setActiveButton(2)}>
          For Medical Billing Companies/Hospitals:
      </div>
      <div className={buttonThird} onClick={() => setActiveButton(3)}>
          You Stay in Control:
      </div>
    </div>
  );
};

export default BenefitsButtonGroup;
