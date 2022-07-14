import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.sass';
import './blocks/title/title.sass';
import SectionService from './blocks/section-services/section-service';
import SectionTestimonials from './blocks/section-testimonials/section-testimonials';
import SectionAppointment from './blocks/section-appointment/section-appointment';
import SectionFAQ from './blocks/section-faq/section-faq';
import Footer from './blocks/footer/footer';
import SectionContactUs from './blocks/section-contact-us/section-contact-us';
import SectionAboutUs from './blocks/section-about-us/section__about-us';
import SectionHeader from './blocks/section-header/section-header';
import SectionBenefits from './blocks/section-benefits/section-benefits';

function App() {
  return (
    <div className="custom-container">
      <section id="home">
        <SectionHeader/>
      </section>
      <section id="about-us">
        <SectionAboutUs/>
      </section>
      <section id={'benefits'}>
        <SectionBenefits/>
      </section>
      <section id={'services'}>
        <SectionService/>
      </section>
      <section id={'testimonials'}>
        <SectionTestimonials/>
      </section>
      <section id={'appointment'}>
        <SectionAppointment/>
      </section>
      <section id={'FAQ'}>
        <SectionFAQ/>
      </section>
      <section id={'contact-us'} className={'section-contact-us'}>
        <SectionContactUs/>
      </section>
      <footer id={'footer'}>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
