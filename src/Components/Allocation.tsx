import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, LabelList } from 'recharts';
import { allocation } from '../data/allocationData';

// interface AllocationProps { };

export const Allocation = () => {

  return (
    <ResponsiveContainer width="100%" height="85%">
      <PieChart>
        <Pie data={allocation} dataKey="value" nameKey="category" cx="50%" cy="50%" fill="#8884d8" >
          <LabelList dataKey="category" data={allocation} position="insideTop" className="Allocation-Label" />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
};