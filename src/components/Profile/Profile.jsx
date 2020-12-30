import React from 'react';
import s from './Profile.module.css';
import Post from './Post/Post.jsx'

const Profile = () => {
  return <div className={s.content}>

    <div className={s.profilePicture}>
      <img src='https://4.bp.blogspot.com/-TLaoMfZtF7Q/Vp3iWrZf7wI/AAAAAAAA8WA/-RPPQ58sTx8/s1600/Kaplan-hd-wallpapers%2B%2528165%2529.jpg' />
      <p>Download new picture</p>
    </div>

    <div>
      <h3>Ruslan Yusupov</h3>
    </div>
    <div className={s.description}>
      <p>Date of Brith: 28 June</p>
      <p>City: Tula</p>
      <p>Education: TulGU</p>
      <p className={s.lastFeature}>Web site: https://it-social-network.com</p>
    </div>

    <div className={s.posts}>

      <div>
      <h4>New Post</h4>
      </div>

      <div className={s.textArea}>
        <p>Type something new here...</p>
      </div>

      <div className='button'>
        <button type="button" name="button">Submit</button>
      </div>

      <Post />
      <Post />

    </div>

  </div>
}

export default Profile;
