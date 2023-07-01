import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='nav_bar'>
      <div className='nav_bar_options'>
        <ul>
          <li>
            <Link to='/' className='nav_items'>SONGS</Link>
          </li>
          <li>
            <Link to='/' className='nav_items'>SPORTS</Link>
          </li>
          <li>
            <Link to='/' className='nav_items'>MOVIES</Link>
          </li>
          <li>
            <Link to='/' className='nav_items'>BOOKS</Link>
          </li>
          <li>
            <Link to='/' className='nav_items'>BLOG</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;