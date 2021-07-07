import * as React from 'react';
import { render } from '@testing-library/react';
import { QuarterDetail } from '../../Components/QuarterDetail';
import { QuarterType } from '../../data/dataTypes';

describe('QuarterDetail tests', () => {
  const details: QuarterType['details'] = [{
    name: 'attention to',
    value: 'detail'
  }];

  it('should render without breaking', () => {
    render(<QuarterDetail details={details} show />);
  });

  it('should render column header names', () => {
    const { getByText } = render(<QuarterDetail details={details} show />);
    const name = getByText(details[0].name);
    const value = getByText(`: ${details[0].value}`);
    expect(name).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});