import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {sendMessageCreator, updateMessageBodyCreator} from "../../Redux/dialogsReducer";


const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(d =>
        <Dialog
            id={d.id}
            name={d.name}
        />);

    let messages = props.msgData.map(m =>
        <Message
            id={m.id}
            msg={m.message}
        />);

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let newMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogs}
            </div>
            <div className={s.line}/>
            <div className={s.messages}>
                {messages}
                <hr/>
                <textarea
                    className={s.messageArea}
                    value={props.messageText}
                    onChange={newMessageChange}
                    placeholder='Type your message...'
                />

                <div>
                    <button onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;