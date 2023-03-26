import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PapersList from './PapersList.js';
import TaxCalculator from './TaxCalculator.js';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <TaxCalculator/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
