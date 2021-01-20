import {SET_DATA,TOGGLE_FETCHING_STATE} from '../actionType';
const initailState={
    data1:null,
    isDataFetching:false
}
const fetchReducer = (state=initailState,action) => {
    const {type,payload}=action
    switch(type)
    {
        case SET_DATA:
            return {...state,data1:payload}
        case TOGGLE_FETCHING_STATE:
            return {...state,isDataFetching:!state.isDataFetching}
        default:
             return state;
    }
}
export default fetchReducer