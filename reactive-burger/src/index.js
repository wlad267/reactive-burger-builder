import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom'

axios.interceptors.request.use((request) => {
    console.log('intecepting request ' + JSON.stringify(request));

    return request;
})

const app = (
    <BrowserRouter>
        <App title='Person Manager Ractive App'/>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
