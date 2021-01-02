import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return <nav className={s.nav}>

    <ul>
      <li className={s.item}>
        <NavLink to='/news'>
          <i className="far fa-newspaper"></i>
          <span>News</span>
        </NavLink>
      </li>
      <li className={`${s.item} ${s.active}`}>
        <NavLink to='/profile'>
          <i className="fas fa-user-alt"></i>
          <span>Profile</span>
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to='/dialogs'>
          <i className="fas fa-envelope-open-text"></i>
          <span>Message</span>
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to='/friends'>
          <i className="fas fa-user-friends"></i>
          <span>Friends</span>
        </NavLink>
      </li>
      <li className={s.item}>
        <NavLink to='/settings'>
          <i className="fas fa-cogs"></i>
          <span>Settings</span>
        </NavLink>
      </li>

    </ul>
  </nav>
}

export default Navbar;
