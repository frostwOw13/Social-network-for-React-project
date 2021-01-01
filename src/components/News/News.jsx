import React from 'react';
import s from './News.module.css';
import NewsPost from './NewsPost/NewsPost.jsx'

const News = () => {
  return (
    <div className={s.news}>

      <div className={s.postsItem}>
        <div className={s.newPost}>
          <p>What's new today?</p>
          <div className={s.button}>
            <button>Send</button>
          </div>
        </div>

        <div>
          <NewsPost />
        </div>

      </div>

      <div className={s.newsRightBar}>
        Categories
      </div>

    </div>
  )
}

export default News;
