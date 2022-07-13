import React from 'react';
import './Social-networks.sass';
import faceBookIcon from '../../icons/iconmonstr-facebook-4.svg';
import linkedinIcon from '../../icons/iconmonstr-linkedin-4.svg';
import twitterIcon from '../../icons/iconmonstr-twitter-4.svg';

const SocialNetworks = ({
  isBig = false,
}) => {
  let iconSize = 'social-network__icon';

  if (isBig) iconSize += ' social-network__icon_big';

  return (
    <div className={'social-network'}>
      <div className={'social-network__icons-container'}>
        <img src={faceBookIcon} alt={'faceBookIcon'} className={iconSize}/>
        <img src={twitterIcon} alt={'twitterIcon'} className={iconSize}/>
        <img src={linkedinIcon} alt={'linkedinIcon'} className={iconSize}/>
      </div>
            
    </div>
  );
};

export default SocialNetworks;
