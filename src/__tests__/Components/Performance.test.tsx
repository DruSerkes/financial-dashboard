import * as React from 'react';
import { render } from '@testing-library/react';
import { Performance } from '../../Components/Performance';

describe('Performance tests', () => {
  it('should render without breaking', () => {
    render(<Performance />);
  });
});