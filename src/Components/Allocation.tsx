import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { allocation } from '../data/allocationData';
import { AllocationType, ColorsType } from '../data/dataTypes';

// interface AllocationProps { };
export const Allocation = () => {
  const COLORS: ColorsType = {
    DOMESTIC: '#0088FE',
    CASH: '#00C49F',
    BONDS: '#FFBB28',
    INTERNATIONAL: '#FF8042'
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={allocation}
          dataKey="value"
          nameKey="category"
          isAnimationActive={false}
          outerRadius={80}
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label
          paddingAngle={5}
        >
          {allocation.map((entry: AllocationType) => {
            const key = entry.category.toUpperCase();
            return <Cell key={`Cell-${entry.category}`} fill={COLORS[key]} />
          })}
        </Pie>
        <Tooltip formatter={(value: Number) => `${String(value)}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
};