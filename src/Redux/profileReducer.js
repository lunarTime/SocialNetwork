const ADDPOST = 'addPost';
const UPDATEPOSTTEXT = 'updatePostText';

const profileReducer = (state, action) => {
    switch(action.type){
        case ADDPOST:
            let newPost = {
                id: 5,
                name: "NEW USER",
                message: state.newPostText,
                lCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATEPOSTTEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'addPost'
    }
}
export const updatePostTextActionCreator = (text) => {
    return {
        type: 'updatePostText',
        text: text
    }
}
export default profileReducer;