import * as types from '../../utils/constants';
import axios from 'axios';

export const createEvent = event =>{
    return {
        type : types.FETCH_USER_SUCCES,
        event
    }
}

export const loginUser = (user) => {
    // const request = axios.post('https://testproject-api-v2.strv.com/auth/native',
    //                 {
    //                     'email': "brucebanner@strv.com",
    //                     'password': "kill3r"
    //                 },
    //                 {headers: {
    //                       'Content-Type':'application/json',
    //                       'APIKey': types.API_KEY
    //                   }
    //               }).then((data)=>{
    //                     console.log(data);
    //                 })

    // const request = axios({
    //                   method: 'post',
    //                   url: 'https://testproject-api-v2.strv.com/auth/native',
    //                   data: {
    //                       'email': "brucebanner@strv.com",
    //                       'password': "kill3r"
    //                   },
    //                   headers: {
    //                       'Content-Type':'application/json',
    //                       'APIKey':'mg9mviP9cDNV9Q8i77z/1fpjnJuYNbCmuY67msVt/y4R'
    //                   }
    //               }).then((data)=>{
    //                   console.log(data);
    //               })

    return (dispatch)=>{
        setTimeout(function(){
            dispatch({type:'CREATE_EVENT',event :{name:'santiago'}})
        }, 3000);
    }
}
