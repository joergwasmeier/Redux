import {combineReducers} from 'redux';
import tweets from './tweetsReducer';
import {routerReducer} from 'react-router-redux';
import user from './userReducer';

export const reducers = combineReducers({
    user,
    tweets,
    router:routerReducer
});