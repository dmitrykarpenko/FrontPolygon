import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../node_modules/highlight.js/styles/github.css'
import './index.css';

import Docs from './docs/Docs';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Docs />,
    document.getElementById('root')
);

registerServiceWorker();
