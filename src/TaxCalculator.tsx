import React, { useState } from 'react';

type Props = {};

type FormValues = {
  agi: number;
  taxOwed: number;
};

const TaxCalculator: React.FC<Props> = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    agi: 0,
    taxOwed: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: parseFloat(value),
    });
  };

  const calculateTax = () => {
    let taxOwed = 0;

    const brackets = [
      { max: 9950, rate: 0.1 },
      { max: 40525, rate: 0.12 },
      { max: 86375, rate: 0.22 },
      { max: 164925, rate: 0.24 },
      { max: 209425, rate: 0.32 },
      { max: 523600, rate: 0.35 },
      { max: Infinity, rate: 0.37 },
    ];

    let remainingIncome = formValues.agi;

    for (let i = 0; i < brackets.length; i++) {
      const bracket = brackets[i];

      if (remainingIncome <= bracket.max) {
        taxOwed += remainingIncome * bracket.rate;
        break;
      } else {
        const taxableIncome = bracket.max - (i === 0 ? 0 : brackets[i - 1].max);
        taxOwed += taxableIncome * bracket.rate;
        remainingIncome -= taxableIncome;
      }
    }

    setFormValues({
      ...formValues,
      taxOwed: taxOwed,
    });
  };

  return (
    <div>
      <h1>Federal Income Tax Calculator</h1>
      <form>
        <div>
          <label htmlFor="agi">Enter your Adjusted Gross Income:</label>
          <input type="number" id="agi" name="agi" value={formValues.agi} onChange={handleInputChange} />
        </div>
        <div>
          <button type="button" onClick={calculateTax}>Calculate</button>
        </div>
      </form>
      <div>
        <p>Your estimated tax owed: ${formValues.taxOwed.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default TaxCalculator;
