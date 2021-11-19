import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return(
       <div className={s.item}>
            <div className={s.image}>
                <img
                    alt="pic"
                    src='https://w7.pngwing.com/pngs/505/263/png-transparent-computer-icons-emoticon-smiley-cool-ico-miscellaneous-face-orange.png'
                />
            </div>

            <div className={s.commentContent}>
                <div className={s.humanName}><b>{props.name}</b></div>
                <div className={s.msg}>{props.message}</div>
                <div className={s.likes}>Likes: {props.likes}</div>
            </div>
       </div>
   )
}

export default Post;