import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";


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

    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                {dialogs}
            </div>
            <div className={s.line}/>
            <div className={s.messages}>
                {messages} <hr/>
                <textarea
                    className={s.messageArea}
                />
            </div>
        </div>
    )
}

export default Dialogs;