import {applyMiddleware, createStore, Middleware, compose} from 'redux';

//import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {reducers} from './reducers';

declare var window:any;
const error : Middleware = api => next => action => {
    try {
        return next(action);
    } catch (e){
        throw "ahh error";
    }
};

const middleware = [thunk, error];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export default createStore(reducers, enhancer);
