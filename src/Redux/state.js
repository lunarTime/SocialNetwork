import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
            newPostText: ''
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
            ],
            newMessageText: ''
        }
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
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

export default store;