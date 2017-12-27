import {applyMiddleware, combineReducers, createStore, Middleware} from 'redux';
import userReducer from './reducers/userReducer';
import tweetsReducer from './reducers/tweetsReducer';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetsReducer,
});

const error : Middleware = api => next => action => {
    try {
        return next(action);
    } catch (e){
        throw "ahh error";
    }
};

const middleware = applyMiddleware(thunk, logger, error);

const store = createStore(reducers, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState());
});

//store.dispatch({type:"CHANGE_NAME", payload:"Will"});
//store.dispatch({type:"CHANGE_AGE", payload:35});


const t:any = async (dispatch) => {
    dispatch({type:"CHANGE_NAME", payLoad:"Will"});
    const t = await fetch("http://rest.learncode.academy/api/johnbob/friends");
    console.log(t);
    dispatch({type:"CHANGE_NAME", payLoad:"smith"});
};

store.dispatch(t);
