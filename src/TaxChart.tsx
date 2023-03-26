import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TaxChart = ({ agi, taxPaid }) => {
  const data = [
    {
      name: 'Tax Paid',
      percentage: (taxPaid / agi) * 100,
      fill: '#8884d8',
    },
  ];

  return (
    <BarChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="percentage" />
    </BarChart>
  );
};

export default TaxChart;
