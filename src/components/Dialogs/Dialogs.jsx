import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import Usernames from "./Usernames/Usernames";

const Dialogs = (props) => {
    let DialogItem = props.state.users
        .map ( user => <Usernames name={user.firstName + ' ' + user.lastName} id={user.id} />)

    let MessageItem = props.state.messages
        .map ( message => < Message id={message.id} message={message.message} name={message.name}/> )

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
              { MessageItem }
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
            { DialogItem }
        </div>

      </div>

    </div>
  )
};

export default Dialogs;
