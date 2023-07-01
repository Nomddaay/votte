import React from 'react';
import TitleBar from '../../components/header/titleBar/TitleBar';
import NavBar from '../../components/header/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <TitleBar />
      <NavBar />
      <div className='wrapper'>
        <div className='section1'>
          <div className='big_text'>NNN</div>
        </div>  
      </div>
      <Footer />
    </>
  )
}

export default HomePage;