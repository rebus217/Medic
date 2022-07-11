import React from 'react';
import './about-us__left.sass';
import aboutUsImage from '../img/about-us-image.png';

export default function AboutUsLeft() {

  return (
    <div className="left-content">
      <p className="left-content__title">
        About Us
      </p>
      {/* <img src={aboutUsImage} alt="about-us" className="left-content__img" /> */}
      <p className="left-content__img"></p>
      <p className="left-content__text">
        I no longer miss work to go to the doctor. I no longer wait hours sitting in a doctors office just to see the doctor. In the past, after seeing the doctor, I now no longer have to wait at a pharmacy to get my prescriptions filled. I now get medical treatment and prescriptions without leaving the house. I get all of this and its just a click away. Not only a click away, but its also legal.
        <br /><br />
        Today’s online pharmacies has made it very convenient for       people who already know what their diagnosis is, and already    know what medications work for them. 
      </p>
    </div>
  );
}
