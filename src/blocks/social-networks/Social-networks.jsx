import React from 'react';
import './Social-networks.sass'
import faceBookIcon from '../../icons/iconmonstr-facebook-4.svg'
import linkedinIcon from '../../icons/iconmonstr-linkedin-4.svg'
import twitterIcon from '../../icons/iconmonstr-twitter-4.svg'

const SocialNetworks = () => {
    return (
        <div className={'social-network'}>
            <div className={'social-network__icons-container'}>
                <img src={faceBookIcon} alt={'faceBookIcon'} className={'social-network__icon'}/>
                <img src={twitterIcon} alt={'twitterIcon'} className={'social-network__icon'}/>
                <img src={linkedinIcon} alt={'linkedinIcon'} className={'social-network__icon'}/>
            </div>
            
        </div>
    );
};

export default SocialNetworks;
