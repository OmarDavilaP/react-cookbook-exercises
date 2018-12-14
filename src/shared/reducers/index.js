import {combineReducers} from 'redux';

//shared reducers
import device from './deviceReducer';
//component
import coins from '../../reducers/coinsReducer';

const rootReducer = combineReducers({
    coins,
    device
});

export default rootReducer;