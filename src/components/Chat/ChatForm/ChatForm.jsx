import { Field, reduxForm } from 'redux-form';
import style from '../Chat.module.css';

const ChatForm = ({ handleSubmit, pristine }) => {

    return (
        <form
            action="#"
            className={style.form}
            // handleSubmit - вызывается из LoginReduxForm, а в нем (handleSubmit) вызывает onSubmit (<LoginReduxForm onSubmit={onSubmit} />), который вызывает нашу функцию сonst onSubmit()
            onSubmit={handleSubmit}>
            <Field
                component='textarea'
                placeholder='Enter your message'
                name={'message'}
                autoFocus
                className={style.textField}
            />
            <button
                className={style.sendButton}
                disabled={pristine}>
                Send</button>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: 'message'
})(ChatForm);