let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: "Hi there",
                    lCount: 1
                },
                {
                    id: 2,
                    message: "Hi !!!",
                    lCount: 3
                }
            ],
            newPostText: 'any message...'
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
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Hi there'
                },
                {
                    id: 3,
                    message: 'Hi there, guys'
                }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            lCount: 0
        };
        if (newPost.message === '') {
            return false;
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updatePostText(text) {
        this._state.profilePage.newPostText = text;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;