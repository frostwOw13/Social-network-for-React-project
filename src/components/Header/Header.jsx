import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <img src="https://fastly.to/HchnCH"/>
            </div>
            <div>
                <form className={s.searchForm}>
                    <input type="text" placeholder="Type here to search" aria-label="Search" />
                        <a><i className="fas fa-search"></i></a>
                </form>
            </div>
            <div className={s.rightSideNotifications}>
                <ul className={s.notifications}>
                    <li className={s.img}>
                        <NavLink to='/profile'><img src='https://cutt.ly/BjoCYmV' /></NavLink>
                    </li>
                    <li className={s.navItem}>
                        <NavLink to='/profile'>Robert Downey Jr.</NavLink>
                    </li>
                    <li className={s.navItemFont}>
                        <a href='#'><i className="fas fa-home"></i></a>
                    </li>
                    <li className={s.navItemFont}>
                        <a href='#'><i className="fas fa-user-friends"></i></a>
                    </li>
                    <li className={s.navItemFont}>
                        <a href='#'><i className="fas fa-bell"></i></a>
                    </li>
                    <li className={s.navItemFont}>
                        <a href='#'><i className="fas fa-envelope"></i></a>
                    </li>
                </ul>
            </div>

        </div>
)
}

export default Header;
