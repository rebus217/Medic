import React, { useState } from 'react';
import image1 from '../../img/carousel__image1.png';
import image2 from '../../img/carouserl__image2.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function CarouselCustom() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}
