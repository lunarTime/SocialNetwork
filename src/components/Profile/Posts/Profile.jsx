import React from 'react';
import s from './Profile.module.css';
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Profile = (props) => {

    let postsElements =
        props.posts.map( p => <Post id={p.id} message={p.message} likes={p.lCount}/> )

    return (
        <div className={s.content}>
            <ProfileInfo/>

            <div>
                <textarea/>
                <button>Add post</button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default Profile;