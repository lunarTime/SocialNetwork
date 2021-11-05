import React from 'react';
import s from './Friends.module.css';

let avatar = <img
                className={s.imgFriend}
                src="https://media.istockphoto.com/vectors/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-vector-id1142192548?b=1&k=20&m=1142192548&s=170667a&w=0&h=g8AAlBN4nCs7f728GZ5r0Q99EuXB9ZKchx4HL1Mt6CU="
                alt="frnd"/>;

const Friends = () => {
    return (
            <div className={s.frBlock}>
                <div className={s.titleFriends}>
                    <h3>Friends</h3>
                </div>
                <div className={s.friend}>
                    {avatar}
                    <span>Jess</span>
                </div>
                <div className={s.friend}>
                    {avatar}
                    <span>Marie</span>
                </div>
                <div className={s.friend}>
                    {avatar}
                    <span>Max</span>
                </div>

            </div>
    )
}

export default Friends;