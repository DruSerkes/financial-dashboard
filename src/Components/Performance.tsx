import * as React from 'react';
import { AreaChart, Area, CartesianGrid, YAxis, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { performance } from '../data/performanceData';

// interface PerformanceProps { };

export const Performance: React.FC = () => {

  return (
    <ResponsiveContainer width="100%" height="80%">
      <AreaChart data={performance} height={300} width={420} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
        <Area type="monotone" dataKey="balance" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
      </AreaChart>
    </ResponsiveContainer>
  )
};