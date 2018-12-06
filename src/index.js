import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'lib-flexible'; //配合postcss-pxtorem使用

import App from './routers';
import registerServiceWorker from './registerServiceWorker';

import './style.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();