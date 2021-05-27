import { connect } from 'react-redux';

import { addMessage, deleteMessage } from '../../redux/actions/messagesActions';
import Chat from './Chat';

const mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages,
    };
};

export default connect(mapStateToProps, { addMessage, deleteMessage })(Chat);
