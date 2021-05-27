import { Field, reduxForm } from 'redux-form';

import style from './ChatForm.module.scss';

const ChatForm = ({ handleSubmit, pristine, submitting }) => (
    <form
        action="#"
        className={style.form}
        onSubmit={handleSubmit}>
        <Field
            component='textarea'
            placeholder='Enter your message'
            name={'message'}
            autoFocus
            className={style.form__textField}
        />
        <button
            className={style.form__sendButton}
            disabled={pristine || submitting}>
            Send</button>
    </form>
);

export const LoginReduxForm = reduxForm({
    form: 'message'
})(ChatForm);
