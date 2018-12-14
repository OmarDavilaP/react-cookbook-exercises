import {createStore} from 'redux';

//import root reducer which will contains all reducers
import rootReducer from '../reducers';

export default function configureStore(initialState){
    return createStore(rootReducer,initialState);
    }
