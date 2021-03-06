import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppComponent from './components/App.jsx';
import store from './store.js';

ReactDOM.render(<Provider store={store}><AppComponent /></Provider>, document.getElementById('app'));
