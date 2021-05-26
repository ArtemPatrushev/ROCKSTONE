import { LoginReduxForm } from './ChatForm/ChatForm';
import Message from '../Message/Message';
import style from './Chat.module.css';
import React from 'react';
import { useEffect } from 'react';
import { reset } from "redux-form";


const Chat = ({ messages, addMessage, deleteMessage }) => {

    useEffect(() => {
        chatWindow.current.scrollTop = chatWindow.current.scrollHeight - chatWindow.current.clientHeight;
    });

    const chatWindow = React.createRef()

    let messagesElements = messages.map((m) => {
        return <Message messageId={m.id} message={m.message} key={m.id} deleteMessage={deleteMessage} className='messageItem' />
    });


    // formData - данные из Field, которые пришли из LoginReduxFor
    const addNewMessage = (formData, dispatch) => {
        let { message } = formData;
        const lastMessageId = messages.length;   // с помощью данного метода берем идентификатор нашего последнего сообщения
        const messageId = lastMessageId + 1;
        // debugger
        addMessage(message, messageId);
        dispatch(reset('message'));
    };

    return (
        <div className={style.chatWrapper}>
            <LoginReduxForm
                onSubmit={addNewMessage}
            />
            <div className={style.messageWrapper} ref={chatWindow}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Chat;