import * as React from 'react';
import { Box } from '@material-ui/core';

// interface ComponentProps {propTypes}

export const Home: React.FC = () => {
  return (
    <Box className="Home">
      <Box className="Home-Info">
        <p>Info</p>
      </Box>

      <Box className="Home-Allocation">
        <p>Allocation</p>
      </Box>
      <Box className="Home-Performance">
        <p>Performance</p>
      </Box>
      <Box className="Home-Positions">
        <p>Positions</p>
      </Box>

    </Box>
  );
};