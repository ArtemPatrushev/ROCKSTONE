const ADD_MESSAGE = 'ADD_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';

let initialState = {
    messages: []
};

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let {message, messageId} = action;
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
    }
}

export const addMessage = (message, messageId) => {
    return {
        type: ADD_MESSAGE,
        message,
        messageId
    };
};

export const deleteMessage = (messageId) => {
    return {
        type: DELETE_MESSAGE,
        messageId
    }
}

export default chatReducer;