import { LoginReduxForm } from './ChatForm/ChatForm';
import Message from './Message/Message';
import style from './Chat.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useState } from 'react';
// import { CSSTransition } from 'react-transition-group';


const Chat = (props) => {

    const [messageText, setMessageText] = useState();

    // let messagesElements = props.messages.map((m) => {
    //     return <Message messageId={m.id} message={m.message} key={m.id} deleteMessage={props.deleteMessage} className='messageItem' />
    // });

    // formData - данные из Field, которые пришли из LoginReduxFor
    const addNewMessage = (formData) => {
        let { message } = formData;
        const lastMessageId = props.messages.length;   // с помощью данного метода берем идентификатор нашего последнего сообщения
        const messageId = lastMessageId + 1;
        // debugger
        props.addMessage(message, messageId);
    };

    return (
        <div className={style.chatWrapper}>
            <LoginReduxForm 
                onSubmit={addNewMessage}
            />
            <div className={style.messageWrapper}>
                <TransitionGroup component='div'>
                    {props.messages.map((m) => 
                        <CSSTransition
                            key={m.id}
                            timeout={600}
                            classNames='messageItem'>
                            <Message messageId={m.id} message={m.message} key={m.id} deleteMessage={props.deleteMessage} className='messageItem' />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default Chat;