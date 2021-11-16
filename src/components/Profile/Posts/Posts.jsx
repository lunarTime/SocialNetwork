import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements =
        props.posts.map(p => <Post
            id={p.id}
            message={p.message}
            likes={p.lCount}
        />)

    let newPostEl = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let postChange = () => {
        let text = newPostEl.current.value;
        props.updatePostText(text);
    }

    return (
        <div className={s.content}>
            <div>
                <textarea
                    onChange={postChange}
                    ref={newPostEl}
                    value={props.newPostText}
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

/**
let text = newPostEl.current.value;
props.addPost(text);
 **/