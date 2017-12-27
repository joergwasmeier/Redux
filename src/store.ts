import {applyMiddleware, createStore, Middleware, compose} from 'redux';

import thunk from 'redux-thunk';
import {reducers} from './reducers';
import {routerMiddleware} from 'react-router-redux';
import {history} from './index';

declare var window:any;
const error : Middleware = api => next => action => {
    try {
        return next(action);
    } catch (e){
        throw "ahh error";
    }
};

const middleware = [thunk, error, routerMiddleware(history)];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export default createStore(reducers, enhancer);
