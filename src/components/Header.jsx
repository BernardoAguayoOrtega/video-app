/* eslint-disable no-unused-vars */
// import react
import React from 'react';

import user from '../assets/user-icon.png'
import { Link } from 'react-router-dom';

//functional component
export default function Header() {
  return (
    <header className='header'>
      <img className='header__img' src='/' alt='' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={user} />
          <p>Profile</p>
        </div>
        <ul>
          <li><Link to='/login'>Account</Link></li>
          <li><Link to='/register'>log out</Link></li>
        </ul>
      </div>
    </header>
  )
}
