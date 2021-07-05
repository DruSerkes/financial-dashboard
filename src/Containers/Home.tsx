import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Performance } from '../Components/Performance';
import { Allocation } from '../Components/Allocation';
import { Positions } from '../Components/Positions';
import { Info } from '../Components/Info';

export const Home: React.FC = () => {
  return (
    <Box className="Home">
      <Box className="Home-Info">
        <Typography variant="h5">Info</Typography>
        <Info />
      </Box>
      <Box className="Home-Allocation">
        <Typography variant="h5">Allocation %</Typography>
        <Allocation />
      </Box>
      <Box className="Home-Performance">
        <Typography variant="h5">Performance</Typography>
        <Performance />
      </Box>
      <Box className="Home-Positions">
        <Typography variant="h5">Positions</Typography>
        <Positions />
      </Box>
    </Box>
  );
};