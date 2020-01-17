import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'jquery/dist/jquery';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
