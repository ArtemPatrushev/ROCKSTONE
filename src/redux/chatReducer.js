import { ADD_MESSAGE, DELETE_MESSAGE } from '../constants/constants';

let initialState = {
    messages: []
};

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let { message, messageId } = action;
            return {
                ...state,
                messages: [...state.messages, { id: messageId, message: message }]
            };
        }
        case DELETE_MESSAGE: {
            const filterMessages = [...state.messages];
            const newMessages = filterMessages.filter(el => el.id !== action.messageId);
            return {
                ...state,
                messages: newMessages
            };
        }
        default:
            return state;
    };
};

export default chatReducer;
