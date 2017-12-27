import {applyMiddleware, combineReducers, createStore, Middleware, compose} from 'redux';
import userReducer from './reducers/userReducer';
import tweetsReducer from './reducers/tweetsReducer';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetsReducer,
});
declare var window:any;
const error : Middleware = api => next => action => {
    try {
        return next(action);
    } catch (e){
        throw "ahh error";
    }
};

const middleware = [thunk, logger, error];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const store = createStore(reducers, enhancer);

//store.dispatch({type:"CHANGE_NAME", payload:"Will"});
//store.dispatch({type:"CHANGE_AGE", payload:35});


const t:any = async (dispatch) => {
    dispatch({type:"CHANGE_NAME", payLoad:"Will"});
    const t = await fetch("http://rest.learncode.academy/api/johnbob/friends");
    console.log(t);
    dispatch({type:"CHANGE_NAME", payLoad:"smith"});
};

store.dispatch(t);
