import {combineReducers} from 'redux';
import fetchReducer from './reducers/fetchReducer';
const rootReducer = combineReducers ({
    dataState:fetchReducer
});
export default rootReducer