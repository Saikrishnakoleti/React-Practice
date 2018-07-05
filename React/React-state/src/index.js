import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comp from './state';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comp />, document.getElementById('root'));
registerServiceWorker();
