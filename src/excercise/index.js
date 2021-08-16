import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './modules';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);