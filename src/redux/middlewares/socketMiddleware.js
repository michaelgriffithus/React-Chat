import {
    SEND_CHAT_MESSAGE,
    DISPLAY_CHAT_MESSAGE
} from '../actions/ActionTypes';

import { captureMessage } from '../actions';

export const createNewSocketMiddleware = socket => store => {

    // Listen for events that's coming from the server.
    socket.on(DISPLAY_CHAT_MESSAGE, message => {
        console.log('From server', message);
        store.dispatch(captureMessage(message));
    });

    return next => action => {
        // When dispatching a redux action.
        switch (action.type) {
            case SEND_CHAT_MESSAGE:
                socket.emit(SEND_CHAT_MESSAGE, action.message);
            case 'set_user':
                socket.emit('set_user', action.user);
            default:
                next(action);
        }
    }
}