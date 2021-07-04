import * as React from 'react';
import { Box } from '@material-ui/core';
import { Performance } from '../Components/Performance';
import { Allocation } from '../Components/Allocation';
import { Positions } from '../Components/Positions';
import { Info } from '../Components/Info';
// interface HomeProps {propTypes}

export const Home: React.FC = () => {
  return (
    <Box className="Home">
      <Box className="Home-Info">
        <p>Info</p>
        <Info />
      </Box>
      <Box className="Home-Allocation">
        <p>Allocation (%)</p>
        <Allocation />
      </Box>
      <Box className="Home-Performance">
        <p>Performance</p>
        <Performance />
      </Box>
      <Box className="Home-Positions">
        <p>Positions</p>
        <Positions />
      </Box>

    </Box>
  );
};