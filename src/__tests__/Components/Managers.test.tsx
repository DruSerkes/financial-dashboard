import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Managers } from '../../Components/Managers';
import { ManagerType } from '../../data/dataTypes';

describe('Manager tests', () => {
  const managerData: ManagerType = {
    firstName: 'I would like',
    lastName: 'to speak with',
    position: 'the manager'
  };
  const managerData2: ManagerType = {
    firstName: 'Why am',
    lastName: 'I still',
    position: 'writing unit tests?'
  };
  const managers = [managerData, managerData2];

  it('should render without breaking', () => {
    render(<Managers managers={managers} />);
  });

  it('should display the manager data', () => {
    const { getByText, getByTestId } = render(<Managers managers={managers} />);
    const expandButton = getByTestId('expand');
    fireEvent.click(expandButton);
    const name = getByText(`${managerData.firstName} ${managerData.lastName}`);
    const position = getByText(managerData.position);
    expect(name).toBeInTheDocument();
    expect(position).toBeInTheDocument();
  });
});