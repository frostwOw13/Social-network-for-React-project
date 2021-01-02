import React from 'react';
import s from './Header.module.css'

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

        </div>
)
}

export default Header;
