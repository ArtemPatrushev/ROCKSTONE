import { LoginReduxForm } from './ChatForm/ChatForm';
import Message from '../Message/Message';
import style from './Chat.module.scss';
import React from 'react';
import { useEffect } from 'react';
import { reset } from "redux-form";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Chat = ({ messages, addMessage, deleteMessage }) => {

    useEffect(() => {
        chatWindow.current.scrollTop = chatWindow.current.scrollHeight - chatWindow.current.clientHeight;
    });

    const chatWindow = React.createRef();

    const addNewMessage = (formData, dispatch) => {
        let { message } = formData;
        const lastMessageId = messages.length;
        const messageId = lastMessageId + 1;
        addMessage(message, messageId);
        dispatch(reset('message'));
    };

    return (
        <div className={style.chatWrapper}>
            <LoginReduxForm
                onSubmit={addNewMessage}
            />
            <div className={style.chatWrapper__messageBlock} ref={chatWindow}>
                <TransitionGroup component='div'>
                    {messages.map((m) =>
                        <CSSTransition
                            key={m.id}
                            timeout={1100}
                            classNames='messageItem'>
                            <Message messageId={m.id} message={m.message} key={m.id} deleteMessage={deleteMessage} className='messageItem' />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Chat;