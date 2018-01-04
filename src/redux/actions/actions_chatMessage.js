import {
    SEND_CHAT_MESSAGE,
    DISPLAY_CHAT_MESSAGE
} from './ActionTypes';

export const sendMessage = message => {
    return {
        type: SEND_CHAT_MESSAGE,
        message
    };
}

export const captureMessage = message => {
    return {
        type: DISPLAY_CHAT_MESSAGE,
        message
    };
}