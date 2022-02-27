import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import SearchBar from './SearchBar'
ReactDOM.render(
  <>
    <Clock/>
    <App />
    <SearchBar/>
  </>,
  document.getElementById('root')
);

