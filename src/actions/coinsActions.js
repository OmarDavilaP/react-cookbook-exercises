import  axios from 'axios';

//Action types

import {FETCH_COINS_ERROR,FETCH_COINS_REQUEST,FETCH_COINS_SUCCESS} from './actionTypes';
import {request,received,error} from '../shared/redux/baseActions';

export const fetchCoins=()=> dispatch=>{
    //dispatchig request
    dispatch(request(FETCH_COINS_REQUEST));

    //axios
    const axiosData={
        method:'GET',
        url:'https://api.coinmarketcap.com/v1/ticker/',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
                }
    }


    return axios(axiosData).then(respose=> dispatch(received(FETCH_COINS_SUCCESS,respose.data))
    ).catch(error=>{
        console.log('AXIOS ERROR: ',error.respose);
        dispatch(error(FETCH_COINS_ERROR));
    });
}