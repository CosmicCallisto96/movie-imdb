import {SET_DATA,TOGGLE_FETCHING_STATE} from '../actionType';
import axios from 'axios';
import config from '../../config'
export const setData=()=>async dispatch =>{

    try{
       dispatch({type:TOGGLE_FETCHING_STATE});
        const data=await axios(`https://api.themoviedb.org/3/list/1?api_key=${config.API_KEY}`);
        console.log(data);
        dispatch({type:SET_DATA,payload:data});
    }catch(err){
        console.log(err);
    }
    finally{
        dispatch({type:TOGGLE_FETCHING_STATE});
    };

};
export const fetchSearchData=(searchQuerry="")=>async dispatch =>{
console.log("djkmdkmkd")
    try{
        dispatch({type:SET_DATA,payload:null});
       dispatch({type:TOGGLE_FETCHING_STATE});
        const response=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${config.API_KEY}&language=en-US&query=${searchQuerry}`);
        console.log(response);
        dispatch({type:SET_DATA,payload:response});
    }catch(err){
        console.log(err);
    }
    finally{
        dispatch({type:TOGGLE_FETCHING_STATE});
    };

};
