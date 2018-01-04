import { combineReducers } from 'redux';
import MessagesReducer from './reducer_messages';

export default combineReducers({
    messages: MessagesReducer
});