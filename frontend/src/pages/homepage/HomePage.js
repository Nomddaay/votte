// import React, { useState, useRef, useEffect } from 'react';
import TitleBar from '../../components/header/titleBar/TitleBar';
import NavBar from '../../components/header/navbar/NavBar';
import Footer from '../../components/footer/Footer';  
import MusicsImage from '../../assets/imgs/musics.jpg';
import SportsImage from '../../assets/imgs/sports.jpg';
import MoviesImage from '../../assets/imgs/movies.jpg';
import BooksImage from '../../assets/imgs/books.jpg';
import TextContent from '../../text/TextContent';
import FadeInSection from '../../scripts/FadeInSection';
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
          <div className='big_text'>{TextContent.bigText}</div>
          <div className='small_text'>{TextContent.smallText}</div>
        </div>
        <div className='section_A'>
          <img src={MusicsImage} style={{
            marginLeft: '40px',
          }} alt='MusicsImage'/>
          <FadeInSection className='content_section_A'>
            <div className={`title_section_A`}>{TextContent.musicsTitle}</div>
            <div className={`detail_text`}>{TextContent.musicsDetail}</div>
          </FadeInSection>
        </div>

        <div className='section_B'>
          <FadeInSection className='content_section_B'>
            <div className={`title_section_B`}>{TextContent.sportsTitle}</div>
            <div className={`detail_text`}>{TextContent.sportsDetail}</div>
          </FadeInSection>
          <img src={SportsImage} alt='SportsImage'/>
        </div> 

        <div className='section_A'>
          <img src={MoviesImage} style={{
            marginLeft: '40px',
          }} alt='MoviesImage'/>
          <FadeInSection className='content_section_A'>
            <div className={`title_section_A`}>{TextContent.moviesTitle}</div>
            <div className={`detail_text`}>{TextContent.moviesDetail}</div>  
          </FadeInSection>
        </div>

        <div className='section_B'>
          <FadeInSection className='content_section_B'>
            <div className={`title_section_B`}>{TextContent.booksTitle}</div>
            <div className={`detail_text`}>{TextContent.booksDetail}</div>
          </FadeInSection>  
          <img src={BooksImage} alt='BooksImage'/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomePage;
