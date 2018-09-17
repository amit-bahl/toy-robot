import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Simulator from './Containers/Simulator'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Simulator />, document.getElementById('root'));
registerServiceWorker();
