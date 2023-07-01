import React from 'react';
import TitleBar from '../../components/header/titleBar/TitleBar';
import NavBar from '../../components/header/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className='header_section'>
        <TitleBar />
        <NavBar />
      </div>
      <div className='wrapper'>
        <div className='section1'>
          <div className='big_text'>VOTE FOR YOUR ENTERTAINMENT GENRES</div>
          <div className='small_text'>Vote for your favorite entertainment genres and shape the future of entertainment. 
          Explore diverse categories like movies, music, books, and more. Discover the latest releases, 
          timeless classics, and hidden gems.</div>
        </div>  
      </div>
      <Footer />
    </>
  )
}

export default HomePage;