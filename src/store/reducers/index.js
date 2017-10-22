import { combineReducers } from 'redux';
import events from './eventReducer';
import user from './userReducer';

const rootReducer = combineReducers({
    events,
    user
});

export default rootReducer;
