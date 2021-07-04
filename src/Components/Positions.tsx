import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Box } from '@material-ui/core';

import { positions } from '../data/positionsData';


// interface PositionsProps { }

export const Positions = () => {
  const rows = positions.map((position, id) => ({ ...position, id }))
  const columns: GridColDef[] = Object.keys(positions[0]).map(field => {
    const headerField = field.split('_').join(' ');
    const headerName = `${headerField[0].toUpperCase()}${headerField.slice(1)}`;
    return { field, headerName, width: 150 };
  });

  return (
    <Box className="Positions-Container">
      <DataGrid rows={rows} columns={columns} className="Positions-Table" aria-label="Positions Table" pageSize={10} />
    </Box>
  )
};