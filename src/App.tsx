import React from 'react';
import './App.sass';
import HeaderContacts from "./blocks/headerContats/HeaderContacts";

function App() {
  return (
    <div>
      <section className='first-section container'>
          <div className={'first-section__contacts'}>
              <HeaderContacts/>
          </div>
      </section >
    </div>
  );
}

export default App;
