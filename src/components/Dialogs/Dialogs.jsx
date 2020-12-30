import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>

      <div>

        <div className={s.searchBar}>
          <p>Search...</p>
            <div>
              <img src='https://fedorovafond.ru/search-icon.png' />
            </div>
        </div>
        <div className={s.messages}>
          <div className={s.textMessages}>
            <div className={s.ownMessage}>
              <p>Hey</p>
              <img src='https://faceandcare.ru/wp-content/uploads/2017/11/uhod-za-kozhej-litsa-osenyu-osobennosti-02.jpg' />
            </div>
            <div className={s.elseMessage}>
              <img src='https://avatars.mds.yandex.net/get-zen_doc/28532/pub_5c61df4e1fabdc00afe7d0d9_5c61ece61e2fc800ad83254f/scale_1200' />
              <p>Whats'up</p>
            </div>
            <div className={s.ownMessage}>
              <p>What are you doing today? Go to party tonight.</p>
              <img src='https://faceandcare.ru/wp-content/uploads/2017/11/uhod-za-kozhej-litsa-osenyu-osobennosti-02.jpg' />
            </div>
          </div>
          <div className={s.formNewMessage}>
            <p>Type new message...</p>
            <button>Send</button>
          </div>
        </div>

      </div>

      <div className={s.dialogsItems}>

        <h3>All dialogs</h3>
        <hr />

        <div className={s.users}>
            <p>Kevin</p>
            <p>John</p>
            <p>Ryan</p>
            <p>Rihanna</p>
        </div>

      </div>

    </div>
  )
}

export default Dialogs;
