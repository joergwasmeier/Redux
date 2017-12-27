import {combineReducers} from 'redux';
import tweets from './tweetsReducer';
import user from './userReducer';

export const reducers = combineReducers({
    user,
    tweets,
});