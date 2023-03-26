import React, { useState } from 'react';

// Testing something
function TaxCalculator() {
  const [agi, setAgi] = useState('');
  // rest of component code goes here

  function calculateTax(agi) {
    // Your tax calculation logic goes here
    // For simplicity, let's assume a flat 10% tax rate
    return agi * 0.1; // https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets
  }
  
  function handleAgiChange(event) {
    setAgi(event.target.value);
  }
  
  return (
    <div>
      <input type="number" value={agi} onChange={handleAgiChange} />
      <button onClick={() => alert(calculateTax(agi))}>Calculate Tax</button>
    </div>
  );
}

export default TaxCalculator;


