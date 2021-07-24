import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h2>
        React Calculator
      </h2>
    </header>
    <App />
    <footer>
      <a href="#">Github Link</a>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);