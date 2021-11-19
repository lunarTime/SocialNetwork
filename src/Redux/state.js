let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    name: "John",
                    message: "Why I have a million likes???",
                    lCount: 1000000
                },
                {
                    id: 2,
                    name: "Michael",
                    message: "This is a second comment of this post",
                    lCount: 3
                }
            ],
            newPostText: 'type any message...'
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: 1,
                    name: 'Alex'
                },
                {
                    id: 2,
                    name: 'Kira'
                },
                {
                    id: 3,
                    name: 'Matthew'
                }
            ],
            msgData: [
                {
                    id: 1,
                    message: 'Message 1'
                },
                {
                    id: 2,
                    message: 'Message 2'
                },
                {
                    id: 3,
                    message: 'Message 3'
                }
            ]
        }
    },
    dispatch(action) {
        if (action.type === 'addPost') {
            let newPost = {
                id: 5,
                name: "NEW USER",
                message: this._state.profilePage.newPostText,
                lCount: 0
            };
            if (newPost.message === '') {
                return false;
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'updatePostText')  {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber(this._state);
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
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
export default store;
window.store = store;