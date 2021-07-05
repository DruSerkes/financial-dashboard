import * as React from 'react';
import { render } from '@testing-library/react';
import { Allocation } from '../../Components/Allocation';

describe('Allocation tests', () => {
  it('should render without breaking', () => {
    render(<Allocation />);
  });
});