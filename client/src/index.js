import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


ReactDOM.render(<App />, document.getElementById('root'));
unregisterServiceWorker();


//line 5 and line 8 will clear brwoser cache so you can see the changes



