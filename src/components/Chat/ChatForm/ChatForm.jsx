import { Field, reduxForm } from 'redux-form';
import style from '../Chat.module.css';

const ChatForm = (props) => {

    return (
        <form
            action="#"
            className={style.form}
            // handleSubmit - вызывается из LoginReduxForm, а в нем (handleSubmit) вызывает onSubmit (<LoginReduxForm onSubmit={onSubmit} />), который вызывает нашу функцию сonst onSubmit()
            onSubmit={props.handleSubmit}>
            <Field
                component='textarea'
                placeholder='Enter your message'
                name={'message'}
                autoFocus
                className={style.textField}
            />
            <button 
                className={style.sendButton}
            >
                Send</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: 'message'
})(ChatForm);