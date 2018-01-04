import { DISPLAY_CHAT_MESSAGE } from '../actions/ActionTypes';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case DISPLAY_CHAT_MESSAGE:
            return {
                ...state,
                [action.message.id]: action.message
            };
        default:
            return state;
    }
}