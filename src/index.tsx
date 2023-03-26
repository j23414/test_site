import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TaxCalculator from './TaxCalculator';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App message="Hello, world!" />
    <TaxCalculator/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
