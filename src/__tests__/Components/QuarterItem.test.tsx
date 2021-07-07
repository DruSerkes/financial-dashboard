import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { QuarterItem } from '../../Components/QuarterItem';
import { QuarterDataType } from '../../data/dataTypes';

describe('QuarterItem tests', () => {
  const quarter: QuarterDataType = {
    title: 'heres the title',
    details: [{
      name: 'attention to',
      value: 'detail'
    }],
    show: true
  };
  const handleShowDetail = jest.fn();
  it('should render without breaking', () => {
    render(<QuarterItem quarter={quarter} handleShowDetail={handleShowDetail} />);
  });

  it('should render column header names', () => {
    const { getByText } = render(<QuarterItem quarter={quarter} handleShowDetail={handleShowDetail} />);
    const title = getByText(quarter.title);
    expect(title).toBeInTheDocument();
    const name = getByText(`${quarter.details[0].name}`);
    expect(name).toBeInTheDocument();
    const value = getByText(`: ${quarter.details[0].value}`);
    expect(value).toBeInTheDocument();
  });

  it('should call handleShowDetail', () => {
    const { getByTestId } = render(<QuarterItem quarter={quarter} handleShowDetail={handleShowDetail} />);
    const arrow = getByTestId('arrow-dropup');
    fireEvent.click(arrow);
    expect(handleShowDetail).toHaveBeenCalledTimes(1);
  });
});