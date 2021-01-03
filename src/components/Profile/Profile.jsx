import React, {Component} from 'react';
import s from './Profile.module.css';
import Post from './Post/Post.jsx'
import {NavLink} from "react-router-dom";

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
      <div className={s.middle_container}>
        <ul>
          <li className={s.timeline}>
            <NavLink to='#'>Timeline</NavLink>
          </li>
          <li className={s.about}>
            <NavLink to='#'>About</NavLink>
          </li>
          <li className={s.friends}>
            <NavLink to='#'>Friends</NavLink>
          </li>
          <li className={s.photos}>
            <NavLink to='#'>Photos</NavLink>
          </li>
        </ul>
      </div>
      <div className={s.bottom_container}>
        <div className={s.navbar_bottom}>
          <a href='#'>Contact and Basic Info</a>
          <a href='#'>Family and Relationship</a>
          <a href='#'>Work and Education</a>
          <a href='#'>Places You've Lived</a>
          <a href='#'>Details About You</a>
        </div>
        <div className={s.content_bottom}>
          <h4>Contact information</h4>
          <hr />
          <div className={s.content_content}>
            <div className={s.left_content}>
              <p>Email</p>
              <p>Mobile</p>
              <p>Adress</p>
            </div>
            <div className={s.right_content}>
              <p>frostwOw13@yandex.ru</p>
              <p>8 (953) 999 99 99</p>
              <p>Russian Federation</p>
            </div>
          </div>
          <h4>Websites and Social Links</h4>
          <hr />
          <div className={s.content_content}>
            <div className={s.left_content}>
              <p>Website</p>
              <p>Social Link</p>
            </div>
            <div className={s.right_content}>
              <p>https://frostysoc.com</p>
              <p>https://frostysoc.com</p>
            </div>
          </div>
          <h4>Basic Information</h4>
          <hr />
          <div className={s.content_content}>
            <div className={s.left_content}>
              <p>Birth Date</p>
              <p>Birth Year</p>
              <p>Gender</p>
              <p>interested in</p>
              <p>language</p>
            </div>
            <div className={s.right_content}>
              <p>28 June</p>
              <p>1997</p>
              <p>Male</p>
              <p>Programming</p>
              <p>English, Russian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
