import React from 'react';
import s from './RightNavbar.module.css'
import {NavLink} from 'react-router-dom'

const RightNavbar = () => {
  return <nav className={s.nav}>
      <NavLink to='/dialogs' className={s.aChat}>Chats</NavLink>
        <ul>

        <li className={s.item}>
          <img src='https://cutt.ly/1jokDaz' />
          <div>
            <a href='#'><span>Mike Schroepfer</span></a>
            <p>Just now</p>
          </div>
        </li>
          <li className={s.item}>
            <img src='https://cutt.ly/1jokDaz' />
            <div>
              <a href='#'><span>Mike Schroepfer</span></a>
              <p>Just now</p>
            </div>
          </li>
          <li className={s.item}>
            <img src='https://cutt.ly/1jokDaz' />
            <div>
              <a href='#'><span>Mike Schroepfer</span></a>
              <p>Just now</p>
            </div>
          </li>
          <li className={s.item}>
            <img src='https://cutt.ly/1jokDaz' />
            <div>
              <a href='#'><span>Mike Schroepfer</span></a>
              <p>Just now</p>
            </div>
          </li>

      </ul>
  </nav>
}

export default RightNavbar;
