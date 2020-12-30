import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
      <div className={s.postBody}>
        <img src='https://i12.fotocdn.net/s119/21a814ca575357d8/public_pin_l/2727621989.jpg' />
        <div className={s.post}>
          <h3>Day 1</h3>
          <p>Tortor condimentum lacinia quis vel eros donec ac. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Mauris ultrices eros in cursus turpis massa tincidunt. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ultricies mi quis hendrerit dolor magna eget est lorem. Fermentum et sollicitudin ac orci phasellus. Ornare lectus sit amet est placerat in. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer.</p>
        </div>
      </div>
  )
}

export default Post;
