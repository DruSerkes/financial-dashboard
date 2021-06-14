import * as React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from '../../Components/Navbar';

describe('Navbar tests', () => {
  it('should render without breaking', () => {
    render(<Navbar />);
  });

  it('should render text', () => {
    const { getByText } = render(<Navbar />);
    const navText = getByText('Stocks');
    expect(navText).toBeInTheDocument();
  })
});