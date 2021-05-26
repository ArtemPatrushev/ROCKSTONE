import style from './Message.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Message = ({ deleteMessage, messageId, message }) => {

    const deleteMessageClick = () => {
        deleteMessage(messageId);
    };

    return (
        <div className={`${style.messageBlock} ${style.bounceInTop}`}>
            <p className={style.messageText}>{message}</p>
            <IconButton aria-label="delete"
                onClick={deleteMessageClick}
                className={style.deleteButton}
                style={{opacity: '0.7'}}>
                <DeleteIcon fontSize="small" style={{color: 'white'}} />
            </IconButton>
        </div>
    );
}

export default Message;