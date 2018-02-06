import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.css';
import App from './App';

const element = document.getElementById('root');
ReactDOM.render(<App />, element);

const loader = document.getElementById('loading');
setTimeout(() => loader.parentNode.removeChild(loader), 300);
