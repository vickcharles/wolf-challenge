import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './ts/app/AppContainer.js';
import * as serviceWorker from './serviceWorker';
import './assets/scss/App.scss';
import './assets/scss/overrides.scss'

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
