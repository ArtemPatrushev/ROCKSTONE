import { ADD_MESSAGE, DELETE_MESSAGE } from '../../constants/constants';

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
    };
};
