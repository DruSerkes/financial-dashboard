import * as React from 'react';
import { render } from '@testing-library/react';
import { Positions } from '../../Components/Positions';
import { positions } from '../../data/positionsData';

describe('Positions tests', () => {
  const columns = Object.keys(positions[0]).map(field => {
    const headerField = field.split('_').join(' ');
    const headerName = `${headerField[0].toUpperCase()}${headerField.slice(1)}`;
    return { field, headerName, width: 150 };
  });

  it('should render without breaking', () => {
    render(<Positions />);
  });

  it('should render column header names', () => {
    const { getByText } = render(<Positions />);
    const { headerName } = columns[0];
    expect(getByText(headerName)).toBeInTheDocument();
    const { headerName: headerName2 } = columns[1];
    expect(getByText(headerName2)).toBeInTheDocument();
  });
});