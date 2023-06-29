import React from 'react';
import './TitleBar.css';
import SearchBar from '../../searchBar/SearchBar';

const TitleBar = () => {
  return (
    <div className='title_bar'>
      <div className='text_logo'><a href='/login' style={{textDecoration: 'none'}}>VOTTE</a></div>
      <div className='search_and_login'>
        <SearchBar />
        <div className='link_login_page'>
          <a href='/login' className='text'>Login</a>
        </div>
      </div>
      
    </div>
  )
}

export default TitleBar