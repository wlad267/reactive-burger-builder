import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use((request) => {
    console.log('intecepting request ' + JSON.stringify(request));

    return request;
})

ReactDOM.render(<App title='Person Manager Ractive App' />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
