import React, {Component} from 'react';
import s from './Profile.module.css';
import Post from './Post/Post.jsx'

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div className={s.top_container}>
        <div className={s.backgroundImg}>
          <div className={s.top_left}>
          </div>
          <div className={s.top_right}>
          </div>
        </div>
        <div className={s.profileItem}>
          <img src='https://cutt.ly/BjoCYmV' className={s.profilePic}/>
          <div className={s.profileFooter}>
            <ul className={s.socIcons}>
              <li>
                <a href='#'><img src="https://cutt.ly/wjoBCZR"></img></a>
              </li>
              <li>
                <a href='#'><img src="https://cutt.ly/3joNti3"></img></a>
              </li>
              <li>
                <a href='#'><img src="https://cutt.ly/cjoNsnf"></img></a>
              </li>
              <li>
                <a href='#'><img src="https://cutt.ly/KjoNkQY"></img></a>
              </li>
              <li>
                <a href='#'><img src="https://cutt.ly/LjoNzHB "></img></a>
              </li>
              <li>
                <a href='#'><img src="https://cutt.ly/njoNczw"></img></a>
              </li>

            </ul>
            <p className={s.profileName}>Robert Downey Jr.</p>
            <div className={s.profileCounts}>
              <ul className={s.postsCount}>
                <li>
                  <p className={s.countsNames}>Posts</p>
                  <p>120</p>
                </li>
                <li>
                  <p className={s.countsNames}>Followers</p>
                  <p>653</p>
                </li>
                <li>
                  <p className={s.countsNames}>Following</p>
                  <p>431</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Profile;
