import React from 'react';
import './HeaderContacts.sass'
import faceBookIcon from '../../icons/iconmonstr-facebook-4.svg'
import linkedinIcon from '../../icons/iconmonstr-linkedin-4.svg'
import twitterIcon from '../../icons/iconmonstr-twitter-4.svg'

const HeaderContacts = () => {
    return (
        <div className={'contacts'}>
            <div className={'contacts__icons-container'}>
                <img src={faceBookIcon} alt={'faceBookIcon'} className={'contacts__icon'}/>
                <img src={twitterIcon} alt={'twitterIcon'} className={'contacts__icon'}/>
                <img src={linkedinIcon} alt={'linkedinIcon'} className={'contacts__icon'}/>
            </div>
            
        </div>
    );
};

export default HeaderContacts;
