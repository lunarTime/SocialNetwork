import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.item}>
                <NavLink to='/link1' activeClassName={s.active}>Link1</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/link2' activeClassName={s.active}>Link2</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/link3' activeClassName={s.active}>Link3</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/link4' activeClassName={s.active}>Link4</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;