import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';

import { positions } from '../data/positionsData';


// interface PositionsProps { }

export const Positions = () => {
  const rows = positions.map((position, id) => ({ ...position, id }))
  const columns = Object.keys(positions[0]).map(field => {
    const headerField = field.split('_').join(' ');
    const headerName = `${headerField[0].toUpperCase()}${headerField.slice(1)}`;
    return { field, headerName, width: 150 };
  });

  return (
    <Box className="Positions-Table">
      <DataGrid rows={rows} columns={columns} />
    </Box>
  )
};