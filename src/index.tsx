import {applyMiddleware, combineReducers, createStore, Middleware} from 'redux';
import userReducer from './reducers/userReducer';
import tweetsReducer from './reducers/tweetsReducer';

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetsReducer,
});

const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    return next(action);
};

const error : Middleware = api => next => action => {
    try {
        return next(action);
    } catch (e){
        throw "ahh error";
    }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

store.dispatch({type:"CHANGE_NAME", payload:"Will"});
store.dispatch({type:"CHANGE_AGE", payload:35});
