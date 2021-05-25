import style from './Message.module.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Message = (props) => {

    const deleteMessageClick = () => {
        props.deleteMessage(props.messageId);
    };

    return (
        <div className={style.messageBlock}>
            <p className={style.messageText}>{props.message}</p>
            <IconButton aria-label="delete"
                onClick={deleteMessageClick}
                className={style.deleteButton}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
}

export default Message;