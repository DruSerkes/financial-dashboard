import * as React from 'react';
import { render } from '@testing-library/react';
import { Quarters } from '../../Components/Quarters';
import { QuarterType } from '../../data/dataTypes';

describe('Quarters tests', () => {
  const quarters: QuarterType[] = [{
    title: 'heres the title',
    details: [{
      name: 'attention to',
      value: 'detail'
    }]
  }];

  it('should render without breaking', () => {
    render(<Quarters quarters={quarters} />);
  });
});