import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Usernames = (props) => {
    return <p><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></p>
};

export default Usernames;
