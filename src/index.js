import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <MyComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

