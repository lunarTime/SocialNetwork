import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/state";

const Posts = (props) => {

    let postsElements =
        props.posts.map(p =>
            <Post
                id={p.id}
                name={p.name}
                message={p.message}
                likes={p.lCount}
            />)

    let newPostEl = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postChange = () => {
        let text = newPostEl.current.value;
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.content}>
            <div>
                <textarea
                    onChange={postChange}
                    ref={newPostEl}
                    value={props.newPostText}
                    placeholder='Type your message...'
                />

                <button
                    onClick={addPost}>
                    Add post
                </button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;