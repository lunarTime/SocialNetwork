import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/state";

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 updatePostText={store.updatePostText.bind(store)}
                 newPostText={store.newPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
    reportWebVitals();
}

rerender(store.getState());
store.subscribe(rerender);
