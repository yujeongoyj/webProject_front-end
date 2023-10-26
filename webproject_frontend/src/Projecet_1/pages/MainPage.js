import React from 'react';
import Header from '../Header/Header';
import Footer from '../Foofer/Footer';
import Middle from '../Middle/Middle';
import Bottom from '../Bottom/Bottom';

function MainPage() {
  return (
      <div>
        <Header/>
        <Middle/>
        <Bottom/>
        <Footer/>
      </div>
  );
}

export default MainPage;