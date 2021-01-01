import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return  <div className={s.Message}>
        <img src='https://clck.ru/ShAMi' />
        <div className={s.textArea}>
            <span>{props.name}</span>
            <p>{props.message}</p>
        </div>
    </div>
};

export default Message;
