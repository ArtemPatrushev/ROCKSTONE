import { connect } from 'react-redux';
import { addMessage, deleteMessage } from '../../redux/chatReducer';
import Chat from './Chat';


const mapStateToProps = (state) => {
    return {
        messages: state.chatPage.messages,
    }
};  

export default connect(mapStateToProps, { addMessage, deleteMessage })(Chat);

