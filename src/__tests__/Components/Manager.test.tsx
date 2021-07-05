import * as React from 'react';
import { render } from '@testing-library/react';
import { Manager } from '../../Components/Manager';
import { ManagerType } from '../../data/dataTypes';

describe('Manager tests', () => {
  const managerData: ManagerType = {
    firstName: 'I would like',
    lastName: 'to speak with',
    position: 'the manager'
  };

  it('should render without breaking', () => {
    render(<Manager manager={managerData} />);
  });

  it('should display the manager data', () => {
    const { getByText } = render(<Manager manager={managerData} />);
    const name = getByText(`${managerData.firstName} ${managerData.lastName}`);
    const position = getByText(managerData.position);
    expect(name).toBeInTheDocument();
    expect(position).toBeInTheDocument();
  });
});