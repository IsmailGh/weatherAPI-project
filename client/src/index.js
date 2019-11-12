import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//views
import Home from './views/Home';
import App from './views/App';
import CurrentWeather from './views/CurrentWeather';
//import ErrorDisplay from './views/ErrorDisplay';


ReactDOM.render(
    <Router>
        <App>
            <Route exact path='/' component={Home}/>
            <Route exact path='/current-weather' component={CurrentWeather}/>
        </App>
    </Router>

    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
