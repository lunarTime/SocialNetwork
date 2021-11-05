import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;
    return (
        <div className={s.name + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default Dialog;