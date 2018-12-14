import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './component/routes';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';

//third party libraries
import configureStore from './shared/redux/configureStore';
import {Provider} from 'react-redux';

const store = configureStore(window.initialState)

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter >
    <AppRoutes />
    </BrowserRouter>
</Provider>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
