import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Principal from './pages/principal';

function Routes () {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Principal}/> 
        </BrowserRouter>
    )  
}

export default Routes;
