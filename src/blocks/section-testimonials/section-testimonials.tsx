import React from 'react';
import './section-testimonials.sass';
import '../../App.sass';
import '../title/title.sass';

const SectionTestimonials = () => {
  return (
    <div className={'section-testimonials'}>
      <div className={'section-testimonials__content custom-container_small'}>
        <div className={'section-testimonials__left-container'}>
          <div className={'section-testimonials__first-text-container'}>
            <p className={'title'}>Testimonials</p>
            <p className={'section-testimonials__left-sub-title'}>
              What people say?
            </p>
          </div>
          <div className={'section-testimonials__second-text-container'}>
            <p className={'section-testimonials__left-title'}>
              90%
            </p>
            <p className={'section-testimonials__left-sub-title_big'}>
              First pass payment
            </p>
          </div>
          <p className={'section-testimonials__left-sub-title_big'}>
            Next / Prev
          </p>
        </div>
        <div className={'section-testimonials__right-container'}>
          <div className={'section-testimonials__right-testimonials-container'}>
            <p>
              Increased revenues
            </p>
            <p>
              When most people think of laser eye surgery,
              they automatically think of LASIK.
              While it is true that LASIK is a type of laser eye surgery,
              there are a number of other laser procedures that can produce equally successful results
            </p>
            <p>
              Sam Andrews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTestimonials;
