import * as React from 'react';
import { Box } from '@material-ui/core';
import { Performance } from '../Components/Performance';
// interface HomeProps {propTypes}

export const Home: React.FC = () => {
  return (
    <Box className="Home">
      <Box className="Home-Info">
        <p>Info</p>
        {/* Dropdown for team / info */}
      </Box>

      <Box className="Home-Allocation">
        <p>Allocation</p>
        {/* TODO Pie chart for allocation data */}
      </Box>
      <Box className="Home-Performance">
        <p>Performance</p>
        <Performance />
      </Box>
      <Box className="Home-Positions">
        <p>Positions</p>
        {/* TODO table for positions info */}
      </Box>

    </Box>
  );
};