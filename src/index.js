import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
require('./ably');

ReactDOM.render(<App />, document.getElementById('root'));
