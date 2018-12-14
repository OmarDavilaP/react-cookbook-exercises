import React from 'react';
import {Route} from 'react-router-dom';
//components
import App from './App';
import Animation from './animation-fade/Animation';


const AppRoutes=()=>{

    return[
            <Route key="1" path="/" component={App}/>,
            <Route key="2" path="/animation" component={Animation}/>
    ]
}

export default AppRoutes;