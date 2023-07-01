import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav_bar'>
      <div className='nav_bar_options'>
        <ul>
          <li>
            <NavLink
              exact
              to='/songs'
              className='nav_items'
              activeClassName='active'
            >
              SONGS
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/sports'
              className='nav_items'
              activeClassName='active'
            >
              SPORTS
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/movies'
              className='nav_items'
              activeClassName='active'
            >
              MOVIES
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/books'
              className='nav_items'
              activeClassName='active'
            >
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/blog'
              className='nav_items'
              activeClassName='active'
            >
              BLOG
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
