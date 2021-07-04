import * as React from 'react';
import { Collapse, Typography } from '@material-ui/core';

import { QuarterType } from '../data/dataTypes';

interface QuarterDetailProps {
  details: QuarterType['details'],
  show: boolean
}

export const QuarterDetail: React.FC<QuarterDetailProps> = ({ details, show }) => {
  return (
    <Collapse in={show} unmountOnExit>
      {details.map((detail) => (<Typography variant="body2"><strong>{detail.name}</strong>: {detail.value}</Typography>))}
    </Collapse>
  )
};