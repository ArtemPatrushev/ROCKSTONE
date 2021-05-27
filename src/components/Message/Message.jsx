import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import style from './Message.module.scss';

const Message = ({ deleteMessage, messageId, message }) => {

    const deleteMessageClick = () => {
        deleteMessage(messageId);
    };

    return (
        <div className={style.messageBlock}>
            <span className={style.messageBlock__text}>{message}</span>
            <IconButton aria-label="delete"
                onClick={deleteMessageClick}
                className={style.deleteButton}
                style={{ opacity: '0.7' }}>
                <DeleteIcon fontSize="small" style={{ color: 'white' }} />
            </IconButton>
        </div>
    );
};

export default Message;
