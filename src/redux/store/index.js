import { createStore, compose, applyMiddleware } from 'redux';
import { logger } from '../middlewares/logger';
import { createNewSocketMiddleware } from '../middlewares/socketMiddleware';
import reducers from '../reducers';
import io from 'socket.io-client';

// Initializing socket for the middleware.
const socket = io('http://localhost:5000');
socket.on('connect', () => {
    console.log('connected');
});

const socketMiddleware = createNewSocketMiddleware(socket);

const INITIAL_STATE = {};

const store = createStore(
    reducers,
    INITIAL_STATE,
    compose(
        applyMiddleware(logger, socketMiddleware)
    )
);

export default store;